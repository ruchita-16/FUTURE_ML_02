import { Card, CardContent } from './ui/card';
import { Zap, Target, TrendingDown } from 'lucide-react';

const impactMetrics = [
  {
    icon: Zap,
    value: '35%',
    label: 'Faster Ticket Routing',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Target,
    value: '92%',
    label: 'Auto-Categorization Accuracy',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: TrendingDown,
    value: '60%',
    label: 'Reduction in Manual Sorting',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export function BusinessImpact() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">Business Impact</h3>
      <div className="grid grid-cols-3 gap-4">
        {impactMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="shadow-sm rounded-2xl border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`${metric.bgColor} p-3 rounded-xl`}>
                    <Icon className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{metric.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
