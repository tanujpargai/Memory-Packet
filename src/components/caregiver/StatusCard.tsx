import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
    label: string;
    value: string;
    subValue?: string;
    icon: LucideIcon;
    status?: "good" | "warning" | "danger";
    color?: string;
}

export function StatusCard({ label, value, subValue, icon: Icon, status = "good", color }: StatusCardProps) {
    const statusColors = {
        good: "bg-caregiver-success/10 text-caregiver-success border-caregiver-success/20",
        warning: "bg-caregiver-warning/10 text-caregiver-warning border-caregiver-warning/20",
        danger: "bg-caregiver-danger/10 text-caregiver-danger border-caregiver-danger/20",
    };

    return (
        <div className={cn("p-6 rounded-2xl border bg-white shadow-sm flex items-start justify-between", statusColors[status])}>
            <div>
                <h3 className="text-sm font-medium opacity-80 uppercase tracking-widest">{label}</h3>
                <p className="text-3xl font-bold mt-2 text-foreground">{value}</p>
                {subValue && <p className="text-sm mt-1 opacity-70 font-semibold">{subValue}</p>}
            </div>
            <div className={cn("p-3 rounded-xl", status === 'good' ? 'bg-white/50' : 'bg-white/50')}>
                <Icon className="w-6 h-6" />
            </div>
        </div>
    );
}
