# 🎫 AI-Powered IT Ticket Classification System

An end-to-end Machine Learning web application that classifies IT support tickets in real-time using NLP and displays live prediction analytics through an interactive dashboard.

---

## 🚀 Project Overview

This project uses Natural Language Processing (NLP) and Machine Learning to automatically classify IT support tickets into categories such as:

- Hardware
- Access
- HR Support
- Administrative Rights
- Storage
- Purchase
- Miscellaneous
- Internal Project

The system provides:
- Real-time predictions
- Confidence scoring
- Probability breakdown
- Prediction latency tracking
- Live prediction metrics
- Prediction history tracking

---

## 🧠 Machine Learning Pipeline

- Text Cleaning (lowercasing, regex, stopword removal)
- TF-IDF Vectorization
- Trained Scikit-learn Classification Model
- Probability-based confidence scoring

---

## 🖥 Tech Stack

### Backend
- FastAPI
- Scikit-learn
- Joblib
- Python

### Frontend
- React (Vite)
- TypeScript
- TailwindCSS
- ShadCN UI Components

---

## 📊 Features

- 🔍 Real-time ticket classification
- 📈 Confidence-based prediction coloring
- 📊 Top 3 probability visualization
- ⏱ Prediction time measurement (ms)
- 📜 Prediction history
- 📡 Live model performance metrics

---

## 📂 Project Structure
project-root/
│
├── backend/
│ ├── main.py
│ ├── model.pkl
│ ├── vectorizer.pkl
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ └── package.json
│
└── README.md


---

## ⚙️ How to Run Locally

### 1️⃣ Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs at:

http://127.0.0.1:8000

2️⃣ Frontend
cd frontend
npm install
npm run dev

Frontend runs at:

http://localhost:5173

Example API Response
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

