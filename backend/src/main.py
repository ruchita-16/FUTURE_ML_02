from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import joblib
import os
import time

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(__file__)

model = joblib.load(os.path.join(BASE_DIR, "model.pkl"))
vectorizer = joblib.load(os.path.join(BASE_DIR, "vectorizer.pkl"))

prediction_history = []

class TicketInput(BaseModel):
    text: str

@app.post("/predict")
def predict(ticket: TicketInput):

    start_time = time.time()

    text_vector = vectorizer.transform([ticket.text])

    prediction = model.predict(text_vector)[0]
    probabilities = model.predict_proba(text_vector)[0]

    end_time = time.time()

    prediction_time = round((end_time - start_time) * 1000, 2)  # ms

    confidence = round(float(max(probabilities)) * 100, 2)

    probability_dict = {
        label: round(float(prob) * 100, 2)
        for label, prob in zip(model.classes_, probabilities)
    }

    result = {
        "category": prediction,
        "confidence": confidence,
        "prediction_time_ms": prediction_time,
        "probabilities": probability_dict
    }

    prediction_history.append(result)

    return result

@app.get("/history")
def get_history():
    return {
        "total_predictions": len(prediction_history),
        "history": prediction_history
    }

@app.get("/metrics")
def get_metrics():
    total = len(prediction_history)

    if total == 0:
        avg_conf = 0
    else:
        avg_conf = round(
            sum(p["confidence"] for p in prediction_history) / total,
            2
        )

    return {
        "total_predictions": total,
        "average_confidence": avg_conf
    }