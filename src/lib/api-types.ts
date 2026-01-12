/**
 * MemoryPacket System API Specifications
 * This file serves as the contract between Frontend and Backend (Design Submission)
 */

// 1. Auth & User Management
export interface AuthAPI {
    login(credentials: { id: string; secret: string }): Promise<{ token: string; role: 'patient' | 'caregiver' }>;
    // GET /user/role
    getRole(): Promise<'patient' | 'caregiver'>;
}

// 2. Location & Movement (Passive Collection)
export interface LocationAPI {
    // POST /location/update
    updateLocation(data: {
        latitude: number;
        longitude: number;
        accuracy: number;
        timestamp: number;
    }): Promise<void>;

    // POST /location/resolve-place
    resolvePlace(coords: { lat: number; lng: number }): Promise<{
        placeId: string;
        name: string; // "Home", "Medical Store"
        category: 'safe' | 'unknown' | 'danger';
    }>;
}

// 3. Memory Reconstruction (The Core Engine)
export interface MemoryEngineAPI {
    // POST /summary/generate
    // Triggered via cron or demand
    generateDailySummary(date: string): Promise<{
        summaryId: string;
        storyBlocks: Array<{
            time: string;
            text: string; // "You went for a walk."
            location?: string;
            mood?: string;
        }>;
    }>;

    // PATCH /summary/update
    // Caregiver correction loop
    updateSummary(id: string, edits: { text: string }): Promise<void>;
}

// 4. Alerts & Safety
export interface AlertAPI {
    // POST /alerts/evaluate
    evaluateAnomalies(context: {
        currentPath: Array<{ lat: number; lng: number }>;
        routinePath: Array<{ lat: number; lng: number }>;
    }): Promise<{
        isAnomaly: boolean;
        severity: 'low' | 'medium' | 'critical';
        reason?: 'route_deviation' | 'inactivity';
    }>;

    // POST /emergency/trigger
    triggerEmergency(): Promise<{
        alertId: string;
        notifiedContacts: string[];
    }>;
}

// 5. Voice & Accessibility
export interface VoiceAPI {
    // POST /voice/speak
    textToSpeech(text: string): Promise<ArrayBuffer>; // Returns audio stream
}
