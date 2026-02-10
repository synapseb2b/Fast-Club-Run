"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, MessageCircle } from "lucide-react"; // MessageCircle para o ícone do Whats
import { ButtonLink } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

// --- DADOS DOS PLANOS ---
const plans = [
    {
        id: "pace",
        name: "Pace",
        description: "Periodização profissional para quem quer levar a corrida a sério.",
        price: "79",
        period: "/mês",
        features: [
            "Plano mensal periodizado",
            "Personalizado para seu nível",
            "Metodologia Wagner Figueiredo",
            "Entrega via app exclusivo",
        ],
        cta: "Assinar Pace",
        popular: false,
    },
    {
        id: "sprint",
        name: "Sprint",
        description: "Acompanhamento real e suporte direto com o treinador.",
        price: "149",
        period: "/mês",
        features: [
            "Tudo do Pace +",
            "Suporte via WhatsApp",
            "Ajustes ilimitados",
            "Feedback de treinos",
            "Suporte prioritário",
        ],
        cta: "Assinar Sprint",
        popular: true,
    },
    {
        id: "pro",
        name: "Pro",
        description: "Dedicação total. Acompanhamento 1:1 com o treinador Wagner.",
        price: "249",
        period: "/mês",
        features: [
            "Tudo do Sprint +",
            "Reunião mensal por vídeo",
            "Análise de provas e metas",
            "Planilha semanal ajustada",
            "Acesso a grupo VIP",
            "Consultoria nutricional",
        ],
        cta: "Assinar Pro",
        popular: false,
    },
];

