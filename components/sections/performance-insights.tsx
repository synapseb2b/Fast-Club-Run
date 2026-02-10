"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function PerformanceInsightsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    
    // Parallax suave na imagem (move-se um pouco mais devagar que o scroll)
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-black text-white overflow-hidden border-t border-white/5">
            
            {/* Container Principal */}
            <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* --- COLUNA ESQUERDA: Texto (Nível 1) --- */}
                    <motion.div
                        className="flex flex-col items-start text-left order-2 lg:order-1"
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
                            Evolução visível em <br />
                            <span className="text-primary">Tempo Real.</span>
                        </motion.h2>

                        {/* Texto Descritivo */}
                        <motion.p 
                            variants={fadeInUp} 
                            className="text-base md:text-lg text-white/60 leading-relaxed font-medium max-w-xl"
                        >
                            Chega de planilhas confusas. O Fast Club centraliza seu histórico, recordes e métricas de saúde em um painel intuitivo. Identifique padrões e ajuste sua rota com precisão cirúrgica.
                        </motion.p>
                    </motion.div>

                    {/* --- COLUNA DIREITA: Imagem Discreta (Nível 2) --- */}
                    <motion.div
                        className="relative w-full order-1 lg:order-2"
                        style={{ y, opacity }} // Efeito sutil de movimento
                    >
                        {/* Container da Imagem - Menor e mais contido */}
                        <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                            <Image
                                src="/Image/Performance Insights.webp"
                                alt="Dashboard Fast Club"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            
                            {/* Overlay Sutil para integrar ao fundo preto */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                        </div>
                        
                        {/* Elemento Decorativo Minimalista (Opcional) */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-white/5 rounded-full -z-10 hidden lg:block" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}