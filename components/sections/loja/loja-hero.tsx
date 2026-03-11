"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shirt, ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function LojaHero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Image/Hero.webp"
                    alt="Fast Club Gear"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-20 h-full flex flex-col justify-center pt-20">
                <motion.div
                    className="w-full flex flex-col items-start"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Badge */}
                    <motion.div
                        variants={fadeInUp}
                        className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary inline-flex items-center gap-2"
                    >
                        <Shirt className="w-3.5 h-3.5" />
                        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                            FAST CLUB GEAR
                        </span>
                    </motion.div>

                    {/* H1 */}
                    <motion.h1
                        variants={fadeInUp}
                        className="
                            font-bold leading-[1.1] tracking-tight text-white mb-6 md:mb-8 max-w-6xl
                            text-[2rem]
                            sm:text-4xl
                            md:text-[2rem]
                            lg:text-[2.5rem]
                            xl:text-6xl
                            2xl:text-[4.75rem]
                        "
                    >
                        Vista a Sua <span className="text-primary">Jornada.</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-10 md:mb-16 max-w-xl md:max-w-2xl lg:max-w-3xl font-normal"
                    >
                        Cada peça representa quem você é como corredor. Do primeiro KM ao pódio.
                    </motion.p>

                    {/* Scroll Down Indicator */}
                    <motion.div variants={fadeInUp} className="mt-12">
                        <a
                            href="#produtos"
                            className="inline-flex flex-col items-center gap-2 text-white/40 hover:text-primary transition-colors"
                        >
                            <span className="text-xs font-medium tracking-widest uppercase">
                                Explore
                            </span>
                            <ChevronDown className="w-5 h-5 animate-bounce" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
