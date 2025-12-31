# Memory-Packet
An AI-powered cognitive assistant for early-stage dementia. Converts voice notes into structured "Memory Packets" to aid retention. Built with Next.js, Firebase, and Gemini 1.5.


# MemoryPacket 🧠 | Hack the Winter Submission

> **"Preserving the person, one memory at a time."**

## 🚨 The Problem
For the 55 million people living with dementia, the terrifying reality is the slow erosion of self. They don't just forget keys; they forget conversations, loved ones, and the context of their day. Traditional voice recorders are useless because listening to hours of raw audio is overwhelming.

## 💡 The Solution: Memory Packets
**MemoryPacket** is an accessibility-first web application that acts as an external hard drive for human memory.

Instead of just recording audio, it uses **Google Gemini 1.5 Flash** (Multimodal AI) to listen, analyze, and synthesize daily conversations into **"Memory Packets"**—structured, empathetic summaries that are easy to recall.

## 🌟 Key Features
* **🔴 One-Tap Interface:** Designed for geriatric users. No complex menus. Just a massive "Record" button.
* **⚡ Instant Analysis:** Uses Gemini 1.5 Flash to process audio directly (no intermediate text-to-speech needed) for sub-second latency.
* **🧩 Memory Packets:** Returns data in a structured JSON format:
    * **The Story:** A warm, second-person summary (e.g., "You spoke with your grandson...")
    * **The Mood:** Emotional analysis (Happy, Confused, Anxious).
    * **The Anchors:** Key entities (Names, Dates, Places) extracted for future search.
* **🎨 High-Contrast UI:** Built specifically for aging eyes (WCAG AAA standard).

## 🛠️ Tech Stack
* **Frontend:** Next.js 14 (App Router), Tailwind CSS
* **Backend:** Firebase (Firestore & Storage)
* **AI Engine:** Google Gemini API (`gemini-1.5-flash`)
* **Language:** TypeScript

## 🚀 How It Works
1.  **Capture:** User taps the Red Button and speaks.
2.  **Process:** Audio Blob is streamed to Firebase Storage.
3.  **Analyze:** Server Action triggers Gemini 1.5 Flash with the audio buffer.
4.  **Packetize:** Gemini extracts the "Memory Packet" (JSON).
5.  **Display:** The dashboard updates in real-time with the new Memory Card.

## 🔮 Future Roadmap
* **Active Recall:** AI quizzes the user ("Who did you meet yesterday?") to strengthen neural pathways.
* **Caregiver Mode:** Alerts family members if the "Mood" is consistently "Anxious" or "Confused."

---
*Submitted for Hack the Winter*
