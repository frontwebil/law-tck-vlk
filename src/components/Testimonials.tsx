import { motion } from "framer-motion";
import { Quote } from "lucide-react";
const testimonials = [
  {
    text: "Звернувся через проблему з ТЦК — отримав повістку з порушеннями. Юристи швидко розібралися в ситуації, підготували документи та супроводжували до повного вирішення питання. Все завершилось без штрафів.",
    author: "Андрій М.",
    role: "Київ",
  },
  {
    text: "ВЛК визнала мене придатним попри серйозні проблеми зі здоров’ям. Завдяки грамотному оскарженню вдалося пройти повторний огляд і отримати законний статус. Дуже вдячний за підтримку.",
    author: "Сергій К.",
    role: "Дніпро",
  },
  {
    text: "Допомогли оформити відстрочку через сімейні обставини. Чітко пояснили алгоритм дій, зібрали всі документи та супроводжували на кожному етапі. Питання вирішено офіційно.",
    author: "Олег Т.",
    role: "Львів",
  },
  {
    text: "Отримав адміністративний штраф від ТЦК за нібито порушення обліку. Після консультації та підготовки скарги рішення було скасовано. Працюють чітко і без зайвих обіцянок.",
    author: "Ігор В.",
    role: "Харків",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 md:px-12 bg-[#161412] text-[#f5f0e8]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#f5f0e8]">
            Відгуки клієнтів
          </h2>
          <div className="w-24 h-[1px] bg-[#c9a84c] mx-auto opacity-60"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative"
            >
              <Quote className="absolute -top-10 -left-6 text-[#c9a84c] opacity-20 w-20 h-20 transform -scale-x-100" />
              <blockquote className="relative z-10">
                <p className="font-serif text-2xl md:text-3xl leading-relaxed italic opacity-90 mb-8 text-[#f5f0e8]">
                  "{item.text}"
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#c9a84c]"></div>
                  <div>
                    <cite className="block font-sans font-semibold not-italic text-lg tracking-wide text-[#f5f0e8]">
                      {item.author}
                    </cite>
                    <span className="block font-sans text-sm text-[#a09882] uppercase tracking-widest mt-1">
                      {item.role}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
