"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import { Heart, Target, Trophy } from "lucide-react"

const distances = [
  {
    distance: "5K",
    title: "Iniciante",
    description:
      "Para quem está começando ou quer curtir a experiência com a família. Sem pressão, só energia positiva.",
    icon: Heart,
  },
  {
    distance: "10K",
    title: "Desafio",
    description:
      "Para quem já corre e quer testar seus limites em um percurso seguro e bem organizado.",
    icon: Target,
  },
  {
    distance: "21K",
    title: "Meia Maratona",
    description:
      "Para quem treina como profissional e busca superar seus próprios recordes.",
    icon: Trophy,
  },
]

export function CorridasAbout() {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-flex px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              MAIS QUE UMA CORRIDA
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Uma experiência{" "}
            <span className="text-primary">Fast Club.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-white/60 max-w-2xl mb-16"
          >
            Nossas corridas são pensadas para unir pessoas de todos os níveis.
            Escolha o seu percurso e viva uma experiência única com a comunidade
            Fast Club Run.
          </motion.p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {distances.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="rounded-[2rem] border border-white/10 bg-[#111] p-8 md:p-10"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Distance */}
                  <span className="text-5xl md:text-6xl font-bold text-primary leading-none">
                    {item.distance}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mt-4 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
