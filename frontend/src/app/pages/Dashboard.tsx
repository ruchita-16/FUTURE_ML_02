import { useState } from 'react';
import { TicketClassifier } from '../components/TicketClassifier';
import { PredictionResult } from '../components/PredictionResult';
import { ModelPerformance } from '../components/ModelPerformance';
import { TicketHistory } from '../components/TicketHistory';
import { predictTicket, PredictionResponse } from "../../services/api";

export function Dashboard() {
  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClassify = async (text: string) => {
    if (!text.trim()) return;

    setLoading(true);
    setPrediction(null);

    try {
      const result = await predictTicket(text);
      setPrediction(result); // Directly store full API response
    } catch (error) {
      console.error("Prediction failed:", error);
      alert("Could not connect to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-10">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TicketClassifier 
          onClassify={handleClassify}
          loading={loading}
        />

        {prediction && (
          <PredictionResult
            category={prediction.category}
            confidence={prediction.confidence}
            predictionTime={prediction.prediction_time_ms}
            probabilities={prediction.probabilities}
          />
        )}
      </div>

      <ModelPerformance />
      <TicketHistory />
    </div>
  );
}