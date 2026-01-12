import { Memory } from "@/types";
import { format } from "date-fns";
import { MapPin, User, Activity, AlertCircle } from "lucide-react";

interface TimelineProps {
    items: Memory[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="space-y-8 pl-4 border-l-2 border-caregiver-primary/20 relative">
            {items.map((item, idx) => {
                const Icon = item.icon || Activity;
                return (
                    <div key={item.id} className="relative pl-8 group">
                        {/* Connector Dot */}
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-caregiver-primary group-hover:scale-125 transition-transform" />

                        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-4">
                                <div className="p-3 bg-caregiver-bg text-caregiver-primary rounded-lg h-fit">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-gray-400">
                                        {item.timestamp}
                                    </span>
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {item.summary}
                                    </h4>
                                    {item.details && (
                                        <p className="text-sm text-gray-500 mt-1">
                                            {item.details}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {item.location && (
                                <div className="flex items-center text-xs font-semibold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {item.location}
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
