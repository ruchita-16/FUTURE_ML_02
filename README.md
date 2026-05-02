# 🚀 FUTURE_ML_02 – AI-Powered Support Ticket Classification System

An end-to-end Machine Learning web application that automatically classifies IT support tickets using NLP and displays real-time predictions through an interactive dashboard.

---

## 📌 Project Overview

In real-world systems, support teams receive thousands of tickets daily. Manually categorizing them leads to:

- Delays in resolving urgent issues  
- Inefficient workload distribution  
- Increased operational cost  

This project solves that by using Machine Learning to:

- Automatically classify support tickets  
- Provide confidence scores  
- Show probability distribution  
- Track prediction performance in real-time  

---

## 🧠 How It Works (Flow)

1. User enters a support ticket in the frontend  
2. Request is sent to FastAPI backend  
3. Text is cleaned (lowercasing, removing symbols, stopwords)  
4. TF-IDF vectorization is applied  
5. Trained ML model predicts category  
6. Backend returns:
   - Category  
   - Confidence score  
   - Prediction time  
   - Probability distribution  
7. Frontend displays results on dashboard  

---

## 🎯 Features

- Real-time ticket classification  
- Confidence score visualization  
- Top 3 probability breakdown  
- Prediction time tracking (ms)  
- Prediction history tracking  
- Live model performance metrics  
- Low-confidence warning system  

---

## 🛠 Tech Stack

### Backend
- Python  
- FastAPI  
- Scikit-learn  
- Joblib  
- NLTK  

### Frontend
- React (Vite)  
- TypeScript  
- Tailwind CSS  
- ShadCN UI  

---

## 📂 Project Structure

```
FUTURE_ML_02/
│
├── backend/
│   ├── src/
│   │   ├── main.py
│   │   ├── predict.py
│   │   ├── train_model.py
│   │   ├── preprocess.py
│   │   ├── vectorizer.pkl
│   │   ├── ticket_model.pkl
│   │   └── priority_model.pkl
│   │
│   ├── data/
│   │   └── dataset.csv
│   │
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/ruchita-16/FUTURE_ML_02.git
cd FUTURE_ML_02
```

---

## 🧪 Backend Setup

### Step 1: Create Virtual Environment

```bash
python -m venv venv
```

Activate:

```bash
venv\Scripts\activate
```

---

### Step 2: Install Dependencies

```bash
pip install -r backend/requirements.txt
```

---

### Step 3: Train Model (if not already)

```bash
python backend/src/train_model.py
```

This generates:
- ticket_model.pkl  
- priority_model.pkl  
- vectorizer.pkl  

---

### Step 4: Run Backend

```bash
uvicorn backend.src.main:app --reload
```

Backend runs at:  
http://127.0.0.1:8000  

API Docs:  
http://127.0.0.1:8000/docs  

---

## 🌐 Frontend Setup

### Step 1: Go to frontend

```bash
cd frontend
```

---

### Step 2: Install dependencies

```bash
npm install
```

---

### Step 3: Run frontend

```bash
npm run dev
```

Frontend runs at:  
http://localhost:5173  

---

## 📡 API Endpoint

### POST /predict

Request:

```json
{
  "text": "My laptop screen is not working"
}
```

Response:

```json
{
  "category": "Hardware",
  "confidence": 87.45,
  "prediction_time_ms": 4.8,
  "probabilities": {
    "Hardware": 87.45,
    "Miscellaneous": 6.12,
    "Access": 3.21
  }
}
```

---

## 📊 Example Use Cases

- IT Helpdesk Automation  
- SaaS Customer Support Systems  
- Complaint Management Systems  
- Internal Ticket Routing  

---

## 🚀 Future Improvements

- Improve model accuracy  
- Handle class imbalance  
- Deploy backend & frontend  
- Add database for history  
- Add authentication  

---

## 👨‍💻 Author

Ruchita Rathod  
Machine Learning & Full Stack Developer  

---

## ⭐ If you found this useful, consider giving a star!
