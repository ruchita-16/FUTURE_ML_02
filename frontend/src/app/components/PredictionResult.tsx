import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface PredictionResultProps {
  category: string;
  confidence: number;
  predictionTime: number;
  probabilities: Record<string, number>;
}

export function PredictionResult({
  category,
  confidence,
  predictionTime,
  probabilities,
}: PredictionResultProps) {

  // Determine confidence color
  const getConfidenceColor = () => {
    if (confidence > 80) return "text-green-600";
    if (confidence > 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressColor = () => {
    if (confidence > 80) return "bg-green-600";
    if (confidence > 60) return "bg-yellow-500";
    return "bg-red-600";
  };

  // Sort probabilities (Top 3 only)
  const topProbabilities = Object.entries(probabilities)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <Card className="shadow-sm rounded-2xl border-gray-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <CardTitle className="text-xl">Prediction Result</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-2 block">
            Predicted Category
          </label>
          <Badge className="text-base px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
            {category}
          </Badge>
        </div>

        {/* Confidence */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-2 block">
            Confidence
          </label>

          <p className={`text-3xl font-semibold mb-3 ${getConfidenceColor()}`}>
            {confidence}%
          </p>

          <Progress value={confidence} className="h-2" />

          {confidence < 60 && (
            <div className="flex items-center gap-2 mt-3 text-red-600 text-sm">
              <AlertTriangle className="w-4 h-4" />
              Low confidence prediction. Manual review recommended.
            </div>
          )}
        </div>

        {/* Prediction Time */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-2 block">
            Prediction Time
          </label>
          <p className="text-lg font-medium text-gray-800">
            {predictionTime} ms
          </p>
        </div>

        {/* Top 3 Probabilities */}
        <div>
          <label className="text-sm font-medium text-gray-500 mb-3 block">
            Top Category Probabilities
          </label>

          <div className="space-y-3">
            {topProbabilities.map(([label, value]) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <Progress value={value} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
          Classification generated using trained Machine Learning model.
        </p>

      </CardContent>
    </Card>
  );
}