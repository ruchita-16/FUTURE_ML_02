import joblib
import re
import time
from nltk.corpus import stopwords

stop_words = set(stopwords.words("english"))

def clean_text(text: str) -> str:
    text = str(text).lower()
    text = re.sub(r"[^a-zA-Z]", " ", text)
    words = text.split()
    words = [word for word in words if word not in stop_words]
    return " ".join(words)

category_model = joblib.load("ticket_model.pkl")
priority_model = joblib.load("priority_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

def predict_ticket(text: str) -> dict:
    start_time = time.time()

    cleaned = clean_text(text)
    vector = vectorizer.transform([cleaned])

    # Category Prediction
    category = category_model.predict(vector)[0]
    category_probs = category_model.predict_proba(vector)[0]

    # Priority Prediction
    priority = priority_model.predict(vector)[0]
    priority_probs = priority_model.predict_proba(vector)[0]

    end_time = time.time()

    prediction_time = round((end_time - start_time) * 1000, 2)

    # Convert probabilities to readable format
    category_prob_dict = {
        label: round(float(prob) * 100, 2)
        for label, prob in zip(category_model.classes_, category_probs)
    }

    priority_prob_dict = {
        label: round(float(prob) * 100, 2)
        for label, prob in zip(priority_model.classes_, priority_probs)
    }

    # Confidence = highest category probability
    confidence = round(max(category_probs) * 100, 2)

    return {
        "category": category,
        "priority": priority,
        "confidence": confidence,
        "prediction_time_ms": prediction_time,
        "category_probabilities": category_prob_dict,
        "priority_probabilities": priority_prob_dict,
    }

if __name__ == "__main__":
    sample = input("Enter ticket text: ")
    result = predict_ticket(sample)

    print("\nPrediction Result:")
    for key, value in result.items():
        print(f"{key}: {value}")