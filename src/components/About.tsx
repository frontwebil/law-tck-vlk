import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 bg-[#0f0f0f]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif text-[#f5f0e8] leading-[1.1] mb-8"
        >
          Про нас —{" "}
          <span className="italic text-[#c9a84c]">військові адвокати</span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-32 h-[1px] bg-[#c9a84c] mx-auto mb-12 opacity-60"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#a09882] font-sans leading-relaxed font-light space-y-6"
        >
          Ми — команда практикуючих адвокатів з військового права, які
          спеціалізуються на справах ТЦК та ВЛК по всій Україні. Надаємо
          професійну юридичну допомогу у питаннях оскарження рішень ТЦК,
          оскарження висновків ВЛК, визнання непридатності до військової служби,
          оформлення законної відстрочки від мобілізації та скасування
          незаконних штрафів.
          <br />
          <br />
          Наш військовий адвокат супроводжує клієнта на всіх етапах: від
          підготовки скарги на рішення ВЛК до представництва інтересів у суді.
          Ми допомагаємо при повторній ВЛК, неправомірному визнанні придатності,
          проблемах з мобілізацією, врученням повісток та адміністративними
          штрафами ТЦК.
          <br />
          <br />
          Практичний досвід у справах щодо мобілізації, військового обліку,
          оскарження медичних висновків та захисту прав військовозобов’язаних
          дозволяє нам ефективно вирішувати навіть найскладніші юридичні кейси.
        </motion.p>
      </div>
    </section>
  );
}
