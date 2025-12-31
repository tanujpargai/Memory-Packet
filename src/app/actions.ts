'use server';

import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { revalidatePath } from "next/cache";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function createMemoryPacket(formData: FormData) {
  try {
    const audioFile = formData.get('audio') as File;
    if (!audioFile) throw new Error("No audio file provided");

    // Convert Audio to Base64 for Gemini
    const buffer = Buffer.from(await audioFile.arrayBuffer());
    const base64Audio = buffer.toString('base64');

    // 1. AI Analysis (The "Hack" part)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
      Act as a compassionate memory assistant. Listen to this audio.
      Return a JSON object with:
      1. "summary": A warm, 2nd-person summary (e.g. "You talked about...")
      2. "mood": One word (Happy, Calm, Confused, Anxious)
      3. "keywords": Array of 3 key topics.
      4. "entities": Array of people or places mentioned.
      Output ONLY raw JSON.
    `;

    const result = await model.generateContent([
      prompt,
      { inlineData: { data: base64Audio, mimeType: audioFile.type || 'audio/webm' } }
    ]);

    const text = result.response.text().replace(/```json|```/g, "").trim();
    const packet = JSON.parse(text);

    // 2. Save to Database
    await addDoc(collection(db, "users", "demo_user", "memories"), {
      ...packet,
      createdAt: Date.now(),
      // In a real app, we would upload the audio file to Storage here
      // and save the URL. For the hackathon, we save the metadata.
      hasAudio: true 
    });

    revalidatePath('/'); // Refresh the UI instantly
    return { success: true };

  } catch (error) {
    console.error("Error processing memory:", error);
    return { success: false, error: "Failed to create memory packet" };
  }
}
