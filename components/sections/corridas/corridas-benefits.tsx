"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Image from "next/image"
import { MapPin, Users, Shield, Trophy } from "lucide-react"

const benefits = [
  {
    icon: MapPin,
    title: "Percursos Seguros",
    description:
      "Trajetos planejados com suporte completo e sinalização em cada quilômetro.",
    image: "/Image/Benefits 1.webp",
  },
  {
    icon: Users,
    title: "Comunidade Engajada",
    description:
      "Corra ao lado de pessoas que compartilham a mesma paixão e energia.",
    image: "/Image/Benefits 2.webp",
  },
  {
    icon: Shield,
    title: "Suporte Completo",
    description:
      "Hidratação, primeiros socorros e equipe preparada em toda a extensão.",
    image: "/Image/Benefits 3.webp",
  },
  {
    icon: Trophy,
    title: "Resultados Reais",
    description:
      "Chip de cronometragem, fotos profissionais e certificado de conclusão.",
    image: "/Image/Benefits 4.webp",
  },
]

export function CorridasBenefits() {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-16 lg:px-24">
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
              POR QUE CORRER CONOSCO
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-16"
          >
            Cada detalhe pensado para{" "}
            <span className="text-primary">sua melhor corrida.</span>
          </motion.h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative h-[420px] rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-8">
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>

                    {/* Text */}
                    <div className="transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="text-lg md:text-xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
