"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#how-it-works", label: "Como Funciona" },
    { href: "#who-its-for", label: "Para Quem" },
    { href: "#pricing", label: "Planos" },
    { href: "#faq", label: "Dúvidas" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 py-6 md:py-8 transition-all duration-300"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
                    
                    {/* 1. LOGO (Esquerda) */}
                    <a href="#" className="relative z-50 shrink-0">
                        <div className="text-2xl font-bold tracking-tighter text-white">
                            FAST CLUB<span className="text-primary">.</span>
                        </div>
                    </a>

                    {/* 2. CÁPSULA DE NAVEGAÇÃO (Centro - Desktop) */}
                    {/* Exibe apenas em telas grandes (lg) */}
                    <div className={cn(
                        "hidden lg:flex items-center gap-1 bg-white rounded-full p-1.5 pl-8 shadow-2xl shadow-black/20 transition-all duration-500",
                        isScrolled ? "bg-white/90 backdrop-blur-md translate-y-2" : "bg-white"
                    )}>
                        {/* Links */}
                        <nav className="flex items-center gap-6 mr-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-black/70 hover:text-black transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button (Dentro da Cápsula) */}
                        <a
                            href="#pricing"
                            className="bg-primary hover:bg-primary-hover text-white rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                        >
                            Começar Agora
                        </a>
                    </div>

                    {/* 3. MENU MOBILE (Direita - Mobile/Tablet) */}
                    {/* Botão "Menu" estilo pílula branca */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden bg-white text-black px-5 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform"
                    >
                        Menu
                    </button>

                    {/* Link "Contato" ou Login (Direita - Desktop) - Opcional para balancear */}
                    <div className="hidden lg:block w-[140px] text-right">
                         <a href="#" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                            Área do Aluno
                        </a>
                    </div>
                </div>
            </motion.header>

            {/* MOBILE MENU OVERLAY (Full Screen Premium) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center"
                    >
                        {/* Botão Fechar */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            ✕
                        </button>

                        {/* Links Mobile */}
                        <nav className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-3xl font-bold text-white hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <a
                                    href="#pricing"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="bg-primary text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(255,77,0,0.4)]"
                                >
                                    Começar Agora
                                </a>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}