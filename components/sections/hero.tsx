"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { fadeInUp, staggerContainer, fadeInLeft } from "@/lib/animations";

export function HeroSection() {
    return (
        // Mantivemos h-screen, mas adicionamos suporte a telas muito baixas
        <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-center overflow-hidden bg-black">
            
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Image/Hero.webp"
                    alt="Corredores Fast Club"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-10" />
            </div>

            {/* Adicionei 'pt-20' para garantir que o conteúdo não colida com o menu em laptops */}
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-20 h-full flex flex-col justify-center pt-20">
                
                <motion.div
                    className="w-full flex flex-col items-start"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* 1. Badge */}
                    <motion.div 
                        variants={fadeInUp} 
                        className="mb-6 md:mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full"
                    >
                        <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary fill-primary" />
                        <span className="text-white text-xs md:text-sm font-medium tracking-wide">
                            4.8 rating | 500+ membros
                        </span>
                    </motion.div>

                    {/* 2. H1 - AJUSTADO: Escalonamento mais suave para monitores intermediários */}
                    <motion.h1
                        variants={fadeInLeft}
                        className="
                            font-bold leading-[1.1] tracking-tight text-white mb-6 md:mb-8 max-w-6xl
                            text-4xl           /* Mobile pequeno */
                            sm:text-5xl        /* Mobile grande */
                            md:text-5xl        /* Tablet / Laptop pequeno (Correção do problema) */
                            lg:text-6xl        /* Monitor padrão */
                            xl:text-7xl        /* Monitor grande */
                            2xl:text-[5.5rem]  /* Widescreen (Mantido o original) */
                        "
                    >
                        Treine Mais Inteligente e Alcance seu <br className="hidden lg:block" />
                        <span className="text-primary"> Potencial Máximo.</span>
                    </motion.h1>

                    {/* 3. Texto de Apoio */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 md:mb-16 max-w-xl md:max-w-2xl lg:max-w-3xl font-normal"
                    >
                        Desbloqueie treinos personalizados, periodização inteligente e 
                        acompanhamento real com a metodologia Wagner Figueiredo.
                    </motion.p>

                    {/* 4. Linha Inferior */}
                    <motion.div 
                        variants={fadeInUp}
                        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10"
                    >
                        {/* Lado Esquerdo: CTA */}
                        <a
                            href="#pricing"
                            className="group relative inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-6 pr-2 py-2 md:pl-8 md:pr-2 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,77,0,0.4)] hover:shadow-primary/60 hover:-translate-y-1"
                        >
                            <span className="text-base md:text-lg font-bold tracking-tight uppercase">Começar Agora</span>
                            <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 stroke-[3px]" />
                            </span>
                        </a>

                        {/* Lado Direito: Texto de Apoio (Escondido em telas muito pequenas, visível em médias) */}
                        <div className="hidden md:block max-w-[200px] lg:max-w-xs text-right">
                            <p className="text-xs lg:text-sm text-white/40 leading-relaxed font-light uppercase tracking-wide">
                                Fast Club Run — Método validado <br /> Performance além dos números.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}