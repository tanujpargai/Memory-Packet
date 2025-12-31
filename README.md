# Memory-Packet
An AI-powered cognitive assistant for early-stage dementia. Converts voice notes into structured "Memory Packets" to aid retention. Built with Next.js, Firebase, and Gemini 1.5.



# MemoryPacket 🧠 | Hack the Winter Submission

> **"Preserving the person, one memory at a time."**

## 🚨 The Problem
For the 55 million people living with dementia, the terrifying reality is the slow erosion of self. They don't just forget keys; they forget conversations, loved ones, and the context of their day. Traditional voice recorders are useless because listening to hours of raw audio is overwhelming.

## 💡 The Solution: Memory Packets
**MemoryPacket** is an accessibility-first web application that acts as an external hard drive for human memory.

Instead of just recording audio, it uses **Google Gemini 1.5 Flash** (Multimodal AI) to listen, analyze, and synthesize daily conversations into **"Memory Packets"**—structured, empathetic summaries that are easy to recall.

---

## ⚙️ Technical Flow & Architecture
This system utilizes a Serverless Architecture powered by Next.js and Firebase to ensure low latency and high availability.

```mermaid
graph TD
    User((User/Patient)) -->|1. Tap Record| UI[Frontend UI (Next.js)]
    UI -->|2. Stream Audio Blob| Server[Server Action (Node.js)]
    
    subgraph "AI Processing Layer"
    Server -->|3. Send Buffer| Gemini[Google Gemini 1.5 Flash]
    Gemini -->|4. Multimodal Analysis| Gemini
    Gemini -->|5. Return JSON Packet| Server
    end
    
    subgraph "Data Persistence"
    Server -->|6. Store Metadata| Firestore[(Firebase Firestore)]
    Server -->|7. Upload Audio| Storage[(Firebase Storage)]
    end
    
    Firestore -->|8. Real-time Sync| UI
    UI -->|9. Display Memory Card| User
