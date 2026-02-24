import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface HistoryItem {
  category: string;
  confidence: number;
  prediction_time_ms: number;
}

export function TicketHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/history")
      .then(res => res.json())
      .then(data => setHistory(data.history))
      .catch(err => console.error("Failed to fetch history:", err));
  }, []);

  return (
    <Card className="shadow-sm rounded-2xl border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl">Prediction History</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {history.length === 0 && (
          <p className="text-gray-500 text-sm">No predictions yet.</p>
        )}

        {history.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl bg-gray-50 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.category}</p>
              <p className="text-sm text-gray-500">
                Confidence: {item.confidence}%
              </p>
            </div>

            <p className="text-sm text-gray-600">
              {item.prediction_time_ms} ms
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}