const cases = [
  {
    category: "ВІЙСЬКОВЕ ПРАВО (ТЦК)",
    quote: "Скасування незаконної повістки та зняття з розшуку ТЦК.",
    description:
      "Клієнта було оголошено у розшук через нібито неявку до ТЦК. Після аналізу документів та підготовки правової позиції вдалося довести порушення процедури вручення повістки.",
    result: "Клієнта знято з розшуку, штраф анульовано",
  },
  {
    category: "ВІЙСЬКОВЕ ПРАВО (ВЛК)",
    quote: "Оскарження висновку ВЛК про придатність до військової служби.",
    description:
      "ВЛК визнала клієнта придатним попри наявність підтверджених медичних діагнозів. Підготовлено скаргу та організовано повторний медичний огляд.",
    result: 'Отримано статус "обмежено придатний"',
  },
  {
    category: "ВІДСТРОЧКА ВІД МОБІЛІЗАЦІЇ",
    quote: "Оформлення законної відстрочки для багатодітного батька.",
    description:
      "ТЦК відмовляв у наданні відстрочки через формальні підстави. Проведено правовий аналіз та підготовлено пакет документів відповідно до чинного законодавства.",
    result: "Відстрочку надано офіційно",
  },
  {
    category: "ВІЙСЬКОВЕ ПРАВО (АДМІНШТРАФИ)",
    quote: "Скасування штрафу за нібито порушення правил військового обліку.",
    description:
      "Клієнту було призначено адміністративний штраф за несвоєчасне оновлення даних. Доведено відсутність складу правопорушення.",
    result: "Штраф скасовано в судовому порядку",
  },
  {
    category: "МОБІЛІЗАЦІЙНІ СПОРИ",
    quote: "Звільнення з військової служби за сімейними обставинами.",
    description:
      "Підготовлено юридичний супровід для військовослужбовця, який має підстави для звільнення відповідно до законодавства.",
    result: "Наказ про звільнення видано",
  },
  {
    category: "ЗАХИСТ ПРАВ ВІЙСЬКОВОСЛУЖБОВЦІВ",
    quote: "Стягнення невиплаченого грошового забезпечення.",
    description:
      "Проведено юридичний супровід щодо стягнення заборгованості по виплатах військовослужбовцю.",
    result: "Виплати здійснено в повному обсязі",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-6 md:px-12 bg-[#141210]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#c9a84c] font-sans tracking-[0.2em] text-sm uppercase block mb-4">
            Практика
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#f5f0e8]">
            Останні справи
          </h2>
        </div>

        <div className="space-y-8">
          {cases.map((item) => (
            <article className="bg-[#1a1816] p-8 md:p-12 border border-[#2a2520] hover:border-[#c9a84c]/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)] transition-all duration-500 group">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-[#2a2520] pb-6 md:pb-0 md:pr-8">
                  <span className="text-xs font-bold tracking-widest text-[#c9a84c] uppercase mb-4 block opacity-80">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#f5f0e8] italic leading-tight group-hover:text-[#c9a84c] transition-colors duration-300">
                    "{item.quote}"
                  </h3>
                </div>

                <div className="md:w-2/3 flex flex-col justify-between">
                  <p className="text-[#a09882] font-sans text-xl leading-relaxed mb-8 font-light">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#2a2520]">
                    <span className="font-serif text-[#f5f0e8] text-lg">
                      Результат:{" "}
                      <span className="font-sans font-semibold text-[#c9a84c]">
                        {item.result}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
