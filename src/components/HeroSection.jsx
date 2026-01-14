// src/components/HeroSection.jsx
import React from 'react';
import Icon from './Icon';
import CircuitBackground from './CircuitBackground';
import SolvLogo from '../assets/solv.png';

const HeroSection = ({ onShare }) => {
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

            <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center space-y-8">

                {/* HEADLINE PRINCIPAL */}
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white uppercase">
                        Assistência Técnica Delivery <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#00D4FF] drop-shadow-lg">
                            Com Frete Grátis
                        </span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-500 font-medium tracking-wide">
                        *(CONSULTE CONDIÇÕES)
                    </p>
                </div>

                {/* SLOGAN / SUBTÍTULO (FONTE MAIOR) */}
                <div className="py-4">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-200 uppercase tracking-widest leading-relaxed">
                        Confiança que resolve. <br className="hidden md:block" />
                        <span className="text-white">Qualidade que permanece.</span>
                    </h2>
                </div>

                {/* BOTÕES DE AÇÃO */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 w-full md:w-auto">
                    <a
                        href="#orcamento-form"
                        className="group bg-[#00BFFF] hover:bg-[#00D4FF] text-[#001F3F] font-bold py-4 px-10 rounded-xl shadow-[0_0_20px_rgba(0,191,255,0.3)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
                    >
                        <Icon
                            path={
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            }
                        />
                        <span>Orçamento Rápido</span>
                    </a>

                    <button
                        onClick={onShare}
                        className="group bg-transparent hover:bg-[#00BFFF]/10 text-white border border-[#00BFFF]/50 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        <Icon path={<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />} />
                        <span>Compartilhar</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;