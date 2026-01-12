import { LucideIcon } from "lucide-react";

export type Memory = {
    id: string;
    timestamp: string;
    summary: string;
    type: "activity" | "interaction" | "location";
    icon?: LucideIcon;
    details?: string;
    mood?: string;
    location?: string;
};

export type Patient = {
    id: string;
    name: string;
    status: "Safe" | "Needs Attention" | "Emergency";
    lastLocation: string;
    lastUpdate: string;
    batteryLevel: number;
};
