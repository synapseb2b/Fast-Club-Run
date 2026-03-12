"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const images = [
    { src: "/Image/Pos hero 1.webp", alt: "Fast Club Lifestyle", objectPosition: "center 20%" },
    { src: "/Image/Pos hero 2.webp", alt: "Corrida em Grupo", objectPosition: "center 25%" },
    { src: "/Image/Pos Hero 3.webp", alt: "Performance", objectPosition: "center 20%" },
    { src: "/Image/Pos hero 4.webp", alt: "Comunidade", objectPosition: "center 25%" },
    { src: "/Image/Pos hero 1.webp", alt: "Loop Flow", objectPosition: "center 20%" },
];

export function LojaLifestyle() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-black text-white py-24 md:py-32 overflow-hidden border-t border-white/10"
        >
            {/* Text Block */}
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
                        className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary"
                    >
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                            IDENTIDADE
                        </span>
                    </motion.div>

                    {/* H2 */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white mb-6"
                    >
                        Fast Club não é só um clube.{" "}
                        <br />
                        É um <span className="text-primary">estilo de vida.</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl font-normal"
                    >
                        Dentro e fora da pista, o Fast Club representa quem
                        você é.
                    </motion.p>
                </motion.div>
            </div>

            {/* Horizontal Parallax Gallery */}
            <div className="w-full pl-0 overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-4 w-max min-w-full"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-[75vw] sm:w-[45vw] md:w-[35vw] lg:w-[28vw] aspect-[3/4] rounded-r-[1.5rem] md:rounded-r-[2.5rem] first:rounded-l-none overflow-hidden select-none"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                style={{ objectPosition: image.objectPosition }}
                                sizes="(max-width: 768px) 75vw, 25vw"
                                draggable={false}
                            />
                            <div className="absolute inset-0 ring-1 ring-white/5 rounded-r-[1.5rem] md:rounded-r-[2.5rem] pointer-events-none" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
