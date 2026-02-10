"use client";

import React from "react";
import { motion } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react"; // Adicionei Minus para alternar ícone
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Isso é só para corredores profissionais?",
        answer:
            "De jeito nenhum. Fast Club é para qualquer pessoa que quer correr com método — do iniciante ao competidor experiente. Todo mundo pode se beneficiar de treinos periodizados e personalizados.",
    },
    {
        question: "Quanto tempo leva para receber meu plano?",
        answer:
            "Após preencher seu perfil e confirmar o pagamento, seu plano é preparado e liberado em até 48 horas. A partir daí, você já pode começar a treinar.",
    },
    {
        question: "Preciso de algum conhecimento prévio?",
        answer:
            "Nenhuma experiência prévia é necessária. O Fast Club foi criado para ser simples e prático, com orientações claras que qualquer pessoa consegue entender e aplicar.",
    },
    {
        question: "Posso acompanhar meu progresso?",
        answer:
            "Sim. Todo mês você recebe um novo plano ajustado à sua evolução. Sua área exclusiva mostra seu histórico completo e progresso acumulado em gráficos simples.",
    },
    {
        question: "Meus dados estão seguros?",
        answer:
            "100%. Seus dados são protegidos e acessíveis apenas por você. Suas informações pessoais nunca são compartilhadas sem seu consentimento expresso.",
    },
    {
        question: "Com que frequência devo usar?",
        answer:
            "O plano é mensal e contínuo. Manter a consistência permite medir evolução real. Você pode cancelar a renovação automática a qualquer momento sem taxas.",
    },
];

function FAQAccordionItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    return (
        <AccordionPrimitive.Item
            value={`item-${index}`}
            className="group border-b border-white/10 last:border-0"
        >
            <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 md:py-8 text-left transition-all cursor-pointer">
                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-primary transition-colors pr-8">
                        {faq.question}
                    </span>
                    <span className="relative flex items-center justify-center w-6 h-6 shrink-0">
                        <Plus className="w-5 h-5 text-primary absolute transition-transform duration-300 scale-100 group-data-[state=open]:scale-0 group-data-[state=open]:rotate-90" />
                        <Minus className="w-5 h-5 text-white absolute transition-transform duration-300 scale-0 group-data-[state=open]:scale-100 group-data-[state=open]:rotate-0" />
                    </span>
                </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-8 pt-0 pr-12">
                    <p className="text-white/60 text-base md:text-lg leading-relaxed font-normal max-w-2xl">
                        {faq.answer}
                    </p>
                </div>
            </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
    );
}

export function FAQSection() {
    return (
        <section id="faq" className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
            
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
                
                {/* --- NÍVEL 1: CABEÇALHO CENTRALIZADO --- */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <motion.div
                        className="max-w-4xl flex flex-col items-center"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Badge Pill Laranja (com borda ajustada para fundo preto) */}
                        <motion.div 
                            variants={fadeInUp}
                            className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary inline-block"
                        >
                            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                                Dúvidas Comuns
                            </span>
                        </motion.div>

                        {/* Título Principal */}
                        <motion.h2 
                            variants={fadeInUp} 
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
                        >
                            O que você <span className="text-primary">precisa saber</span> <br className="hidden md:block" />
                            antes de decolar.
                        </motion.h2>

                        {/* Subtítulo (Opcional, mas ajuda no contexto) */}
                        <motion.p
                            variants={fadeInUp}
                            className="mt-6 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl"
                        >
                            Tudo o que você precisa saber para dar o primeiro passo com confiança e sem surpresas.
                        </motion.p>
                    </motion.div>
                </div>

                {/* --- NÍVEL 2: ACCORDION CENTRALIZADO --- */}
                <motion.div
                    className="max-w-3xl mx-auto w-full"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div variants={fadeInUp}>
                        <AccordionPrimitive.Root type="single" collapsible defaultValue="item-0">
                            {faqs.map((faq, index) => (
                                <FAQAccordionItem key={index} faq={faq} index={index} />
                            ))}
                        </AccordionPrimitive.Root>
                    </motion.div>
                </motion.div>
                
            </div>
        </section>
    );
}