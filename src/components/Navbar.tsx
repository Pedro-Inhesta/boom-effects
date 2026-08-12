import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-4 md:px-16 py-5 md:py-8">

      <div className="relative flex flex-col md:flex-row items-center justify-between gap-5">

        {/* ESQUERDA */}
        <h2 className="text-xl md:text-2xl font-extrabold text-white md:absolute md:left-0">
          BOOM <span className="text-orange-500">EFFECTS</span>
        </h2>

        {/* LOGO NO CENTRO */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image
            src="/images/logo.png"
            alt="Boom Effects"
            width={260}
            height={120}
            className="w-36 md:w-52 h-auto"
            priority
          />
        </div>

        {/* MENU */}
        <div className="flex items-center justify-center gap-4 md:gap-10 text-white text-sm md:text-base md:ml-auto">
          <a
            href="#produtos"
            className="hover:text-orange-500 transition"
          >
            Produtos
          </a>

          <a
            href="#galeria"
            className="hover:text-orange-500 transition"
          >
            Galeria
          </a>

          <a
            href="https://wa.me/5544991060314?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Boom%20Effects%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 px-4 md:px-6 py-2.5 md:py-4 rounded-xl font-bold transition"
          >
            WhatsApp
          </a>
        </div>

      </div>

    </nav>
  );
}