import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const links = [
    {
      name: "Послуги",
      href: "#services",
    },
    {
      name: "Справи",
      href: "#cases",
    },
    {
      name: "Відгуки",
      href: "#testimonials",
    },
    {
      name: "Контакти",
      href: "#contact",
    },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#0f0f0f]/85 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
      style={{
        borderBottom: `1px solid rgba(201, 168, 76, ${isScrolled ? 0.15 : 0})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-2 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-serif tracking-wide text-[#f5f0e8] z-50 relative"
        >
          Адвокат по ТЦК та ВЛК
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#f5f0e8]/70 hover:text-[#c9a84c] transition-colors font-sans text-lg tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed inset-0 bg-[#0f0f0f] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-4xl font-serif text-[#f5f0e8] hover:text-[#c9a84c] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
