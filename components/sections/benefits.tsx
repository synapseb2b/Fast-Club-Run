"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Zap, BarChart3, Shield } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const benefits = [
  {
    icon: Brain,
    title: "Clareza no Seu Treino",
    description:
      "Entenda sua periodização ideal, seus pontos fortes e o que realmente precisa de atenção para evoluir sem plateaus.",
    image: "/Image/Benefits 1.webp",
  },
  {
    icon: Zap,
    title: "Motivação Constante",
    description:
      "Descubra o propósito por trás de cada KM e o que mantém você na rua — mesmo nos dias mais difíceis.",
    image: "/Image/Benefits 2.webp",
  },
  {
    icon: BarChart3,
    title: "Progresso Visível",
    description:
      "Acompanhe sua evolução em resistência, pace e consistência com métricas que fazem sentido para seu objetivo.",
    image: "/Image/Benefits 3.webp",
  },
  {
    icon: Shield,
    title: "Construa Resiliência",
    description:
      "Transforme autoconhecimento em performance superior, blindando seu corpo e sua mente contra lesões e desistências.",
    image: "/Image/Benefits 4.webp",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      
      {/* Container Principal Alinhado à Esquerda (Padrão Hero) */}
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- NÍVEL 1: CABEÇALHO --- */}
        <div className="flex flex-col items-start mb-20 md:mb-24">
          <motion.div
            className="w-full flex flex-col items-start text-left"
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
                Vantagens Exclusivas
              </span>
            </motion.div>

            {/* Título Principal - Alinhado à Esquerda */}
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-4xl"
            >
              Desbloqueie seu <span className="text-primary">máximo potencial</span> e construa força mental duradoura.
            </motion.h2>
          </motion.div>
        </div>

        {/* --- NÍVEL 2: GRID DE CARDS INTERATIVOS --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.article
                key={index}
                variants={fadeInUp}
                className="group relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900"
              >
                {/* Imagem de Fundo (Estado Inicial: Opacidade Baixa / Hover: Opacidade Alta) */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-20 group-hover:opacity-60">
                    <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>
                
                {/* Overlay Gradiente Constante para garantir leitura */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 pointer-events-none" />

                {/* Conteúdo do Card */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 z-10">
                    
                    {/* Ícone no Topo Esquerdo */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>

                    {/* Texto na Base Esquerda */}
                    <div className="flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                            {benefit.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/60 leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-300">
                            {benefit.description}
                        </p>
                    </div>
                </div>

                {/* Borda Brilhante no Hover (Opcional, estilo premium) */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/5 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}