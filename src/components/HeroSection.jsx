// src/components/HeroSection.jsx
import React from 'react';
import Icon from './Icon';
import CircuitBackground from './CircuitBackground';
// IMPORTAÇÃO NOVA
import solvBLogo from '../assets/solvB.png';

const HeroSection = ({ onShareClick }) => {
    return (
        <section className="relative text-white py-24 lg:py-32 px-4 overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e3a8a] opacity-90"></div>
                <CircuitBackground />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
                {/* Texto Principal */}
                <div className="flex-1 text-center lg:text-left space-y-8">

                    {/* Tagline Delivery */}
                    <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider backdrop-blur-md shadow-lg">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            {/* LOGO AQUI */}
                            <img src={solvBLogo} alt="SOLVPLACE" className="h-4 w-auto object-contain" />
                            <span className="ml-1">Delivery</span>
                        </div>
                        <span className="hidden sm:block text-slate-500">|</span>
                        <span className="text-green-400">Frete Grátis (Consulte condições)</span>
                    </div>

                    {/* SLOGAN PRINCIPAL EM DESTAQUE */}
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                        Na hora do problema, <br /> escolha quem
                        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
                            cuida de verdade.
                        </span>
                    </h1>

                    {/* SEGUNDO SLOGAN / SUBTÍTULO COM LOGO */}
                    <div className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto lg:mx-0 border-l-4 border-blue-500 pl-4 flex flex-col sm:flex-row items-center sm:items-end gap-2">
                        {/* LOGO AQUI */}
                        <img src={solvBLogo} alt="SOLVPLACE" className="h-6 md:h-8 w-auto object-contain mb-1" />
                        <span> Confiança que resolve.</span>
                    </div>
                    <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto lg:mx-0 pl-4 -mt-6">
                        Qualidade que permanece.
                    </p>

                    <p className="text-base text-slate-400 max-w-lg mx-auto lg:mx-0 pt-2">
                        A <strong>SOLVPLACE</strong> busca, conserta e devolve seu eletrônico. Sem trânsito, sem filas e com garantia de quem entende do assunto.
                    </p>

                    {/* Botões de Ação */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                        <a href="#orcamento-form" className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg border border-blue-500/50">
                            <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} />
                            <span>Orçamento Rápido</span>
                        </a>

                        {/* BOTÃO DE COMPARTILHAR SITE */}
                        <button
                            onClick={onShareClick}
                            className="group bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Icon path={<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />} />
                            <span>Compartilhar</span>
                        </button>
                    </div>
                </div>

                {/* Cards Flutuantes (Direita) */}
                <div className="flex-1 relative w-full max-w-lg lg:max-w-none hidden md:block">
                    <div className="relative z-10 grid grid-cols-2 gap-4 lg:gap-6">
                        {[
                            { title: "Apple Expert", sub: "iPhone e Mac", icon: <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z M10 2c1 .5 2 2 2 5" />, color: "text-white" },
                            { title: "Android", sub: "Samsung e outros", icon: <path d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 20V4h10v16H7z" />, color: "text-green-300" },
                            { title: "Consoles", sub: "Games e Controles", icon: <path d="M6 12h2v3a3 3 0 0 0 6 0v-3h2M6 12a6 6 0 0 1 12 0M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />, color: "text-purple-300" },
                            { title: "Notebooks", sub: "Todas as marcas", icon: <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />, color: "text-blue-300" },
                        ].map((card, idx) => (
                            <div key={idx} className={`bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col justify-between h-40 transform transition hover:scale-105 hover:bg-white/10 ${idx % 2 !== 0 ? 'translate-y-8' : ''}`}>
                                <div className={`p-3 bg-gradient-to-br from-white/10 to-transparent w-fit rounded-lg ${card.color}`}>
                                    <Icon path={card.icon} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">{card.title}</h3>
                                    <p className="text-slate-400 text-xs mt-1">{card.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;