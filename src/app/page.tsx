import Navbar from "@/components/Navbar";
import Produtos from "@/components/Produtos";
import Diferenciais from "@/components/Diferenciais";
import Galeria from "@/components/galeria";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">

        {/* VÍDEO DE FUNDO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* CAMADA ESCURA */}
        <div className="absolute inset-0 bg-black/65" />

        {/* CONTEÚDO */}
        <div className="relative z-10 text-center max-w-4xl mx-auto pt-36 md:pt-24">

          <p className="text-orange-500 uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
            Efeitos especiais para eventos
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            BOOM <span className="text-orange-500">EFFECTS</span>
          </h1>

          <p className="mt-5 md:mt-6 text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transformando eventos em experiências inesquecíveis.
          </p>

          <a
            href="https://wa.me/5544991060314?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Boom%20Effects%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 md:mt-10 bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold transition transform hover:scale-105 text-sm md:text-base"
          >
            Solicitar orçamento
          </a>

        </div>

      </section>

      <Produtos />
      <Diferenciais />
      <Galeria />
      <Footer />

    </main>
  );
}