"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const images = [
  { src: "/Image/Pos hero 1.webp", alt: "Atleta Focado" },
  { src: "/Image/Pos hero 2.webp", alt: "Preparação Mental" },
  { src: "/Image/Pos Hero 3.webp", alt: "Performance" },
  { src: "/Image/Pos hero 4.webp", alt: "Resultado" }, // Aparece cortada na direita
  { src: "/Image/Pos hero 1.webp", alt: "Loop Flow" }, // Garante fluxo contínuo
];

export function AboutSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Movimento horizontal:
  // Começa EXATAMENTE em 0% (Borda Esquerda) e move para a esquerda (-40%) conforme o scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={containerRef} className="relative w-full bg-white text-black py-24 md:py-32 overflow-hidden border-t border-neutral-100">
      
      {/* 1. TEXTO - Centralizado */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.div
          className="max-w-4xl flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div 
            variants={fadeInUp}
            className="mb-8 px-5 py-1.5 border border-primary/30 rounded-full bg-white text-primary"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Sobre o Fast Club
            </span>
          </motion.div>

          {/* H1 Reduzido (-35%) */}
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-black"
          >
            Performance não é só físico, <br />
            <span className="text-black">Começa no método.</span>
          </motion.h2>

          {/* Parágrafo */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal mx-auto"
          >
            Há mais de 20 anos, o treinador Wagner Figueiredo transforma corredores através de uma metodologia que une ciência e individualidade biológica.
          </motion.p>
        </motion.div>
      </div>

      {/* 2. GALERIA FULL WIDTH - Sem margem esquerda */}
      {/* pl-0 garante que comece colado na borda da tela */}
      <div className="w-full pl-0 overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-4 w-max min-w-full" // gap-4 para manter o visual "colado"
        >
          {images.map((image, index) => (
            <div
              key={index}
              // Larguras calculadas para que a 4ª imagem fique cortada na direita:
              // 28vw * 3 = 84vw (A 4ª imagem começa aos 84% da tela, mostrando um pedaço)
              className="relative w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] aspect-[3/4] rounded-r-[1.5rem] md:rounded-r-[2.5rem] first:rounded-l-none overflow-hidden select-none"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 75vw, 25vw"
                draggable={false}
              />
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-r-[1.5rem] md:rounded-r-[2.5rem] pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}