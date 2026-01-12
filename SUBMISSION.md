# MemoryPacket: Round 2 Submission 🧠
> **"Our system does not try to make dementia patients remember — it remembers for them, calmly and safely."**

---

## 1️⃣ System Diagram & Architecture

MemoryPacket operates on a **Sensor-Cloud-AI pipeline** designed to transform cold, raw data into warm, human reassurance.

### Core Components
1.  **Patient App (Passive "Cognitive Prosthetic")**: Runs quietly in the background. Collects coarse location traces, ambient audio (voice-activated), and accelerometer data. **Zero active input** is required from the patient.
2.  **Caregiver Intelligence Dashboard**: A control center for family members to monitor safety, define "normal" routines, and correct AI-generated summaries.
3.  **Sensor Ingestion Service**: A high-throughput gateway that buffers and anonymizes incoming raw sensor streams.
4.  **Memory Reconstruction Engine**: The "brain" of the system. It uses logic + GenAI to correlate "Location: Park" + "Activity: Walking" into "You went for a walk."
5.  **Alert & Notification Service**: Real-time anomaly detector that compares current behavior against historical patterns (e.g., "Left home at 3 AM").

### Data Flow Execution
1.  **Collection**: The patient's device caches sensor logs offline and syncs them in small batches to the **Ingestion Service**.
2.  **Processing**: The **Reconstruction Engine** resolves GPS coordinates to familiar places (e.g., "Home", "Medical Store") and identifies voice signatures.
3.  **Synthesis**: A structured "Daily Story" is generated.
    *   *Patient View*: "You went to the store." (Simple, reassuring)
    *   *Caregiver View*: "Visisted MedPlus at 10:14 AM for 15 mins." (Detailed, actionable)
4.  **Interaction**: The patient opens the app and hears the story read aloud.
5.  **Intervention**: If an anomaly occurs (e.g., route deviation), the **Alert Service** pushes a notification to the caregiver immediately.

### System Topology

```mermaid
graph TD
    subgraph "Patient Node"
        Mobile[Mobile App] -->|Passive Stream| Cache[Offline Cache]
        Cache -->|Sync (Encrypted)| API_Gateway
    end

    subgraph "Cloud Infrastructure"
        API_Gateway -->|Load Balance| Ingest[Ingestion Service]
        Ingest -->|Queue| Memorizer[Memory Engine]
        
        Memorizer -->|Resolve| Places[Place API]
        Memorizer -->|Synthesize| AI[GenAI Model]
        
        AI --> DB[(Secure Database)]
        DB -->|Analyze| Sentinel[Anomaly Detector]
    end

    subgraph "Caregiver Node"
        Sentinel -->|Push Alert| CaregiverApp[Caregiver Dashboard]
        DB -->|Read Timeline| CaregiverApp
        CaregiverApp -->|Correct| DB
    end
```

---

## 2️⃣ Scalability & Reliability

We designed MemoryPacket to scale from a single family to thousands of users without compromising the "real-time" promise of safety.

### 📈 Handling Growth
*   **Microservices Architecture**: The *Ingestion Service* (high write volume) is decoupled from the *Reconstruction Engine* (high compute). We can scale ingestion horizontally to handle thousands of incoming sensor streams without blocking the AI processing.
*   **Asynchronous Processing**: Memory generation is not blocking. Data is queued, ensuring that a spike in activity does not crash the user-facing APIs.
*   **Database Sharding**: Time-series sensor data is partitioned by `UserID` and `Month`, ensuring queries remain fast even as history grows.

### 🛡️ Failure Handling
*   **Graceful Degradation**:
    *   *GPS Failure*: System falls back to Wi-Fi SSID triangulation or reports "Last Known Location".
    *   *AI Failure*: If the GenAI service is down, the system automatically degrades to a "Raw Timeline" mode (showing simple timestamps and icons) rather than showing nothing.
*   **Offline First**: The patient app is fully functional offline. Reassurance messages and the last known story are cached locally. Data syncs automatically when connections restore.
*   **Fail-Safe UI**: A dedicated "I'm Confused" button works locally, playing a pre-downloaded reassuring message ("You are safe, Dad") even if the server is unreachable.

---

## 3️⃣ Team Contribution

Our team operated with distinct roles to ensure depth in every layer of the stack.

| Role | Responsibility & Impact |
| :--- | :--- |
| **Frontend & UX** | **Accessibility-First Design**: Built the "Cognitive Prosthetic" UI. Focused on high contrast, large touch targets, and reducing cognitive load. *Impact: Ensured the app reduces anxiety rather than creating it.* |
| **Backend Architect** | **API & Infrastructure**: Designed the microservices logic and the secure ingestion pipeline. Implemented the offline-sync protocol. *Impact: Guaranteed data reliability even in poor network conditions.* |
| **AI & Logic** | **Memory Reconstruction**: Tuned the prompt engineering for the "warm" summary generation and built the anomaly detection heuristics. *Impact: Turned cold data into human stories.* |
| **System Design** | **Architecture & Research**: Defined the privacy zones, data flow, and scalability strategy. Documented the system constraints. *Impact: Ensured the solution is ethical and technically viable.* |

---

## 4️⃣ Repository Structure

We maintained a clean separation of concerns to facilitate parallel development.

```text
/memory-packet
├── /docs                   # Architecture & Research
│   ├── system-diagram.md   # Mermaid charts & flow explanations
│   ├── scalability.md      # Load balancing & sharding strategies
│   └── privacy-spec.md     # Encryption & access control protocols
│
├── /frontend               # Next.js Application (Monorepo)
│   ├── /app/patient        # The high-contrast "Cognitive Prosthetic"
│   ├── /app/caregiver      # The detailed "Control Center"
│   └── /components         # Shared accessible UI library
│
├── /backend                # Serverless Functions / API Services
│   ├── /ingest             # High-throughput sensor buffering
│   ├── /engine             # Memory Reconstruction Logic
│   └── /alerts             # Anomaly detection triggers
│
└── README.md               # Master documentation & setup guide
```

---

## 🧠 Core Philosophy
MemoryPacket is built on a single truth: **Dementia strips away context, not just facts.** By providing continuous context ("You are safe," "You are home") and reconstructing the day without demand, we don't just track a patient—we dignity them.
