"use client";
import React from "react";
import Populate from "./puplate";

import Link from "next/link";


//import ButtonBuscar from "./buttonBUsqueda";

const MaquetaInicio = () => {
  const speedLines = [...Array(12)].map((_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    return {
      x2: (50 + 70 * Math.cos(angle)).toFixed(2), // Redondea a 2 decimales
      y2: (50 + 70 * Math.sin(angle)).toFixed(2), // Redondea a 2 decimales
    };
  });
  return (
    <div
      className="relative min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)] bg-[#0f0e17]"
      style={{
        backgroundImage: `
              linear-gradient(135deg, rgba(112, 128, 144, 0.8) 0%, rgba(47, 79, 79, 0.9) 100%),
              radial-gradient(circle at 20% 30%, rgba(192, 192, 192, 0.2) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(25, 25, 112, 0.3) 0%, transparent 30%)
            `,
        backgroundColor: "#2F4F4F",
      }}
    >
      {/* Efecto de líneas manga */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJtYW5nYUxpbmVzIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbWFuZ2FMaW5lcykiLz48L3N2Zz4=')] opacity-30"></div>

      {/* Efecto de viñetas manga */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_20px_rgba(0,0,0,0.7)]"></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 sm:p-12">
        {/* Tarjeta con estilo manga */}
        <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-6xl p-8 sm:p-10 md:p-12 lg:p-14 bg-[#16132a] rounded-xl md:rounded-2xl lg:rounded-3xl border-2 md:border-4 lg:border-[6px] border-[#ff3864] shadow-lg md:shadow-2xl lg:shadow-3xl shadow-[#ff3864]/20 md:shadow-[#ff3864]/30 lg:shadow-[#ff3864]/40 relative overflow-hidden">
          {/* Efecto de "speed lines" en esquina */}
          <div className="absolute w-32 h-32 -top-10 -left-10 opacity-20">
            <svg viewBox="0 0 100 100" className="text-[#ff3864]">
              {speedLines.map((line, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3864] to-[#ff8c64] mb-4 font-[Arial] tracking-tighter">
              ようこそ!
            </h1>
            <p className="text-xl text-[#a7a9be] mb-6 font-mono">
              Tu portal al mundo del anime y manga
            </p>

            {/* Botones con estilo anime */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <button className="px-8 py-3 font-bold text-white transition-all duration-200 bg-[#ff3864] rounded-lg hover:bg-[#ff1a50] hover:shadow-[0_0_15px_rgba(255,56,100,0.6)] hover:-translate-y-1 flex items-center gap-2 border-b-4 border-[#cc0e38] active:border-b-2 active:translate-y-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                <Link href="/login">Iniciar Sesión</Link>
              </button>

              <button className="px-8 py-3 font-bold text-white transition-all duration-200 bg-[#6246ea] rounded-lg hover:bg-[#4d2ce0] hover:shadow-[0_0_15px_rgba(98,70,234,0.6)] hover:-translate-y-1 flex items-center gap-2 border-b-4 border-[#3a1cb3] active:border-b-2 active:translate-y-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
                <Link href="/register">Registrarse</Link>
              </button>
            </div>
          </div>

          {/* Personajes anime decorativos (puedes reemplazar con tus favoritos) */}
          <div className="absolute transition-opacity -bottom-20 -right-10 opacity-30 hover:opacity-70">
            <img
              src="https://www.pngall.com/wp-content/uploads/14/Zoro-PNG-Cutout.png"
              alt="Zoro"
              className="object-contain h-64"
            />
          </div>

          <div className="absolute transition-opacity -bottom-20 -left-10 opacity-30 hover:opacity-70">
            <img
              src="https://www.pngall.com/wp-content/uploads/14/Naruto-Manga-PNG-Pic.png"
              alt="Naruto"
              className="object-contain h-64"
            />
          </div>
        </div>
        
        {/* Sección de animes populares */}
        <Populate />
        
      </main>
    </div>
  );
};

export default MaquetaInicio;
