"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { products, getProductWhatsAppLink } from "@/lib/products";
import { cn } from "@/lib/utils";

const filters = [
    { value: "all", label: "Todos" },
    { value: "iniciante", label: "Iniciante" },
    { value: "pro", label: "Pro" },
] as const;

export function LojaProducts() {
    const [activeFilter, setActiveFilter] = useState<
        "all" | "iniciante" | "pro"
    >("all");

    const filtered =
        activeFilter === "all"
            ? products
            : products.filter((p) => p.level === activeFilter);

    return (
        <section
            id="produtos"
            className="py-24 md:py-32 bg-black text-white overflow-hidden"
        >
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
                <motion.div
                    className="flex flex-col items-center text-center mb-16 md:mb-24"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary"
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                            PRODUTOS
                        </span>
                    </motion.div>

                    {/* H2 */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
                    >
                        Feito para quem{" "}
                        <span className="text-primary">vive a corrida.</span>
                    </motion.h2>

                    {/* Filter Pills */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex items-center gap-3 mt-8"
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300",
                                    activeFilter === filter.value
                                        ? "bg-primary text-white"
                                        : "border border-white/20 text-white/60 hover:border-primary/50 hover:text-white"
                                )}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Product Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        {filtered.map((product) => (
                            <motion.a
                                key={product.id}
                                href={getProductWhatsAppLink(product)}
                                target="_blank"
                                rel="noopener noreferrer"
                                layout
                                variants={fadeInUp}
                                className="group relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-neutral-900 block"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ objectPosition: product.objectPosition }}
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                                    <span
                                        className={cn(
                                            "inline-block self-start px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2",
                                            product.level === "pro"
                                                ? "bg-primary/20 text-primary border border-primary/30"
                                                : "bg-white/10 text-white/70 border border-white/10"
                                        )}
                                    >
                                        {product.level}
                                    </span>
                                    <h3 className="text-sm md:text-base font-bold text-white">
                                        {product.name}
                                    </h3>
                                    <div className="mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <span className="inline-flex items-center gap-2 text-xs font-bold text-primary">
                                            Tenho Interesse{" "}
                                            <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
