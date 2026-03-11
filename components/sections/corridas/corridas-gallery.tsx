"use client"

import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import Image from "next/image"

const gallery = [
  {
    image: "/Image/Who Its For 1.webp",
    title: "Para Quem Quer Começar",
    subtitle: "Cada primeiro passo conta.",
  },
  {
    image: "/Image/Who Its For 2.webp",
    title: "Para Quem Quer Evoluir",
    subtitle: "Supere seus limites.",
  },
  {
    image: "/Image/Who Its For 3.webp",
    title: "Para Quem Quer Competir",
    subtitle: "Supere-se.",
  },
]

export function CorridasGallery() {
  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative w-full aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-neutral-900"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
