import { LucideIcon, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LargeActionCardProps {
    label: string;
    icon?: LucideIcon;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

export function LargeActionCard({ label, icon: Icon, onClick, variant = "primary" }: LargeActionCardProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-full p-8 rounded-3xl shadow-brutalist transition-all hover:translate-y-1 hover:shadow-none border-4 border-black flex flex-col items-center justify-center text-center gap-4",
                variant === "primary" ? "bg-patient-highlight text-black" : "bg-white text-black"
            )}
        >
            {Icon && <Icon className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1.5]" />}
            <span className="text-2xl sm:text-3xl font-black tracking-tight">{label}</span>

            {variant === 'primary' && (
                <div className="mt-2 bg-black text-white px-6 py-2 rounded-full text-lg font-bold flex items-center gap-2">
                    Details <Play className="w-4 h-4 fill-current" />
                </div>
            )}
        </button>
    );
}
