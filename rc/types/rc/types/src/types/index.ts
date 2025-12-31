export interface MemoryPacket {
  id: string;
  userId: string;
  audioUrl: string;
  transcript: string;
  
  // The AI Analysis
  summary: string;     // "You talked about your grandson..."
  mood: 'Happy' | 'Neutral' | 'Confused' | 'Sad' | 'Anxious';
  keywords: string[];  // ["Garden", "Sarah", "1990"]
  entities: string[];  // Names of people/places
  
  createdAt: number;   // Unix timestamp
  displayDate: string; // "Monday, Jan 1st"
}

export interface ProcessingStatus {
  isRecording: boolean;
  isProcessing: boolean;
  error: string | null;
}
