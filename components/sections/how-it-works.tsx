"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Avaliação Inicial",
    description: "Analisamos seu histórico, objetivos e rotina para criar o plano ideal.",
  },
  {
    number: "02",
    title: "Planilha Personalizada",
    description: "Receba seus treinos mensais detalhados, ajustados à sua evolução real.",
  },
  {
    number: "03",
    title: "Treine & Evolua",
    description: "Você executa seus treinos e traz os feedbacks. O treinador monitora cada passo.",
  },
  {
    number: "04",
    title: "Otimize Resultados",
    description: "Receba revisões periódicas para garantir progresso sem lesões e recordes reais.",
  },
];

// Componente individual da Etapa para gerenciar seu próprio "ponto de vista"
const StepItem = ({ step, index, activeStep, setActiveStep }: any) => {
  const ref = useRef<HTMLDivElement>(null!);
  
  // margin: "-40% 0px -40% 0px" define uma "zona ativa" no centro da tela.
  // O elemento só é considerado "inView" quando está no meio 20% da viewport.
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px", amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  const isActive = activeStep === index;

  return (
    <div ref={ref} className="group">
      <div className="w-full py-10 md:py-14 text-left transition-opacity duration-500">
        
        {/* GRID DA ETAPA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline">
          
          {/* Coluna 1: Rótulo "Etapa" */}
          <div className="md:col-span-3">
            <span className={`text-xl md:text-2xl font-medium block transition-colors duration-300 ${isActive ? 'text-black' : 'text-neutral-300'}`}>
              Etapa
            </span>
          </div>

          {/* Coluna 2: Número (01) */}
          <div className="md:col-span-1">
            <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-neutral-300'}`}>
              ({step.number})
            </span>
          </div>

          {/* Coluna 3: Conteúdo */}
          <div className="md:col-span-8">
            {/* Título */}
            <h3 className={`text-3xl md:text-5xl font-medium transition-colors duration-300 ${isActive ? 'text-black' : 'text-neutral-300'}`}>
              {step.title}
            </h3>

            {/* Descrição (Abre/Fecha sozinho) */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
      
      {/* Linha Fina Separadora */}
      <div className="w-full h-px bg-black/10" />
    </div>
  );
};

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#fafafa] text-black border-t border-neutral-200">
      
      {/* Container Principal */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
        
        {/* --- NÍVEL 1: CABEÇALHO --- */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Badge Alinhado à Esquerda */}
          <div className="lg:col-span-3">
            <motion.div 
              variants={fadeInUp}
              className="px-5 py-1.5 border border-primary/30 rounded-full bg-white text-primary inline-block"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Como funciona
              </span>
            </motion.div>
          </div>

          {/* Texto Descritivo */}
          <div className="lg:col-span-9">
            <motion.h2 
              variants={fadeInUp} 
              className="text-3xl md:text-5xl font-medium leading-tight text-black max-w-4xl"
            >
              Quatro passos simples para desbloquear seu melhor desempenho: Compreenda a si mesmo, aplique os insights e acompanhe o progresso.
            </motion.h2>
          </div>
        </motion.div>


        {/* --- NÍVEL 2: ETAPAS COM SCROLL TRIGGER --- */}
        <div className="flex flex-col pb-32"> {/* pb-32 extra para garantir que o último item possa ficar no centro */}
          {/* Linha Superior */}
          <div className="w-full h-px bg-black/10" />

          {steps.map((step, index) => (
            <StepItem 
              key={index} 
              step={step} 
              index={index} 
              activeStep={activeStep} 
              setActiveStep={setActiveStep} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}