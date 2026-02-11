import { motion } from "framer-motion";
const services = [
  {
    id: "01",
    title: "Військове право (ТЦК)",
    description:
      "Юридичний супровід у питаннях взаємодії з ТЦК, оскарження повісток, штрафів та незаконних рішень.",
  },
  {
    id: "02",
    title: "Оскарження рішень ВЛК",
    description:
      "Правова допомога при визнанні придатності до служби, підготовка скарг, супровід повторних медичних оглядів.",
  },
  {
    id: "03",
    title: "Відстрочка від мобілізації",
    description:
      "Оформлення законних підстав для відстрочки (навчання, сімейні обставини, стан здоров’я), підготовка повного пакета документів.",
  },
  {
    id: "04",
    title: "Корпоративне право",
    description:
      "Комплексний супровід бізнесу, реєстрація компаній, злиття та поглинання, корпоративні спори.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 border-b border-[#2a2520] pb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#f5f0e8]">
            Наші послуги
          </h2>
          <p className="mt-4 md:mt-0 text-[#a09882] font-sans text-lg max-w-md text-right">
            Експертна допомога у вирішенні найскладніших правових питань
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 20,
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
                delay: index * 0.1,
              }}
              className="group relative p-8 md:p-12 border border-[#2a2520] hover:border-[#c9a84c]/30 transition-colors duration-500 bg-[#141210]/30"
            >
              <span className="block text-5xl md:text-6xl font-serif text-[#c9a84c] opacity-15 group-hover:opacity-30 transition-opacity duration-500 mb-6">
                {service.id}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#f5f0e8] mb-4 group-hover:text-[#c9a84c] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#a09882] font-sans leading-relaxed text-xl font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
