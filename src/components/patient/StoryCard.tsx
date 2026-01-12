import { Memory } from "@/types";
import { Clock, MapPin, CheckCircle2 } from "lucide-react";

interface StoryCardProps {
    memory: Memory;
}

export function StoryCard({ memory }: StoryCardProps) {
    return (
        <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-brutalist relative overflow-hidden group">
            {/* Reassurance Sidebar */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-green-400"></div>

            <div className="flex items-start gap-4">
                {memory.icon && (
                    <div className="bg-patient-highlight p-3 rounded-full border-2 border-black shrink-0">
                        <memory.icon className="w-8 h-8 text-black" />
                    </div>
                )}
                <div className="flex-1 space-y-3">
                    <p className="text-xl sm:text-2xl font-bold leading-tight">
                        {memory.summary}
                    </p>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center text-gray-500 font-bold text-lg">
                            <MapPin className="w-5 h-5 mr-2" />
                            {memory.location || "Near Home"}
                        </div>
                        <div className="flex items-center text-gray-400 font-bold text-lg">
                            <Clock className="w-5 h-5 mr-2" />
                            {memory.timestamp}
                        </div>
                    </div>

                    <div className="pt-2 border-t-2 border-gray-100 flex items-center text-green-700 font-bold gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        {memory.details || "You were safe."}
                    </div>
                </div>
            </div>
        </div>
    );
}
