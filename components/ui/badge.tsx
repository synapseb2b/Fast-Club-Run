import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "primary" | "secondary" | "outline";
    className?: string;
}

export function Badge({
    children,
    variant = "default",
    className,
}: BadgeProps) {
    const variants = {
        default:
            "bg-white/10 text-text-secondary border border-white/10",
        primary:
            "bg-primary/10 text-primary border border-primary/20",
        secondary:
            "bg-background-card text-text-secondary border border-border",
        outline:
            "bg-transparent text-text-secondary border border-border",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full transition-colors",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}

interface LabelBadgeProps {
    children: React.ReactNode;
    className?: string;
}

export function LabelBadge({ children, className }: LabelBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20",
                className
            )}
        >
            {children}
        </span>
    );
}
