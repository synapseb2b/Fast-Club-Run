"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CorridasCTA() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero garantir minha vaga na 1ª Corrida Fast Club Run!"
  )
  const whatsappLink = `https://wa.me/5531992186683?text=${whatsappMessage}`

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Image/Hero.webp"
          alt="Fast Club Run"
          fill
          className="object-cover opacity-95"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] mb-10"
          >
            Sua Próxima Corrida{" "}
            <span className="text-primary">Começa Aqui.</span>
          </motion.h2>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-10 pr-2 py-2 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,77,0,0.4)]"
            >
              <span className="text-sm md:text-base font-semibold tracking-wide">
                Garantir Minha Vaga
              </span>
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20">
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
    </section>
  )
}
