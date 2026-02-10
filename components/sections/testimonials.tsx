"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react"; // Usei setas mais elegantes
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
    {
        quote: "O Fast Club me mostrou que faltava método. Agora treino mais inteligente, não só mais forte.",
        fullQuote: "O Fast Club me mostrou que faltava método — periodização, descanso, progressão. Isso mudou meu jogo. Agora treino mais inteligente, não só mais forte.",
        name: "João M.",
        role: "Maratonista",
        image: "/Image/Testimonial_João.webp",
    },
    {
        quote: "Nunca tive tanta clareza sobre meus pontos fortes e fracos. Evoluir com método me deu confiança.",
        fullQuote: "Simples, rápido, mas muito poderoso. Nunca tive tanta clareza sobre meus pontos fortes e fracos. Evoluir com método me deu confiança real.",
        name: "Carla S.",
        role: "Meia Maratonista",
        image: "/Image/Testimonial_Carla.webp",
    },
    {
        quote: "Parecia que o plano foi feito exatamente pra mim. O Fast Club me mostrou padrões que eu não percebia.",
        fullQuote: "Parecia que o plano foi feito exatamente pra mim. O Fast Club me mostrou padrões que eu não percebia. Agora sei por que treino do jeito que treino.",
        name: "Ricardo P.",
        role: "Corredor de 10K",
        image: "/Image/Testimonial_Ricardo.webp",
    },
    {
        quote: "Em 3 meses consegui baixar meu pace em quase 1 minuto por km.",
        fullQuote: "Em 3 meses consegui baixar meu pace em quase 1 minuto por km. A periodização faz toda a diferença quando é feita por quem entende do assunto.",
        name: "Ana L.",
        role: "Corredora de 5K",
        image: "/Image/Testimonial_Ana L..webp",
    },
];

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

    return (
        <section className="py-24 md:py-32 bg-[#fafafa] text-black overflow-hidden border-t border-neutral-200">
            
            {/* Container Principal Alinhado à Esquerda */}
            <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* --- COLUNA ESQUERDA: Cabeçalho Fixo (Nível 1) --- */}
                    <div className="lg:col-span-5 sticky top-32">
                        <motion.div
                            className="flex flex-col items-start text-left"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Badge Pill Laranja */}
                            <motion.div 
                                variants={fadeInUp}
                                className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full bg-white text-primary inline-block"
                            >
                                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                    Depoimentos
                                </span>
                            </motion.div>

                            {/* Título */}
                            <motion.h2 
                                variants={fadeInUp} 
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-black mb-8"
                            >
                                Histórias reais de <br />
                                <span className="text-primary">Evolução Constante.</span>
                            </motion.h2>

                            {/* Controles de Navegação (Setas) */}
                            <motion.div variants={fadeInUp} className="flex gap-4 mt-4">
                                <button
                                    onClick={prev}
                                    className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
                                    aria-label="Anterior"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 group"
                                    aria-label="Próximo"
                                >
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* --- COLUNA DIREITA: Card de Depoimento (Nível 2) --- */}
                    <div className="lg:col-span-7 relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white p-8 md:p-12 lg:p-16 rounded-[2rem] border border-black/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)]"
                            >
                                {/* Ícone de Citação */}
                                <Quote className="w-10 h-10 text-primary/20 mb-8" />

                                {/* Texto do Depoimento */}
                                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-black mb-10">
                                    "{testimonials[activeIndex].fullQuote}"
                                </blockquote>

                                {/* Info do Aluno */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-neutral-100">
                                        <Image
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg text-black">
                                            {testimonials[activeIndex].name}
                                        </p>
                                        <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        
                        {/* Indicador de Paginação Discreto */}
                        <div className="absolute -bottom-10 right-0 text-sm font-medium text-black/30">
                            {String(activeIndex + 1).padStart(2, '0')} — {String(testimonials.length).padStart(2, '0')}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}