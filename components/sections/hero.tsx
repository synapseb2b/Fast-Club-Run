"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { fadeInUp, staggerContainer, fadeInLeft } from "@/lib/animations";

export function HeroSection() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
            
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

            {/* Container Principal: max-w-[1600px] para permitir mais largura total */}
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-20 h-full flex flex-col justify-center">
                
                <motion.div
                    className="w-full flex flex-col items-start"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* 1. Badge */}
                    <motion.div 
                        variants={fadeInUp} 
                        className="mb-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full"
                    >
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-white text-sm font-medium tracking-wide">
                            4.8 rating | 500+ membros
                        </span>
                    </motion.div>

                    {/* 2. H1 - Aumentado para max-w-6xl (era 4xl) */}
                    {/* Isso permite que o texto se estique mais, evitando quebras desnecessárias */}
                    <motion.h1
                        variants={fadeInLeft}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white mb-8 max-w-6xl"
                    >
                        Treine Mais Inteligente e Alcance seu <br className="hidden lg:block" />
                        <span className="text-primary"> Potencial Máximo.</span>
                    </motion.h1>

                    {/* 3. Texto de Apoio - Aumentado para max-w-3xl (era 2xl) */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-lg md:text-xl text-white/80 leading-relaxed mb-16 max-w-3xl font-normal"
                    >
                        Desbloqueie treinos personalizados, periodização inteligente e 
                        acompanhamento real com a metodologia Wagner Figueiredo.
                    </motion.p>

                    {/* 4. Linha Inferior */}
                    <motion.div 
                        variants={fadeInUp}
                        className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
                    >
                        {/* Lado Esquerdo: CTA */}
                        <a
                            href="#pricing"
                            className="group relative inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-8 pr-2 py-2 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,77,0,0.4)] hover:shadow-primary/60 hover:-translate-y-1"
                        >
                            <span className="text-lg font-bold tracking-tight uppercase text-[15px]">Começar Agora</span>
                            <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                                <ArrowRight className="w-5 h-5 stroke-[3px]" />
                            </span>
                        </a>

                        {/* Lado Direito: Texto de Apoio */}
                        <div className="hidden md:block max-w-xs text-right">
                            <p className="text-sm text-white/40 leading-relaxed font-light uppercase tracking-wide">
                                Fast Club Run — Método validado <br /> Performance além dos números.
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}