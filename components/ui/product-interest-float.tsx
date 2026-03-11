"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, ArrowRight } from "lucide-react";
import { products, getProductWhatsAppLink, WHATSAPP_PHONE } from "@/lib/products";

const GENERAL_MESSAGE = "Olá! Vi a loja do Fast Club e gostaria de saber mais sobre os produtos.";
const GENERAL_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(GENERAL_MESSAGE)}`;

const camisetas = products.filter((p) => p.type === "camiseta");
const meias = products.filter((p) => p.type === "meia");

export function ProductInterestFloat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute bottom-20 right-0 w-[280px] md:w-[320px] bg-[#111] border border-white/10 rounded-[1.5rem] shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                            <span className="text-sm font-bold text-white">Interesse em algo?</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Product List */}
                        <div className="max-h-[60vh] overflow-y-auto py-2">
                            {/* Camisetas */}
                            <div className="px-5 py-2">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                                    Camisetas
                                </span>
                            </div>
                            {camisetas.map((product) => (
                                <a
                                    key={product.id}
                                    href={getProductWhatsAppLink(product)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-5 py-3 hover:bg-white/5 transition-colors group"
                                >
                                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                                        {product.name}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-primary transition-colors" />
                                </a>
                            ))}

                            {/* Divider */}
                            <div className="mx-5 my-2 h-px bg-white/10" />

                            {/* Meias */}
                            <div className="px-5 py-2">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                                    Meias
                                </span>
                            </div>
                            {meias.map((product) => (
                                <a
                                    key={product.id}
                                    href={getProductWhatsAppLink(product)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-5 py-3 hover:bg-white/5 transition-colors group"
                                >
                                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                                        {product.name}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>

                        {/* Footer - General Link */}
                        <div className="border-t border-white/10 px-5 py-3">
                            <a
                                href={GENERAL_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary hover:bg-primary-hover rounded-full text-white text-sm font-bold transition-colors"
                            >
                                Falar sobre produtos
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Ver produtos disponíveis"
                className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            >
                <ShoppingBag className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.button>
        </div>
    );
}
