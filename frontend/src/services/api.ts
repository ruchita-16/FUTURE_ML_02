// api.ts

export interface PredictionResponse {
  category: string;
  confidence: number;
  prediction_time_ms: number;
  probabilities: Record<string, number>;
}

const API_BASE = "http://127.0.0.1:8000";

export async function predictTicket(text: string): Promise<PredictionResponse> {
  try {
    const response = await fetch(`${API_BASE}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Prediction failed: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}