import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna 1 - Sobre */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">ICMS<span className="text-brand-green">Trade</span></h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Especialistas em intermediação de ativos fiscais. Facilitamos a compra e venda de créditos de ICMS com segurança, transparência e agilidade para sua empresa.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Início</a></li>
            <li><a href="#" className="hover:text-white transition">Mercado de Créditos</a></li>
            <li><a href="#" className="hover:text-white transition">Quem Somos</a></li>
            <li><a href="#" className="hover:text-white transition">Fale Conosco</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li>contato@icmstrade.com.br</li>
            <li>+55 (11) 99999-9999</li>
            <li>Av. Paulista, 1000 - SP</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} ICMSTrade Soluções Fiscais. Todos os direitos reservados.
      </div>
    </footer>
  );
}