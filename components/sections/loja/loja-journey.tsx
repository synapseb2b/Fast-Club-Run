"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const journeyCards = [
    {
        level: "Iniciante",
        headline: "Seu primeiro passo merece ser marcado.",
        description:
            "Você está começando a correr e merece se sentir parte de algo maior. Nossos produtos para iniciantes celebram cada quilômetro conquistado.",
        image: "/Image/Produtos_Fast_Club_Run/camiseta_iniciante_feminino.webp",
    },
    {
        level: "Pro",
        headline: "Você treina como profissional. Vista-se como um.",
        description:
            "Para quem já compete e busca evolução constante. Produtos que representam sua dedicação e performance.",
        image: "/Image/Produtos_Fast_Club_Run/camiseta_pro_feminino.webp",
    },
];

export function LojaJourney() {
    return (
        <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
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
                            SUA EVOLUÇÃO
                        </span>
                    </motion.div>

                    {/* H2 */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
                    >
                        Do primeiro KM ao{" "}
                        <span className="text-primary">pódio.</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl font-normal"
                    >
                        O Fast Club acompanha cada etapa da sua jornada como
                        corredor.
                    </motion.p>
                </motion.div>

                {/* Journey Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {journeyCards.map((card) => (
                        <motion.div
                            key={card.level}
                            variants={fadeInUp}
                            className="group relative w-full aspect-[3/4] md:aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-900"
                        >
                            {/* Image */}
                            <Image
                                src={card.image}
                                alt={card.headline}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                                <span className="inline-block self-start px-3 py-1 rounded-full border border-primary/50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                                    {card.level}
                                </span>
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                                    {card.headline}
                                </h3>
                                <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-md">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
