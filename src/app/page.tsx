import Link from "next/link";
import { User, HeartHandshake } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 gap-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-4">
          MemoryPacket
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium">
          Dementia Care & Passive Memory Reconstruction
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link href="/patient" className="group relative block">
          <div className="absolute inset-0 bg-patient-highlight rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform border-2 border-black"></div>
          <div className="relative bg-white border-4 border-black p-10 rounded-3xl flex flex-col items-center gap-6 hover:-translate-y-1 transition-transform">
            <div className="bg-patient-highlight p-4 rounded-full border-2 border-black">
              <User className="w-12 h-12 text-black" />
            </div>
            <h2 className="text-3xl font-bold">Patient Mode</h2>
            <p className="text-center text-gray-500 font-medium">
              Ultra-simple interface for clear daily recall.
            </p>
          </div>
        </Link>

        <Link href="/caregiver/dashboard" className="group relative block">
          <div className="absolute inset-0 bg-caregiver-primary rounded-3xl translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform opacity-20"></div>
          <div className="relative bg-white border border-caregiver-primary/20 p-10 rounded-3xl flex flex-col items-center gap-6 shadow-xl hover:-translate-y-1 transition-transform">
            <div className="bg-caregiver-bg p-4 rounded-full text-caregiver-primary">
              <HeartHandshake className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-caregiver-primary">Caregiver Mode</h2>
            <p className="text-center text-gray-500 font-medium">
              Monitoring, alerts, and detailed timelines.
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-12 text-gray-400 text-sm font-mono">
        Hack the Winter Round 2 Submission
      </div>
    </main>
  );
}
