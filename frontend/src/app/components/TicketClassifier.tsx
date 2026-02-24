import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

interface TicketClassifierProps {
  onClassify: (text: string) => void;
  loading?: boolean;   // ✅ Added loading prop
}

export function TicketClassifier({ onClassify, loading = false }: TicketClassifierProps) {
  const [ticketText, setTicketText] = useState('');

  const handleClassify = () => {
    if (ticketText.trim()) {
      onClassify(ticketText);
    }
  };

  return (
    <Card className="shadow-sm rounded-2xl border-gray-200">
      <CardHeader>
        <CardTitle className="text-xl">Ticket Classifier</CardTitle>
        <p className="text-sm text-gray-500 mt-2">
          Enter a customer support ticket to classify category and priority.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <Textarea
          placeholder="Paste customer support ticket here..."
          value={ticketText}
          onChange={(e) => setTicketText(e.target.value)}
          className="min-h-[140px] resize-none rounded-xl border-gray-300 focus:border-blue-400"
        />

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {ticketText.length} characters
          </span>

          <Button
            onClick={handleClassify}
            disabled={!ticketText.trim() || loading}
            className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6"
          >
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Analyzing..." : "Classify Ticket"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}