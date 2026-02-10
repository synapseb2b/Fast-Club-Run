import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    asChild?: boolean;
}

export function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "group inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl hover:shadow-primary/20",
        secondary:
            "bg-background-card text-text-primary border border-border hover:border-primary/50 hover:bg-background-card-hover",
        ghost:
            "bg-transparent text-text-primary hover:text-primary hover:bg-white/5",
        outline:
            "bg-transparent border border-border text-text-primary hover:border-primary hover:text-primary",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm gap-1.5",
        md: "px-6 py-3 text-base gap-2",
        lg: "px-8 py-4 text-lg gap-2.5",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

export function ButtonLink({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonLinkProps) {
    const baseStyles =
        "group inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

    const variants = {
        primary:
            "bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl hover:shadow-primary/20",
        secondary:
            "bg-background-card text-text-primary border border-border hover:border-primary/50 hover:bg-background-card-hover",
        ghost:
            "bg-transparent text-text-primary hover:text-primary hover:bg-white/5",
        outline:
            "bg-transparent border border-border text-text-primary hover:border-primary hover:text-primary",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm gap-1.5",
        md: "px-6 py-3 text-base gap-2",
        lg: "px-8 py-4 text-lg gap-2.5",
    };

    return (
        <a
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </a>
    );
}
