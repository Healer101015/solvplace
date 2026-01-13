import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

// Componente auxiliar para ícones (SVG)
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {path}
  </svg>
);

const Home = () => {
  return (
    <div className="font-sans text-slate-600 bg-[#F8FAFC] min-h-screen flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <section className="relative text-white py-24 lg:py-32 px-4 overflow-hidden bg-slate-900">

        {/* === Background Animado (O Efeito Novo está Aqui) === */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e3a8a] opacity-90"></div>

          {/* Blob Azul Superior (Acendendo e Apagando rápido - 4s) */}
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/40 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 animate-pulse"
            style={{ animationDuration: '4s' }}
          ></div>

          {/* Blob Ciano Inferior (Acendendo e Apagando lento - 7s) */}
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[140px] translate-x-1/2 translate-y-1/2 animate-pulse"
            style={{ animationDuration: '7s' }}
          ></div>

          {/* Textura para dar acabamento */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">

          {/* Texto Principal */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Assistência Técnica Delivery
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Tecnologia parada <br /> é dinheiro perdido.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
                Nós resolvemos.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              A <strong>SOLVPLACE</strong> busca, conserta e devolve seu eletrônico. Sem trânsito, sem filas e com garantia de quem entende do assunto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a
                href="https://wa.me/5511952924711"
                className="group bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg border border-blue-500/50"
              >
                <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} />
                <span>Orçamento via WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs">👤</div>
                  ))}
                </div>
                <p>+1000 clientes <br /> atendidos</p>
              </div>
            </div>
          </div>

          {/* Visual Tech Abstrato (Cards Flutuantes) */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative z-10 grid grid-cols-2 gap-4 lg:gap-6">
              {[
                { title: "Apple Expert", sub: "Especialistas em iPhone e Mac", icon: <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z M10 2c1 .5 2 2 2 5" />, color: "text-white" },
                { title: "Notebooks", sub: "Troca de Tela, SSD e Bateria", icon: <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />, color: "text-blue-300" },
                { title: "Consoles", sub: "Limpeza e Reparo de Placa", icon: <path d="M6 12h2v3a3 3 0 0 0 6 0v-3h2M6 12a6 6 0 0 1 12 0M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />, color: "text-purple-300" },
                { title: "Garantia", sub: "Segurança total no serviço", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, color: "text-green-300" },
              ].map((card, idx) => (
                <div key={idx} className={`bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col justify-between h-40 transform transition hover:scale-105 hover:bg-white/10 group ${idx % 2 !== 0 ? 'translate-y-8' : ''}`}>
                  <div className={`p-3 bg-gradient-to-br from-white/10 to-transparent w-fit rounded-lg ${card.color}`}>
                    <Icon path={card.icon} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">{card.title}</h3>
                    <p className="text-slate-400 text-xs mt-1 leading-tight">{card.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES BAR ================= */}
      <section className="relative z-20 px-4 -mt-10 mb-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {[
            {
              title: "Garantia de 90 Dias",
              desc: "Qualidade assegurada em peças e mão de obra.",
              icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            },
            {
              title: "Delivery Seguro",
              desc: "Logística própria para retirada e entrega.",
              icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            },
            {
              title: "Orçamento Honesto",
              desc: "Sem taxas surpresas. Você aprova antes.",
              icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            }
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-4 flex-1">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shadow-sm">
                <Icon path={feat.icon} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">{feat.title}</h3>
                <p className="text-slate-500 text-sm mt-1">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMO FUNCIONA ================= */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Seu aparelho novo em <span className="text-blue-600">4 passos</span></h2>
            <p className="text-slate-500 mt-4">Simples, rápido e sem dor de cabeça.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Linha tracejada conectora */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>

            {[
              { title: "Contato", desc: "Você nos chama no WhatsApp e descreve o problema.", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
              { title: "Busca", desc: "Retiramos o aparelho no conforto da sua casa.", icon: <path d="M14 16l4-4-4-4M5 8v8a2 2 0 0 0 2 2h7" /> },
              { title: "Reparo", desc: "Técnicos certificados realizam o serviço.", icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /> },
              { title: "Entrega", desc: "Devolvemos seu aparelho pronto para uso.", icon: <path d="M20 6L9 17l-5-5" /> },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon path={step.icon} className="w-8 h-8" />
                </div>
                <span className="absolute top-0 right-10 bg-slate-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                  {idx + 1}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVIÇOS (Icons High End) ================= */}
      <section id="servicos" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">O que consertamos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Nossas Especialidades</h2>
            </div>
            <a href="https://wa.me/5511952924711" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
              Ver lista completa <span className="text-lg">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Celulares", sub: "Troca de vidro e bateria", icon: <path d="M12 18h.01M5 17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5z" /> },
              { name: "Tablets", sub: "Sistemas e Hardware", icon: <path d="M12 18h.01M4 6h16M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" /> },
              { name: "Notebooks", sub: "Lentidão e formatação", icon: <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" /> },
              { name: "Apple", sub: "Especialista Certificado", icon: <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z M10 2c1 .5 2 2 2 5" /> },
              { name: "Games", sub: "Manutenção Preventiva", icon: <path d="M6 12h2v3a3 3 0 0 0 6 0v-3h2M6 12a6 6 0 0 1 12 0M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /> },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl hover:-translate-y-2 border border-slate-100 overflow-hidden">
                {/* Círculo decorativo no hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>

                <div className="relative z-10 text-slate-400 group-hover:text-white mb-4 transition-colors">
                  <Icon path={item.icon} className="w-10 h-10" />
                </div>
                <h3 className="relative z-10 font-bold text-slate-800 text-xl group-hover:text-white mb-1 transition-colors">{item.name}</h3>
                <p className="relative z-10 text-xs text-slate-500 group-hover:text-blue-100 transition-colors">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION (Footer Pre) ================= */}
      <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        {/* Grid de fundo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Não deixe para depois.<br />
            Conserte hoje.
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Economize até <strong>60%</strong> consertando seu aparelho ao invés de comprar um novo. Diagnóstico rápido e transparente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511952924711"
              className="bg-green-500 hover:bg-green-400 text-white font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} className="w-5 h-5" />
              Falar com Técnico
            </a>
            <a
              href="#servicos"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-full backdrop-blur-sm border border-white/10 transition"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4 border-t border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-sm">

          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tighter">SOLVPLACE</h2>
            <p className="leading-relaxed mb-6">
              Sua parceira de confiança para assistência técnica delivery. Rapidez, honestidade e qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                <Icon path={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />} className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition">
                <Icon path={<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M16 2H8a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />} className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Troca de Tela</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Troca de Bateria</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Formatação</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Limpeza de Console</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} className="w-4 h-4" />
                11 95292-4711 (SP)
              </li>
              <li className="flex items-center gap-2">
                <Icon path={<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />} className="w-4 h-4" />
                41 99239-0423 (PR)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Legal</h3>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
              <li className="pt-2">*Frete grátis sujeito a raio de distância e valor mínimo. Consulte.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Solvplace Assistência Técnica. Todos os direitos reservados.
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Home;