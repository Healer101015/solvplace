// src/components/HeroSection.jsx
import React from 'react';
import CircuitBackground from './CircuitBackground';
import SolvLogo from '../assets/solv.png';

const HeroSection = () => {
    return (
        <section className="relative text-white py-32 lg:py-48 px-4 overflow-hidden bg-[#001F3F] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] via-[#0A1D37] to-[#001021] opacity-95"></div>
                <CircuitBackground />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

                {/* MARCA D'ÁGUA NO FUNDO */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto opacity-[0.03] pointer-events-none select-none">
                    <img src={SolvLogo} alt="" className="w-full grayscale brightness-200" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center space-y-10">

                {/* 1. FRASE DE TOPO (AGORA EM CINZA) */}
                <div className="flex flex-col items-center space-y-2">
                    <h2 className="text-sm md:text-lg lg:text-xl font-bold text-slate-400 uppercase tracking-[0.2em]">
                        Assistência Técnica Delivery Com Frete Grátis
                    </h2>
                    <p className="text-[10px] md:text-xs text-slate-600 font-medium tracking-wide">
                        *(CONSULTE CONDIÇÕES)
                    </p>
                </div>

                {/* 2. HEADLINE PRINCIPAL */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white uppercase drop-shadow-2xl max-w-4xl">
                    Na hora do problema,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#00D4FF]">
                        Escolha quem cuida de verdade.
                    </span>
                </h1>

                {/* 3. FRASE DE BAIXO (AGORA EM CINZA - IGUAL A DE CIMA) */}
                <div>
                    <h2 className="text-sm md:text-lg lg:text-xl font-bold text-slate-400 uppercase tracking-[0.2em]">
                        Confiança que resolve. Qualidade que permanece.
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;