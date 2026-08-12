export default function Diferenciais() {
  const diferenciais = [
    {
      numero: "01",
      titulo: "Equipamentos Profissionais",
      descricao:
        "Equipamentos preparados para entregar efeitos com presença, impacto e qualidade visual.",
    },
    {
      numero: "02",
      titulo: "Experiência em Eventos",
      descricao:
        "Soluções para diferentes formatos de eventos, do chá revelação ao corporativo.",
    },
    {
      numero: "03",
      titulo: "Atendimento Personalizado",
      descricao:
        "Cada evento é único. Ajudamos a escolher os efeitos ideais para cada momento.",
    },
  ];

  return (
    <section className="bg-black px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        <p className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm">
          Boom Effects
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
          Por que escolher a gente?
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          Mais do que efeitos especiais, criamos momentos que ajudam seu evento
          a ser lembrado.
        </p>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {diferenciais.map((item) => (
            <div
              key={item.numero}
              className="group border border-white/10 bg-white/5 rounded-2xl p-6 md:p-8 hover:border-orange-500 transition duration-300"
            >
              <span className="text-orange-500 text-sm font-extrabold">
                {item.numero}
              </span>

              <h3 className="mt-5 md:mt-6 text-xl md:text-2xl font-bold text-white">
                {item.titulo}
              </h3>

              <p className="mt-4 text-sm md:text-base text-gray-400 leading-relaxed">
                {item.descricao}
              </p>

              <div className="mt-7 md:mt-8 h-1 w-12 bg-orange-500 transition-all duration-300 group-hover:w-24" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}