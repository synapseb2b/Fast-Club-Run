"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react"; // Opcional: Ícones sociais para compor

export function Footer() {
    const currentYear = 2026;

    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
            
            {/* Container Principal */}
            <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
                
                {/* --- ÁREA SUPERIOR (Navegação Rápida) --- */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
                    {/* Logo / Marca */}
                    <div className="text-2xl font-bold tracking-tighter text-white">
                        FAST CLUB<span className="text-primary">.</span>
                    </div>

                    {/* Links de Navegação */}
                    <nav className="flex gap-8 text-sm font-medium text-white/50">
                        <a href="#how-it-works" className="hover:text-white transition-colors duration-300">Metodologia</a>
                        <a href="#who-its-for" className="hover:text-white transition-colors duration-300">Para Quem</a>
                        <a href="#pricing" className="hover:text-white transition-colors duration-300">Planos</a>
                        <a href="#faq" className="hover:text-white transition-colors duration-300">Dúvidas</a>
                    </nav>

                    {/* Redes Sociais (Opcional - Visual) */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all duration-300">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all duration-300">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Linha Divisória */}
                <div className="w-full h-px bg-white/10 mb-10" />

                {/* --- ÁREA INFERIOR (Copyright e Créditos) --- */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
                    
                    {/* Copyright + Tagline */}
                    <p className="text-xs text-white/30 font-medium tracking-wide uppercase">
                        &copy; {currentYear} Fast Club Run. Corra Melhor e Alcance seu Potencial Máximo.
                    </p>

                    {/* Créditos Synapse B2B */}
                    <p className="text-xs text-white/30 font-medium tracking-wide uppercase flex flex-col md:flex-row items-center gap-1 md:gap-2">
                        <span>Desenvolvido por</span>
                        <a 
                            href="https://www.synapseb2b.com/ativos-de-performance/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-primary transition-colors border-b border-white/20 hover:border-primary pb-0.5"
                        >
                            Synapse B2B
                        </a>
                        <span className="hidden md:inline text-white/10">—</span>
                        <span>Plataformas Forjadas em Engenharia de Receita.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}