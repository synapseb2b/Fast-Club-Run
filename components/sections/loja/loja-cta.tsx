"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const WHATSAPP_PHONE = "5531992186683";
const WHATSAPP_MESSAGE =
    "Olá! Vi a loja do Fast Club e gostaria de saber mais sobre os produtos.";

export function LojaCTA() {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Image/Pre footer.webp"
                    alt="Corredor Fast Club"
                    fill
                    className="object-cover object-center opacity-95"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/80 z-10" />
            </div>

            {/* Centered Content */}
            <div className="relative z-20 container-custom px-6 flex flex-col items-center text-center">
                <motion.div
                    className="max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Heading */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight leading-[1] text-white mb-12"
                    >
                        Represente Sua{" "}
                        <span className="text-primary">Jornada.</span>
                    </motion.h2>

                    {/* CTA Button */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-center"
                    >
                        <a
                            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-10 pr-2 py-2 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(255,77,0,0.4)] hover:shadow-primary/60 hover:-translate-y-1 scale-110"
                        >
                            <span className="text-lg font-bold tracking-tight uppercase text-[15px]">
                                Falar com Fast Club
                            </span>
                            <span className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                                <ArrowRight className="w-6 h-6 stroke-[3px]" />
                            </span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Decorative Line */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
        </section>
    );
}
