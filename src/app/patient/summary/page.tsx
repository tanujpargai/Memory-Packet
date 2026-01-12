import { StoryCard } from "@/components/patient/StoryCard";
import { Memory } from "@/types";
import { Coffee, Home, Stethoscope, Users, Volume2, HelpCircle } from "lucide-react";
import Link from "next/link";

const MOCK_MEMORIES: Memory[] = [
    {
        id: "1",
        timestamp: "8:30 AM",
        summary: "You woke up at home.",
        details: "You were alone.",
        type: "location",
        icon: Home,
        mood: "Calm",
        location: "Home"
    },
    {
        id: "2",
        timestamp: "10:15 AM",
        summary: "You went for a short walk.",
        details: "You were alone. Returned safely.",
        type: "activity",
        icon: Coffee,
        mood: "Happy",
        location: "Near Home"
    },
    {
        id: "3",
        timestamp: "11:45 AM",
        summary: "You visited the medical store.",
        details: "You returned home safely.",
        type: "location",
        icon: Stethoscope,
        mood: "Neutral",
        location: "Market"
    },
    {
        id: "4",
        timestamp: "1:20 PM",
        summary: "You met Ramesh (your neighbor).",
        details: "You came back home together.",
        type: "interaction",
        icon: Users,
        mood: "Happy",
        location: "Home Entrance"
    }
];

export default function PatientSummary() {
    return (
        <main className="min-h-screen bg-patient-bg p-6 max-w-lg mx-auto pb-32">
            <header className="mb-6 flex items-center justify-between">
                <Link href="/patient" className="px-4 py-3 bg-gray-100 rounded-xl font-bold border-2 border-black flex items-center gap-2">
                    &larr; Back
                </Link>
                <h1 className="text-xl font-bold text-gray-400">Monday, Jan 12</h1>
            </header>

            {/* 1. Daily Summary Card (New) */}
            <div className="bg-white border-4 border-black p-6 rounded-3xl shadow-brutalist mb-8">
                <h2 className="text-2xl font-black leading-tight mb-2">
                    Today was a normal day.
                </h2>
                <p className="text-xl font-medium text-gray-600 mb-6">
                    You went out once and returned home safely.
                </p>
                <button className="w-full bg-black text-white p-4 rounded-xl flex items-center justify-center gap-3 font-bold text-xl active:scale-[0.98] transition-transform">
                    <Volume2 className="w-6 h-6" />
                    Read my day aloud
                </button>
            </div>

            {/* 2. Timeline Story */}
            <div className="flex flex-col gap-6">
                {MOCK_MEMORIES.map(m => (
                    <StoryCard key={m.id} memory={m} />
                ))}
            </div>

            {/* 3. Reassurance Footer */}
            <div className="mt-12 text-center space-y-4">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Shared with your son</p>

                <button className="flex items-center justify-center gap-2 text-gray-500 font-bold text-lg px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors mx-auto">
                    <HelpCircle className="w-5 h-5" />
                    I'm confused
                </button>
            </div>
        </main>
    );
}
