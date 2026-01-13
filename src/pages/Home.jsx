import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-brand-light">


      <main className="flex-grow">
        {/* Hero Section - Área de destaque */}
        <section className="bg-corporate-gradient text-white py-20 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforme seus Créditos de ICMS em <span className="text-brand-green">Liquidez Imediata</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              A plataforma segura e eficiente para conectar empresas que desejam vender créditos acumulados a compradores em busca de benefícios fiscais.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-brand-green hover:bg-emerald-600 text-white px-8 py-3 rounded-md font-bold text-lg transition shadow-lg">
                Quero Vender Créditos
              </button>
              <button className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-3 rounded-md font-bold text-lg transition shadow-lg border border-transparent">
                Quero Comprar Créditos
              </button>
            </div>
          </div>
        </section>

        {/* Estatísticas / Confiança */}
        <section className="py-12 bg-white shadow-sm border-b border-gray-100">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-brand-blue mb-2">+R$ 500mi</p>
              <p className="text-brand-gray">Em créditos negociados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-blue mb-2">100%</p>
              <p className="text-brand-gray">Segurança Jurídica</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-blue mb-2">Brasil</p>
              <p className="text-brand-gray">Atuação Nacional</p>
            </div>
          </div>
        </section>

        {/* Cards de Benefícios */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-navy mb-12">Por que negociar conosco?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue font-bold text-xl">
                  $
                </div>
                <h3 className="text-xl font-bold mb-3">Melhor Cotação</h3>
                <p className="text-brand-gray leading-relaxed">
                  Conectamos você diretamente às melhores ofertas do mercado, garantindo o menor deságio na venda e o maior desconto na compra.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4 text-brand-green font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold mb-3">Compliance Fiscal</h3>
                <p className="text-brand-gray leading-relaxed">
                  Todas as operações passam por uma rigorosa análise de conformidade para garantir a homologação junto à SEFAZ.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600 font-bold text-xl">
                  ⚡
                </div>
                <h3 className="text-xl font-bold mb-3">Agilidade</h3>
                <p className="text-brand-gray leading-relaxed">
                  Processos desburocratizados e plataforma digital para acelerar a transferência e o recebimento dos valores.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}