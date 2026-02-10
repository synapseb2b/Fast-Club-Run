"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const personas = [
    {
        title: "Atletas Competitivos",
        description:
            "Obtenha clareza sobre periodização e volume para manter a consistência e superar seus recordes.",
        image: "/Image/Who Its For 1.webp",
    },
    {
        title: "Atletas do dia a dia",
        description:
            "Treine de forma mais inteligente e desfrute de progressos mensuráveis, mesmo fora de programas profissionais.",
        image: "/Image/Who Its For 2.webp",
    },
    {
        title: "Atletas Autodidatas",
        description:
            "Evolua com método mesmo treinando sozinho, sem depender de grupo presencial.",
        image: "/Image/Who Its For 3.webp",
    },
];

export function WhoItsForSection() {
    return (
        <section id="who-its-for" className="py-24 md:py-32 bg-black text-white overflow-hidden">
            
            {/* Container Principal Expandido - max-w-[1800px] para ocupar quase toda a tela */}
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
                
                {/* --- NÍVEL 1: CABEÇALHO ALONGADO --- */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-20">
                    <motion.div
                        className="w-full flex flex-col items-center"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Badge Pill */}
                        <motion.div 
                            variants={fadeInUp}
                            className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary"
                        >
                            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Para quem é indicado?
                            </span>
                        </motion.div>

                        {/* Título Principal - Liberado Horizontalmente */}
                        {/* max-w-6xl permite que o texto se estenda bastante antes de quebrar */}
                        <motion.h2 
                            variants={fadeInUp} 
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.05] text-white max-w-6xl"
                        >
                            Feito para todo corredor que quer <br className="hidden lg:block" />
                            <span className="text-white">atingir seu potencial máximo.</span>
                        </motion.h2>
                    </motion.div>
                </div>

                {/* --- NÍVEL 2: GRID DE CARDS PANORÂMICO --- */}
                {/* O grid ocupa 100% do container pai (1800px), criando o visual "quase full width" */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {personas.map((persona, index) => (
                        <motion.article
                            key={index}
                            variants={fadeInUp}
                            // Aspect Ratio 3/4 mantido, mas agora o card é muito mais largo devido ao container pai
                            className="group relative w-full aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-900"
                        >
                            {/* Imagem de Fundo */}
                            <Image
                                src={persona.image}
                                alt={persona.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />

                            {/* Gradiente Overlay + Blur no texto (Efeito Axeris) */}
                            {/* Adicionei um backdrop-blur sutil atrás do texto se quiser replicar o efeito de vidro fosco da referência */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none" />

                            {/* Conteúdo do Card */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                                    {persona.title}
                                </h3>
                                <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium max-w-md">
                                    {persona.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}