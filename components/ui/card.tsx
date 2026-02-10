import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "glass" | "bordered" | "elevated";
    hover?: boolean;
}

export function Card({
    children,
    className,
    variant = "default",
    hover = false,
}: CardProps) {
    const variants = {
        default: "bg-background-card border border-border",
        glass: "glass",
        bordered: "bg-transparent border border-border",
        elevated: "bg-background-card border border-border shadow-xl shadow-black/20",
    };

    const hoverStyles = hover
        ? "hover:border-primary/30 hover:bg-background-card-hover transition-all duration-300"
        : "";

    return (
        <div
            className={cn(
                "rounded-2xl p-6",
                variants[variant],
                hoverStyles,
                className
            )}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
    return (
        <div className={cn("mb-4", className)}>
            {children}
        </div>
    );
}

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
    return (
        <h3 className={cn("heading-sm text-text-primary", className)}>
            {children}
        </h3>
    );
}

interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
    return (
        <p className={cn("body-md text-text-secondary mt-2", className)}>
            {children}
        </p>
    );
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
    return <div className={cn("", className)}>{children}</div>;
}

interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
    return (
        <div className={cn("mt-6 pt-4 border-t border-border", className)}>
            {children}
        </div>
    );
}
