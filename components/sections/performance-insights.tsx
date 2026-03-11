"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function PerformanceInsightsSection() {
    return (
        <section className="py-24 md:py-32 bg-black text-white overflow-hidden border-t border-white/5">

            {/* Container Principal */}
            <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">

                <motion.div
                    className="flex flex-col items-center text-center max-w-3xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Badge Pill Laranja */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary inline-block"
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                            Performance Insights
                        </span>
                    </motion.div>

                    {/* Título */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
                    >
                        Acompanhe sua <br />
                        <span className="text-primary">Evolução de Perto.</span>
                    </motion.h2>

                    {/* Texto Descritivo */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg text-white/60 leading-relaxed font-medium max-w-xl"
                    >
                        Receba planos ajustados à sua evolução real. Use ferramentas como Strava, Garmin ou seu relógio GPS favorito para acompanhar seu progresso com métricas que fazem sentido.
                    </motion.p>
                </motion.div>

            </div>
        </section>
    );
}
