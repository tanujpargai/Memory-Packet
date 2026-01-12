import { StatusCard } from "@/components/caregiver/StatusCard";
import { Timeline } from "@/components/caregiver/Timeline";
import { Memory } from "@/types";
import { Activity, AlertTriangle, Battery, MapPin, ShieldCheck, User } from "lucide-react";

// Mock Data
const RECENT_ACTIVITY: Memory[] = [
    {
        id: "4",
        timestamp: "1:20 PM",
        summary: "Interaction with Ramesh (Neighbor)",
        details: "Detected voice signature 'Ramesh' for 12 mins. Tone: Friendly.",
        type: "interaction",
        icon: User,
        location: "Near Home Entrance"
    },
    {
        id: "3",
        timestamp: "11:45 AM",
        summary: "Unexpected stop at Pharmacy",
        details: "Deviation from usual route. Duration: 15 mins.",
        type: "location",
        icon: AlertTriangle,
        location: "City Med Store"
    },
    {
        id: "2",
        timestamp: "10:15 AM",
        summary: "Morning Walk",
        details: "Walking speed normal (0.8 m/s). Heart rate stable.",
        type: "activity",
        icon: Activity,
        location: "Park Ave"
    }
];

export default function CaregiverDashboard() {
    return (
        <main className="min-h-screen bg-caregiver-bg p-6 lg:p-10 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Col: Main Stats & Map */}
                <div className="lg:col-span-2 space-y-8">
                    <header className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-caregiver-primary font-medium">Monitoring: Dad (Device #8392)</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 bg-white rounded-full border text-sm font-semibold flex items-center gap-2">
                                <Battery className="w-4 h-4 text-green-500" /> 84%
                            </span>
                            <span className="px-3 py-1 bg-white rounded-full border text-sm font-semibold flex items-center gap-2 text-green-600">
                                <ShieldCheck className="w-4 h-4" /> Online
                            </span>
                        </div>
                    </header>

                    {/* Status Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <StatusCard
                            label="Current Status"
                            value="Safe"
                            subValue="At Home (Living Room)"
                            icon={ShieldCheck}
                            status="good"
                        />
                        <StatusCard
                            label="Anomalies Today"
                            value="1 Alert"
                            subValue="Unusual stop at Pharmacy"
                            icon={AlertTriangle}
                            status="warning"
                        />
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-white rounded-3xl p-1 shadow-sm border h-64 sm:h-80 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                            <MapPin className="w-12 h-12 text-caregiver-primary opacity-50 animate-bounce" />
                            <span className="sr-only">Map View</span>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-bold shadow-sm">
                            Last update: 2 mins ago
                        </div>
                        {/* Fake map pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border shadow-sm">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-caregiver-primary" />
                            Live Timeline
                        </h2>
                        <Timeline items={RECENT_ACTIVITY} />
                    </div>
                </div>

                {/* Right Col: Quick Actions & Alerts */}
                <div className="space-y-6">
                    {/* Alerts Board */}
                    <div className="bg-white rounded-2xl p-6 border border-caregiver-danger/20 shadow-sm">
                        <h3 className="text-sm font-bold uppercase text-caregiver-danger mb-4 tracking-wider flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4" /> Active Alerts
                        </h3>
                        <div className="space-y-3">
                            <div className="p-3 bg-red-50 rounded-lg border border-red-100 text-sm">
                                <p className="font-bold text-red-900">Deviation from Routine</p>
                                <p className="text-red-700 mt-1">Visited "City Med Store" which is not in frequent locations.</p>
                                <div className="mt-2 flex gap-2">
                                    <button className="px-3 py-1 bg-white border border-red-200 rounded text-xs font-bold text-red-700">Acknowledge</button>
                                    <button className="px-3 py-1 bg-red-600 text-white rounded text-xs font-bold">Call Patient</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access People */}
                    <div className="bg-white rounded-2xl p-6 border shadow-sm">
                        <h3 className="text-lg font-bold mb-4">Trusted Contacts</h3>
                        <div className="space-y-4">
                            {['Dr. Smith (Neurologist)', 'Sarah (Daughter)', 'Ramesh (Neighbor)'].map((name, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                        {name[0]}
                                    </div>
                                    <span className="font-medium text-gray-700">{name}</span>
                                </div>
                            ))}
                            <button className="w-full py-2 border-2 border-dashed border-gray-200 rounded-lg text-sm font-bold text-gray-400 hover:border-caregiver-primary hover:text-caregiver-primary transition-colors">
                                + Add New Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
