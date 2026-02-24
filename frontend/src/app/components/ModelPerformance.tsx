import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { TrendingUp, Activity } from 'lucide-react';

interface Metrics {
  total_predictions: number;
  average_confidence: number;
}

export function ModelPerformance() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/metrics")
      .then(res => res.json())
      .then(data => setMetrics(data))
      .catch(err => console.error("Failed to fetch metrics:", err));
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">
        Live Model Performance
      </h3>

      <div className="grid grid-cols-2 gap-4">

        <Card className="shadow-sm rounded-2xl border-gray-200 bg-gray-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">
                Total Predictions
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {metrics?.total_predictions ?? 0}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm rounded-2xl border-gray-200 bg-gray-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-600">
                Avg Confidence
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900">
              {metrics?.average_confidence ?? 0}%
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}