import { LargeActionCard } from "@/components/patient/LargeActionCard";
import { HelpCircle, Phone, AlertCircle, HelpCircle as ConfusedIcon } from "lucide-react";
import Link from "next/link";

export default function PatientHome() {
    return (
        <main className="min-h-screen bg-patient-bg p-6 flex flex-col items-center justify-between pb-8 max-w-md mx-auto h-screen">

            {/* 1. Header: Greeting & Reassurance */}
            <header className="w-full text-center mt-8 space-y-2">
                <h1 className="text-3xl font-black text-black">Good Afternoon, Dad</h1>
                <p className="text-xl font-bold text-green-700 bg-green-50 inline-block px-4 py-2 rounded-full border border-green-200">
                    You are at home and safe.
                </p>
            </header>

            {/* 2. Primary Actions (Limit 3) */}
            <section className="w-full flex-1 flex flex-col justify-center gap-6 my-4">
                {/* Priority 1: Recall */}
                <Link href="/patient/summary" className="w-full">
                    <LargeActionCard
                        label="What did I do today?"
                        icon={HelpCircle}
                        variant="primary"
                    />
                </Link>

                {/* Priority 2: Connection */}
                <button className="w-full p-6 bg-white border-4 border-black rounded-3xl text-2xl font-bold flex items-center justify-center gap-4 shadow-brutalist active:shadow-none active:translate-y-1 transition-all">
                    <Phone className="w-8 h-8" />
                    Call Son
                </button>

                {/* Priority 3: Help */}
                <button className="w-full p-6 bg-white border-4 border-red-500 rounded-3xl text-2xl font-bold text-red-600 flex items-center justify-center gap-4 active:bg-red-50 transition-colors">
                    <AlertCircle className="w-8 h-8" />
                    I need help
                </button>
            </section>

            {/* 3. Fail-Safe: "I'm Confused" */}
            <button className="flex items-center gap-2 text-gray-500 font-bold text-lg px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <ConfusedIcon className="w-5 h-5" />
                I'm confused
            </button>

        </main>
    );
}
