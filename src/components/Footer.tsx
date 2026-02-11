import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0908] text-[#f5f0e8] pt-20 pb-10 px-6 md:px-12 border-t border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand + Description */}
        <div>
          <a
            href="#"
            className="text-2xl font-serif tracking-wide text-[#f5f0e8] block mb-4 hover:text-[#c9a84c] transition-colors"
          >
            Адвокат по ТЦК
          </a>
          <p className="text-[#a09882] font-sans text-sm leading-relaxed mb-4">
            Юридична допомога у справах ТЦК та ВЛК. Оскарження повісток,
            відстрочка від мобілізації, скасування штрафів.
          </p>
        </div>

        {/* Quick Navigation */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-[#c9a84c]">Навігація</h4>
          <ul className="space-y-4 font-sans text-sm text-[#f5f0e8]/60">
            <li>
              <a
                href="#services"
                className="hover:text-[#c9a84c] transition-colors"
              >
                Послуги
              </a>
            </li>
            <li>
              <a
                href="#cases"
                className="hover:text-[#c9a84c] transition-colors"
              >
                Справи
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-[#c9a84c] transition-colors"
              >
                Відгуки
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#c9a84c] transition-colors"
              >
                Контакти
              </a>
            </li>
          </ul>
        </div>


        {/* Working Hours / Note */}
        <div>
          <h4 className="font-serif text-lg mb-6 text-[#c9a84c]">
            Робочі години
          </h4>
          <p className="font-sans text-sm text-[#f5f0e8]/70 mb-4">
            Пн-Пт: 09:00 – 18:00
            <br />
            Сб: 10:00 – 15:00
            <br />
            Нд: вихідний
          </p>
          <p className="text-[#a09882] text-xs">
            Термінові консультації по ТЦК та ВЛК доступні 24/7.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f5f0e8]/5 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-[#f5f0e8]/30 font-sans">
        <p>&copy; 2024 Адвокат по ТЦК. Всі права захищено.</p>
      </div>
    </footer>
  );
}
