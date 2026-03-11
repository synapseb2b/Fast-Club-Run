"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

export function CorridasHero() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero participar da 1ª Corrida Fast Club Run em 19 de abril!"
  )
  const whatsappLink = `https://wa.me/5531992186683?text=${whatsappMessage}`

  return (
    <section className="relative h-screen min-h-[600px] w-full flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Image/Pre footer.webp"
          alt="Corrida Fast Club Run"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />

      {/* Content */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 relative z-20 h-full flex flex-col justify-center pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-flex items-center gap-2 px-5 py-1.5 border border-primary/50 rounded-full bg-black text-primary"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              19 DE ABRIL DE 2026
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[0.95] mb-6"
          >
            A Corrida que Você Vai{" "}
            <span className="text-primary">Sentir.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mb-10"
          >
            Três percursos. Uma comunidade. A primeira corrida Fast Club Run em
            Sete Lagoas.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-primary hover:bg-primary-hover text-white pl-6 pr-2 py-2 md:pl-8 md:pr-2 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,77,0,0.4)]"
            >
              <span className="text-sm md:text-base font-semibold tracking-wide">
                Quero Participar
              </span>
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20">
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
