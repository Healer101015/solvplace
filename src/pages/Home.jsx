// src/pages/Home.jsx
import React, { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import CircuitBackground from '../components/CircuitBackground';

// Importando as imagens
import iphoneImg from '../assets/iphone.png';
import macbookImg from '../assets/macbook.png';

const Home = () => {
  // Estado para o formulário de orçamento
  const [formData, setFormData] = useState({
    nome: '',
    aparelho: '',
    problema: ''
  });

  // Estado para o modal de compartilhamento (fallback)
  const [showShareModal, setShowShareModal] = useState(false);

  // --- LÓGICA DO FORMULÁRIO WHATSAPP ---
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const hour = new Date().getHours();
    let greeting = "Olá";
    if (hour < 12) greeting = "Bom dia";
    else if (hour < 18) greeting = "Boa tarde";
    else greeting = "Boa noite";

    const message = `${greeting}! Me chamo *${formData.nome}*. \nGostaria de um orçamento para o aparelho: *${formData.aparelho}*.\n\nDescrição do problema/serviço: ${formData.problema}`;
    window.open(`https://wa.me/5511952924711?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- LÓGICA DE COMPARTILHAMENTO ---
  const handleShare = async () => {
    const shareData = {
      title: 'SOLVPLACE - Assistência Técnica Delivery',
      text: 'Na hora do problema, escolha quem cuida de verdade. Assistência técnica sem sair de casa!',
      url: window.location.href,
    };

    // Tenta usar o compartilhamento nativo do celular (Android/iOS)
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Erro ao compartilhar:', err);
      }
    } else {
      // Se for PC ou não suportar, abre o modal customizado
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
    setShowShareModal(false);
  };

  return (
    <div className="font-sans text-slate-600 bg-[#F8FAFC] min-h-screen flex flex-col relative">

      {/* MODAL DE COMPARTILHAMENTO (Apenas aparece se navigator.share falhar) */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Compartilhar SOLVPLACE</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Olha essa assistência técnica: " + window.location.href)}`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition font-bold"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition font-bold"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Na hora do problema, escolha quem cuida de verdade.")}`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition font-bold"
              >
                X (Twitter)
              </a>
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-2 p-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition font-bold"
              >
                Copiar Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ESTILOS DE ANIMAÇÃO LOCAIS */}
      <style>{`
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes float-medium { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
      `}</style>

      {/* ================= HERO SECTION (Atualizada com Slogans) ================= */}
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
                SOLVPLACE Delivery
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

            {/* SEGUNDO SLOGAN / SUBTÍTULO */}
            <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto lg:mx-0 border-l-4 border-blue-500 pl-4">
              SOLVPLACE — Confiança que resolve. <br />
              <span className="text-slate-400 font-light">Qualidade que permanece.</span>
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
                onClick={handleShare}
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

      {/* ================= FEATURES BAR ================= */}
      <section className="relative z-20 px-4 -mt-10 mb-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {[
            { title: "Garantia de 90 Dias", desc: "Qualidade assegurada.", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
            { title: "Delivery Seguro", desc: "Buscamos e entregamos.", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
            { title: "Orçamento Honesto", desc: "Você aprova antes.", icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> }
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-4 flex-1">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shadow-sm"><Icon path={feat.icon} /></div>
              <div><h3 className="font-bold text-slate-800 text-lg">{feat.title}</h3><p className="text-slate-500 text-sm mt-1">{feat.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEXTO DESTAQUE E IMAGENS ================= */}
      <section className="py-10 pb-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* LADO ESQUERDO: IMAGENS FLUTUANTES */}
          <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl -z-10"></div>
            <div className="relative w-full max-w-[550px]">
              <div className="relative z-10 animate-float-slow">
                <img src={macbookImg} alt="MacBook Reparo" className="w-full h-auto drop-shadow-2xl" />
              </div>
              <div className="absolute -bottom-10 -right-4 w-[35%] z-20 animate-float-medium" style={{ animationDelay: '1s' }}>
                <img src={iphoneImg} alt="iPhone Reparo" className="w-full h-auto drop-shadow-2xl" />
                <div className="absolute -top-6 -left-12 bg-white/80 backdrop-blur border border-white/50 shadow-lg px-4 py-2 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-700">Peças Premium</span>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: TEXTO E PROPOSTA DE VALOR */}
          <div className="flex-1 space-y-6">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              SOLVPLACE
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Tecnologia parada <br />
              <span className="text-blue-600">é dinheiro perdido.</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              A <strong>SOLVPLACE</strong> oferece assistência técnica especializada com honestidade, rapidez e segurança — tudo sem você sair de casa.
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              Se seu eletrônico está travando, esquentando, não ligando ou apresentando qualquer falha, fale com a gente. Muitas vezes o conserto é simples e evita que você perca tempo e dinheiro. Com diagnóstico claro, reparo profissional e garantia, buscamos, consertamos e devolvemos direto no seu endereço.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Diagnóstico Claro",
                "Reparo Profissional",
                "Economize até 60%",
                "Garantia Inclusa",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs shrink-0">✓</div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= LISTA DE SERVIÇOS (Grelha) ================= */}
      <section id="servicos" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">O que consertamos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Nossas Especialidades</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Especializados na linha Apple e Androids.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Celulares", sub: "Troca de tela e Bateria", icon: <path d="M12 18h.01M5 17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5z" /> },
              { name: "Tablets e iPads", sub: "Vidro e Componentes", icon: <path d="M12 18h.01M4 6h16M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" /> },
              { name: "Notebooks", sub: "Teclado, Carcaça, Placa", icon: <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /> },
              { name: "MacBooks", sub: "Especialistas Apple", icon: <path d="M2 20h20M4 4h16v12H4z" /> },
              { name: "Videogames", sub: "Consoles de Mesa", icon: <path d="M6 12h2v3a3 3 0 0 0 6 0v-3h2M6 12a6 6 0 0 1 12 0M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /> },
              { name: "Controles", sub: "Manutenção de Joysticks", icon: <path d="M12 2a10 10 0 0 0-9.5 13.5l-2 2 2 2 2-2A10 10 0 1 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-3-8h6" /> },
              { name: "Portáteis", sub: "Switch, Steam Deck, etc", icon: <path d="M16 6h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4M8 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4M12 8v8" /> },
              { name: "Limpeza & Software", sub: "Reiniciando, Lento, etc", icon: <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /> },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-slate-50 rounded-2xl p-6 transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden flex flex-col items-center text-center">
                <div className="mb-4 text-blue-600 group-hover:text-white transition-colors">
                  <Icon path={item.icon} className="w-10 h-10" />
                </div>
                <h3 className="relative z-10 font-bold text-slate-800 text-lg group-hover:text-white mb-1 transition-colors">{item.name}</h3>
                <p className="relative z-10 text-xs text-slate-500 group-hover:text-blue-100 transition-colors">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMO FUNCIONA (Passos) ================= */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Seu aparelho novo em <span className="text-blue-600">4 passos</span></h2>
            <p className="text-slate-500 mt-4">Rápido, prático e confiável.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>
            {[
              { title: "Contato", desc: "Você preenche o formulário abaixo ou chama no WhatsApp.", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
              { title: "Delivery", desc: "Buscamos o aparelho no seu endereço.", icon: <path d="M14 16l4-4-4-4M5 8v8a2 2 0 0 0 2 2h7" /> },
              { title: "Diagnóstico", desc: "Avaliamos e você aprova o orçamento.", icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /> },
              { title: "Entrega", desc: "Devolvemos seu aparelho 100% pronto.", icon: <path d="M20 6L9 17l-5-5" /> },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon path={step.icon} className="w-8 h-8" />
                </div>
                <span className="absolute top-0 right-10 bg-slate-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">{idx + 1}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORMULÁRIO DE ORÇAMENTO ================= */}
      <section id="orcamento-form" className="py-20 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Inicie seu atendimento</h2>
            <p className="text-slate-500 mt-2">Preencha os dados e fale com um técnico agora mesmo.</p>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Seu Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Ex: João Silva"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                />
              </div>

              {/* Aparelho */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Aparelho / Modelo</label>
                <input
                  type="text"
                  name="aparelho"
                  required
                  placeholder="Ex: iPhone 11, Notebook Dell..."
                  value={formData.aparelho}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                />
              </div>
            </div>

            {/* Problema */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">O que está acontecendo?</label>
              <textarea
                name="problema"
                required
                placeholder="Ex: A tela quebrou, não carrega, precisa de limpeza, controle falhando..."
                rows="4"
                value={formData.problema}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white resize-none"
              ></textarea>
            </div>

            {/* Botão Enviar */}
            <button
              type="submit"
              className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg"
            >
              <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} />
              Solicitar Orçamento via WhatsApp
            </button>
            <p className="text-center text-xs text-slate-400">Ao clicar, você será redirecionado para o WhatsApp da SOLVPLACE.</p>
          </form>
        </div>
      </section>

      {/* ================= CALL TO ACTION (Slogan Final) ================= */}
      <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            SOLVPLACE — Confiança que resolve.<br />
            <span className="text-blue-400">Qualidade que permanece.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Não deixe seu equipamento parado. Recupere a performance hoje mesmo.
          </p>
        </div>
      </section>


      <WhatsAppButton />
    </div>
  );
};

export default Home;