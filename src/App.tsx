import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import { About } from "./components/About";

export function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f5f0e8] relative">
      {/* Grain Texture Overlay */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        toastClassName={
          "!bg-[#0f0f0f] !text-[#f5f0e8] border-b-2 border-[#c9a84c] py-3 px-4 font-sans text-lg transition-colors"
        }
        progressClassName="!bg-[#c9a84c]"
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Helmet>
        <title>Адвокат ТЦК та ВЛК – Оскарження рішень, відстрочка | Київ</title>
        <meta
          name="description"
          content="Юридична допомога у справах ТЦК та ВЛК. Оскарження повісток, скасування штрафів, оформлення відстрочки від мобілізації. Консультація адвоката."
        />
        <meta
          name="keywords"
          content="адвокат ТЦК, оскарження ВЛК, відстрочка від мобілізації, штраф ТЦК, військовий адвокат"
        />
      </Helmet>
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-grain mix-blend-overlay"></div>

      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <section className="hidden">
        <h2>Юридична допомога у справах ТЦК та ВЛК</h2>
        <p>
          Наша юридична компанія надає професійний супровід у питаннях
          мобілізації, взаємодії з ТЦК, оскарження рішень військово-лікарської
          комісії (ВЛК), отримання відстрочки та захисту прав
          військовозобов’язаних.
        </p>
      </section>
    </div>
  );
}
