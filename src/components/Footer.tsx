export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-4 sm:px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              BOOM <span className="text-orange-500">EFFECTS</span>
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-400 max-w-md leading-relaxed">
              Efeitos especiais para transformar eventos em experiências
              inesquecíveis.
            </p>

            <p className="mt-4 text-sm md:text-base text-gray-500">
              Maringá e região
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">

            <a
              href="https://wa.me/5544991060314?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Boom%20Effects%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-center transition"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/boomeffectsbr/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/20 hover:border-orange-500 text-white font-bold px-6 py-3 rounded-xl text-center transition"
            >
              Instagram
            </a>

          </div>

        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 md:gap-4 md:items-center md:justify-between">

          <p className="text-xs md:text-sm text-gray-500">
            © 2026 Boom Effects. Todos os direitos reservados.
          </p>

          <p className="text-xs md:text-sm text-gray-600">
            Efeitos especiais para eventos.
          </p>

        </div>

      </div>
    </footer>
  );
}