import React from 'react';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div className="font-sans text-slate-700 bg-gray-50 min-h-screen flex flex-col">

      {/* ================= HERO SECTION ================= */}
      <section className="relative text-white py-24 lg:py-32 px-4 overflow-hidden">
        {/* Background Image com Overlay Escuro */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1597424214711-2d7c0f135e02?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Background Tech"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 opacity-95"></div>
          {/* Efeito de grade decorativa */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Texto Principal */}
          <div className="flex-1 text-center md:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Assistência Técnica Delivery
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
              Seu eletrônico novo de novo,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                sem você sair de casa.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mx-auto md:mx-0">
              A <strong>SOLVPLACE</strong> resolve falhas em celulares, notebooks e games com rapidez, honestidade e frete grátis*. A confiança que você precisa com a comodidade que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://wa.me/5511952924711"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-green-500/30 transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.68-1.761-1.256-2.007-.248-.106-1.124-.13-1.666.071-.433.16-1.558 1.488-1.558 2.262 0 .618 2.502 4.144 5.356 4.484.58.069 1.157.067 1.838-.112.432-.113 1.144-.45 1.751-1.258.113-.151.108-.433.029-.582-.074-.14-.523-1.63-.642-1.914-.118-.284-.298-.431-.569-.431-.222 0-.441.01-.617.02-.182.01-.424.088-.666.371-.242.282-1.003 1.014-1.003 2.476 0 1.463 1.063 2.876 1.211 3.075.149.199 2.095 3.2 5.074 4.485.708.306 1.261.489 1.693.625.711.227 1.359.195 1.87.118.571-.085 1.757-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                <span>Orçamento Gratuito</span>
              </a>
              <p className="hidden sm:flex items-center text-xs text-blue-200 gap-1">
                <span className="bg-blue-500 rounded-full p-1">✓</span> Resposta Rápida
              </p>
            </div>
          </div>

          {/* Cards Flutuantes (Visual Tech) */}
          <div className="flex-1 hidden md:flex justify-center relative">
            {/* Círculo decorativo de fundo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center transform translate-y-8 animate-float-slow">
                <span className="text-4xl mb-2">🍎</span>
                <span className="text-white font-bold">Apple Expert</span>
                <span className="text-xs text-blue-200">iPhone & MacBook</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center animate-float-delayed">
                <span className="text-4xl mb-2">💻</span>
                <span className="text-white font-bold">Notebooks</span>
                <span className="text-xs text-blue-200">Hardware & Software</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center transform translate-y-8 animate-float-slow">
                <span className="text-4xl mb-2">🎮</span>
                <span className="text-white font-bold">Consoles</span>
                <span className="text-xs text-blue-200">Manutenção & Limpeza</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl flex flex-col items-center animate-float-delayed">
                <span className="text-4xl mb-2">⚡</span>
                <span className="text-white font-bold">Rápido</span>
                <span className="text-xs text-blue-200">Diagnóstico Ágil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES (Checklist) ================= */}
      <section className="bg-white -mt-10 relative z-20 mx-4 md:mx-auto max-w-5xl rounded-xl shadow-xl border border-gray-100 p-8 flex flex-col md:flex-row justify-around items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full text-blue-600">🛡️</div>
          <div>
            <h3 className="font-bold text-slate-800">Garantia Total</h3>
            <p className="text-sm text-slate-500">3 meses em todos serviços</p>
          </div>
        </div>
        <div className="w-full md:w-px h-px md:h-12 bg-gray-200"></div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full text-blue-600">🚚</div>
          <div>
            <h3 className="font-bold text-slate-800">Delivery Grátis</h3>
            <p className="text-sm text-slate-500">Buscamos e levamos*</p>
          </div>
        </div>
        <div className="w-full md:w-px h-px md:h-12 bg-gray-200"></div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full text-blue-600">💳</div>
          <div>
            <h3 className="font-bold text-slate-800">Pagamento Flexível</h3>
            <p className="text-sm text-slate-500">Cartão, Pix e Dinheiro</p>
          </div>
        </div>
      </section>

      {/* ================= COMO FUNCIONA (Passo a Passo) ================= */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">Como funciona o <span className="text-blue-600">Delivery</span>?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Linha conectora (visível apenas desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200 -z-0"></div>

            {[
              { step: "1", title: "Você chama", desc: "Entre em contato pelo WhatsApp e conte o problema.", icon: "💬" },
              { step: "2", title: "A gente busca", desc: "Vamos até seu endereço retirar o aparelho.", icon: "🛵" },
              { step: "3", title: "Consertamos", desc: "Diagnóstico e reparo aprovado por você.", icon: "🔧" },
              { step: "4", title: "Devolvemos", desc: "Seu aparelho novo de novo em suas mãos.", icon: "✨" },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl text-2xl font-bold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20 transform -rotate-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                  {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVIÇOS ================= */}
      <section id="servicos" className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Elemento decorativo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Nossas Especialidades</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Tudo o que consertamos</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: "📱", name: "Celulares", detail: "Telas, Baterias & Software" },
              { icon: "📟", name: "Tablets", detail: "iPad & Samsung Tab" },
              { icon: "💻", name: "Notebooks", detail: "Upgrade SSD & Reparos" },
              { icon: "🍏", name: "MacBooks", detail: "Especialista Apple" },
              { icon: "🎮", name: "Videogames", detail: "Playstation & Xbox" },
            ].map((item, index) => (
              <div key={index} className="group p-6 bg-white rounded-2xl hover:bg-blue-600 transition-all duration-300 border border-gray-100 hover:border-transparent hover:shadow-xl hover:shadow-blue-600/20 text-center cursor-default">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{item.icon}</div>
                <h3 className="font-bold text-slate-800 group-hover:text-white text-lg">{item.name}</h3>
                <p className="text-xs text-slate-400 mt-2 group-hover:text-blue-100">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROBLEMAS COMUNS (CTA) ================= */}
      <section className="py-20 px-4 bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Seu aparelho está pedindo socorro?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            Tela quebrada? Bateria viciada? Não liga? <br className="hidden md:block" />
            Não deixe para depois. O conserto pode ser mais simples e barato do que comprar um novo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500 transition">
              <div className="text-blue-400 font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-2xl">🔍</span> Diagnóstico Honesto
              </div>
              <p className="text-slate-400 text-sm">Sem invenção de problemas. Explicamos tudo de forma clara antes de começar.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500 transition">
              <div className="text-blue-400 font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-2xl">👨‍🔧</span> Peças de Qualidade
              </div>
              <p className="text-slate-400 text-sm">Usamos componentes premium para garantir durabilidade e performance.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500 transition">
              <div className="text-blue-400 font-bold text-lg mb-2 flex items-center gap-2">
                <span className="text-2xl">🚀</span> Rapidez
              </div>
              <p className="text-slate-400 text-sm">Sabemos que você não pode ficar desconectado. Agilidade é nossa meta.</p>
            </div>
          </div>

          <a
            href="https://wa.me/5511952924711"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:scale-105"
          >
            Quero um orçamento agora
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 border-t border-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Marca */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">SOLVPLACE</h2>
            <p className="text-sm leading-relaxed mb-6">
              Assistência técnica especializada com foco na comodidade do cliente.
              Confiança que resolve. Qualidade que permanece.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {/* Placeholders para redes sociais */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">📸</div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">📘</div>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
                <span>📞</span> 11 95292-4711 (SP)
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
                <span>📞</span> 41 99762-4067 (PR)
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition">
                <span>📧</span> contato@solvplace.com.br
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-green-400">
                <span>●</span> Atendendo agora
              </li>
            </ul>
          </div>

          {/* Links Rápidos / Info */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Informações</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Garantia</a></li>
              <li className="pt-4 text-xs text-slate-600">
                *Frete grátis sujeito a análise de região e valor do serviço.
              </li>
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