// --- MODAL DE RECOMENDAÇÃO (QUIZ) ---
function RecommendationModal({ isOpen, onClose }: any) {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({ autonomy: "", goal: "" });
    const [recommendedPlan, setRecommendedPlan] = useState<any>(null);

    // Lógica de Recomendação Simples
    const calculateRecommendation = (finalAnswers: any) => {
        // Se quer muita proximidade ou tem meta alta -> PRO
        if (finalAnswers.goal === "high_stakes" || finalAnswers.autonomy === "need_push") {
            return plans.find(p => p.id === "pro");
        }
        // Se quer feedback mas corre bem sozinho -> SPRINT
        if (finalAnswers.autonomy === "feedback") {
            return plans.find(p => p.id === "sprint");
        }
        // Se é independente -> PACE
        return plans.find(p => p.id === "pace");
    };

    const handleOptionClick = (key: string, value: string) => {
        const newAnswers = { ...answers, [key]: value };
        setAnswers(newAnswers);

        if (step === 1) {
            setStep(2);
        } else {
            const result = calculateRecommendation(newAnswers);
            setRecommendedPlan(result);
            setStep(3); // Mostra resultado
        }
    };

    const sendToWhatsApp = () => {
        const phone = "5531992186683";
        const message = `Olá Wagner! Fiz o teste no site e meu perfil é:
1. ${answers.autonomy === 'independent' ? 'Gosto de autonomia' : answers.autonomy === 'feedback' ? 'Quero feedbacks' : 'Preciso de acompanhamento próximo'}.
2. ${answers.goal === 'fitness' ? 'Busco saúde/fitness' : 'Busco performance/prova'}.

O site recomendou o plano *${recommendedPlan.name}*. Gostaria de saber mais!`;
        
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
        onClose();
        setTimeout(() => { setStep(1); setRecommendedPlan(null); }, 500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-[#111] border border-white/10 w-full max-w-lg rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
            >
                {/* Header */}
                <div className="px-8 py-6 border-b border-white/5 flex justify-between items-center bg-[#111]">
                    <div>
                        {step < 3 && <span className="text-primary text-xs font-bold tracking-widest uppercase">Passo {step} de 2</span>}
                        <h3 className="text-xl font-bold text-white mt-1">
                            {step === 3 ? "Sua Recomendação" : "Descubra seu Plano Ideal"}
                        </h3>
                    </div>
                    <button onClick={onClose} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                                <h4 className="text-lg md:text-xl font-medium text-white mb-6">Como você se sente em relação aos treinos hoje?</h4>
                                <div className="space-y-3">
                                    <OptionButton onClick={() => handleOptionClick('autonomy', 'independent')} title="Sou disciplinado" subtitle="Só preciso da planilha organizada, eu executo sozinho." />
                                    <OptionButton onClick={() => handleOptionClick('autonomy', 'feedback')} title="Tenho dúvidas constantes" subtitle="Quero saber se estou no ritmo certo e ter feedback." />
                                    <OptionButton onClick={() => handleOptionClick('autonomy', 'need_push')} title="Preciso de compromisso" subtitle="Quero alguém cobrando e analisando cada detalhe." />
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                                <h4 className="text-lg md:text-xl font-medium text-white mb-6">Qual seu principal objetivo agora?</h4>
                                <div className="space-y-3">
                                    <OptionButton onClick={() => handleOptionClick('goal', 'fitness')} title="Saúde e Constância" subtitle="Quero emagrecer ou manter a rotina sem lesões." />
                                    <OptionButton onClick={() => handleOptionClick('goal', 'performance')} title="Superar meu Recorde" subtitle="Quero baixar meu tempo nos 5k, 10k, 21k ou 42k." />
                                    <OptionButton onClick={() => handleOptionClick('goal', 'high_stakes')} title="Desafio Extremo / Elite" subtitle="Estou treinando para algo grande e não posso errar." />
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && recommendedPlan && (
                            <motion.div key="step3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                                <p className="text-white/60 text-sm mb-4">Com base nas suas respostas, indicamos:</p>
                                
                                <div className="bg-white/5 border border-primary/50 rounded-2xl p-6 mb-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">IDEAL PARA VOCÊ</div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{recommendedPlan.name}</h3>
                                    <div className="text-primary text-xl font-bold mb-4">R$ {recommendedPlan.price}<span className="text-sm text-white/50 font-normal">/mês</span></div>
                                    <p className="text-sm text-white/70 leading-relaxed">{recommendedPlan.description}</p>
                                </div>

                                <button 
                                    onClick={sendToWhatsApp}
                                    className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all transform hover:scale-[1.02]"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Falar com Wagner no WhatsApp
                                </button>
                                <p className="text-[10px] text-white/30 mt-3 uppercase tracking-widest">Enviaremos suas respostas automaticamente</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

// Botão de Opção do Quiz
const OptionButton = ({ title, subtitle, onClick }: any) => (
    <button onClick={onClick} className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all group">
        <div className="text-white font-bold group-hover:text-primary transition-colors">{title}</div>
        <div className="text-sm text-white/50">{subtitle}</div>
    </button>
);


// --- COMPONENTE PRINCIPAL ---
export function PricingSection() {
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    // Função para link direto do WhatsApp (caso o usuário clique no card do grid em vez do quiz)
    const getDirectLink = (planName: string) => {
        const phone = "5531992186683";
        const message = `Olá Wagner! Vi o plano *${planName}* no site e gostaria de tirar dúvidas para assinar.`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <section id="pricing" className="py-24 md:py-32 bg-white text-black border-t border-neutral-200">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
                
                {/* Cabeçalho */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <motion.div className="max-w-4xl flex flex-col items-center" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <motion.div variants={fadeInUp} className="mb-8 px-5 py-1.5 border border-primary/50 rounded-full bg-white text-primary inline-block">
                            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">Escolha seu plano</span>
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-black">
                            O seu <span className="text-primary">sucesso</span> começa com <br className="hidden md:block" /> a decisão certa hoje.
                        </motion.h2>
                    </motion.div>
                </div>

                {/* BOTÃO MÁGICO DO QUIZ - Destaque antes dos planos */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-16"
                >
                    <button 
                        onClick={() => setIsQuizOpen(true)}
                        className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 group"
                    >
                        <span>Não sabe qual escolher?</span>
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs uppercase tracking-wider group-hover:bg-white group-hover:text-primary transition-colors">Faça o teste rápido</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>

                {/* Grid de Planos */}
                <motion.div className="grid md:grid-cols-3 gap-6 w-full mx-auto max-w-6xl" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                    {plans.map((plan, index) => (
                        <motion.div key={index} variants={fadeInUp} className={cn("relative p-8 rounded-[2rem] flex flex-col text-center transition-all duration-500", plan.popular ? "bg-black text-white shadow-2xl scale-[1.02] border border-black z-10" : "bg-white border border-black/5 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-2 z-0")}>
                            {plan.popular && (
                                <div className="absolute top-6 right-6 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Recomendado</div>
                            )}
                            <h3 className="text-2xl font-bold mb-3 tracking-tight">{plan.name}</h3>
                            <p className={cn("text-sm mb-8 leading-relaxed", plan.popular ? "text-white/60" : "text-black/60")}>{plan.description}</p>
                            
                            <ul className="space-y-4 flex-1 mb-10 max-w-[260px] mx-auto">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-left">
                                        <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", plan.popular ? "bg-primary text-white" : "bg-primary/10 text-primary")}>
                                            <Check className="w-3 h-3 stroke-[3px]" />
                                        </div>
                                        <span className={cn("text-sm font-medium", plan.popular ? "text-white/80" : "text-black/70")}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mb-8 pt-6 border-t border-current/10">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-sm font-medium mr-1 opacity-60">R$</span>
                                    <span className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">{plan.price}</span>
                                    <span className={cn("text-xs font-medium ml-1 uppercase tracking-wide opacity-60")}>{plan.period}</span>
                                </div>
                            </div>

                            {/* Link direto para quem já decidiu */}
                            <ButtonLink
                                href={getDirectLink(plan.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant={plan.popular ? "primary" : "outline"}
                                className={cn("w-full justify-center py-6 text-sm font-bold tracking-wide uppercase border transition-all duration-300 rounded-full", plan.popular ? "bg-primary border-primary hover:bg-white hover:text-black hover:border-white shadow-lg shadow-primary/30" : "border-black/10 hover:border-black hover:bg-black hover:text-white")}
                            >
                                {plan.cta}
                            </ButtonLink>

                            <p className={cn("text-center mt-4 text-[10px] uppercase tracking-widest opacity-40")}>Sem fidelidade</p>
                        </motion.div>
                    ))}
                </motion.div>

                <p className="text-center mt-16 text-xs font-bold text-black/30 uppercase tracking-[0.2em]">Pagamento seguro · Cancelamento fácil · Suporte via WhatsApp</p>
            </div>

            {/* Renderiza o Modal do Quiz */}
            <AnimatePresence>
                {isQuizOpen && <RecommendationModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />}
            </AnimatePresence>
        </section>
    );
}