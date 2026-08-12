export default function Galeria() {
  const videos = [
    {
      titulo: "Chá Revelação",
      arquivo: "/videos/cha-revelacao.mp4",
    },
    {
      titulo: "Eventos",
      arquivo: "/videos/evento.mp4",
    },
    {
      titulo: "Eventos Corporativos",
      arquivo: "/videos/corporativo.mp4",
    },
  ];

  return (
    <section id="galeria" className="bg-zinc-950 px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        <p className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm">
          Galeria
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
          Momentos Boom Effects
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl">
          Veja alguns momentos onde nossos efeitos transformaram o evento.
        </p>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">

          {videos.map((video) => (
            <div
              key={video.titulo}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black"
            >

              <div className="relative h-[520px] sm:h-[560px] md:h-[500px] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                  <source src={video.arquivo} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 pointer-events-none">
                  <p className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                    Boom Effects
                  </p>

                  <h3 className="mt-2 text-2xl md:text-2xl font-extrabold text-white">
                    {video.titulo}
                  </h3>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}