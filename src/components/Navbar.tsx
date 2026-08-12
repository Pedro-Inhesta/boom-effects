"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const whatsapp =
    "https://wa.me/5544991060314?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Boom%20Effects%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-4 md:px-16 py-5 md:py-8">

      {/* MOBILE */}
      <div className="flex md:hidden items-center justify-between">

        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Boom Effects"
            width={120}
            height={60}
            className="w-24 h-auto"
            priority
          />

          <h2 className="text-lg font-extrabold text-white">
            BOOM <span className="text-orange-500">EFFECTS</span>
          </h2>
        </div>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex flex-col justify-center gap-1.5 w-11 h-11 items-center border border-white/20 rounded-xl bg-black/30 backdrop-blur-sm"
          aria-label="Abrir menu"
        >
          <span className="w-5 h-0.5 bg-white" />
          <span className="w-5 h-0.5 bg-white" />
          <span className="w-5 h-0.5 bg-white" />
        </button>

      </div>

      {/* MENU MOBILE ABERTO */}
      {menuAberto && (
        <div className="md:hidden mt-4 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-5">

          <div className="flex flex-col gap-4 text-white">

            <a
              href="#produtos"
              onClick={() => setMenuAberto(false)}
              className="py-2 hover:text-orange-500 transition"
            >
              Produtos
            </a>

            <a
              href="#galeria"
              onClick={() => setMenuAberto(false)}
              className="py-2 hover:text-orange-500 transition"
            >
              Galeria
            </a>

            <a
              href="https://www.instagram.com/boomeffectsbr/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 hover:text-orange-500 transition"
            >
              Instagram
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white text-center font-bold px-5 py-3 rounded-xl transition"
            >
              WhatsApp
            </a>

          </div>

        </div>
      )}

      {/* DESKTOP */}
      <div className="hidden md:flex relative items-center justify-between">

        {/* ESQUERDA */}
        <h2 className="text-2xl font-extrabold text-white">
          BOOM <span className="text-orange-500">EFFECTS</span>
        </h2>

        {/* LOGO CENTRO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/logo.png"
            alt="Boom Effects"
            width={260}
            height={120}
            className="w-52 h-auto"
            priority
          />
        </div>

        {/* MENU DIREITA */}
        <div className="flex items-center gap-10 text-white">
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
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-xl font-bold transition"
          >
            WhatsApp
          </a>
        </div>

      </div>

    </nav>
  );
}