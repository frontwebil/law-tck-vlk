import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-[#0f0f0f]">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#c9a84c] rounded-full blur-[120px] opacity-[0.03]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#c9a84c] rounded-full blur-[120px] opacity-[0.02]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.03)_0%,rgba(15,15,15,0)_70%)]" />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-32 h-32 border-t border-l border-[#c9a84c]/20 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-32 h-32 border-b border-r border-[#c9a84c]/20 hidden md:block" />

      <div className="max-w-5xl mx-auto z-10 mt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="block text-[#c9a84c] font-sans tracking-[0.2em] text-sm uppercase mb-6 opacity-90">
            Захист ваших інтересів з 2005 року
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#f5f0e8] leading-[1.1] mb-8"
        >
          Оскарження рішень ТЦК та ВЛК <br className="hidden md:block" />
          <span className="italic text-[#c9a84c]">законна відстрочка</span>
        </motion.h1>

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeInOut",
          }}
          className="w-32 h-[1px] bg-[#c9a84c] mx-auto mb-8 opacity-60"
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="text-xl md:text-2xl text-[#a09882] max-w-2xl mx-auto font-sans leading-relaxed mb-12 font-light"
        >
          Юридична допомога у справах ТЦК, оскарження рішень ВЛК, оформлення
          відстрочки від мобілізації та скасування штрафів по всій Україні.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          <a
            href="#contact"
            className="inline-block px-10 py-4 border border-[#c9a84c] text-[#c9a84c] font-sans uppercase tracking-widest text-sm hover:bg-[#c9a84c] hover:text-[#0f0f0f] transition-all duration-500"
          >
            Отримати консультацію адвоката по ТЦК
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="hidden lg:block absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-[#c9a84c] opacity-60" size={24} />
      </motion.div>
    </section>
  );
}
