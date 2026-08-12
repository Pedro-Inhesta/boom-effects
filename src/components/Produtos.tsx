import Image from "next/image";

export default function Produtos() {
  const produtos = [
    {
      nome: "Bicos de CO₂",
      imagem: "/images/co2.png",
    },
    {
      nome: "Fire Machine",
      imagem: "/images/fire-machine.png",
    },
    {
      nome: "Papel Picado",
      imagem: "/images/papel-picado.png",
    },
    {
      nome: "Serpentina",
      imagem: "/images/serpentina.png",
    },
    {
      nome: "Gerbs",
      imagem: "/images/gerb.png",
    },
    {
      nome: "Silver Jet",
      imagem: "/images/silver.png",
    },
  ];

  return (
    <section id="produtos" className="bg-black px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">

        <p className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm">
          Catálogo
        </p>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
          Nossos Efeitos
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl">
          Escolha o efeito ideal para transformar seu evento em uma experiência
          inesquecível.
        </p>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {produtos.map((produto) => {
            const mensagem = encodeURIComponent(
              `Olá! Vim pelo site da Boom Effects e gostaria de solicitar um orçamento para ${produto.nome}.`
            );

            return (
              <div
                key={produto.nome}
                className="group overflow-hidden border border-white/10 bg-white/5 rounded-2xl hover:border-orange-500 transition duration-300"
              >
                <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden">
                  <Image
                    src={produto.imagem}
                    alt={produto.nome}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {produto.nome}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-gray-400">
                    Conheça esse efeito especial da Boom Effects.
                  </p>

                  <a
                    href={`https://wa.me/5544991060314?text=${mensagem}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block sm:inline-block w-full sm:w-auto mt-6 bg-orange-500 hover:bg-orange-600 text-white text-center font-bold px-5 md:px-6 py-3 rounded-xl transition transform hover:scale-105"
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}