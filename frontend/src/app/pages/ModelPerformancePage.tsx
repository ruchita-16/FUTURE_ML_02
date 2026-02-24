import { ModelPerformance } from '../components/ModelPerformance';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TrendingUp, AlertCircle } from 'lucide-react';

export function ModelPerformancePage() {
  return (
    <div className="max-w-7xl mx-auto p-8 space-y-10">
      {/* Model Performance Metrics */}
      <ModelPerformance />

      {/* Additional Model Info */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="shadow-sm rounded-2xl border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <CardTitle className="text-xl">Training Details</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Training Dataset</span>
              <span className="font-semibold text-gray-900">12,450 tickets</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Test Dataset</span>
              <span className="font-semibold text-gray-900">3,112 tickets</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Updated</span>
              <span className="font-semibold text-gray-900">Feb 20, 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Model Version</span>
              <span className="font-semibold text-gray-900">v2.3.1</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm rounded-2xl border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-purple-600" />
              <CardTitle className="text-xl">Model Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <span className="text-sm text-gray-600">Most Accurate Category</span>
              <p className="font-semibold text-gray-900 mt-1">Billing (98.2%)</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Needs Improvement</span>
              <p className="font-semibold text-gray-900 mt-1">Technical Issue (89.1%)</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Average Confidence</span>
              <p className="font-semibold text-gray-900 mt-1">93.7%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
