import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-brand-navy text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nome da Marca */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          ICMS<span className="text-brand-green">Trade</span>
        </Link>

        {/* Links de Navegação */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
          <Link to="/marketplace" className="hover:text-brand-green transition-colors">Oportunidades</Link>
          <Link to="/about" className="hover:text-brand-green transition-colors">Como Funciona</Link>
        </div>

        {/* Botões de Ação */}
        <div className="flex space-x-4">
          <Link to="/login" className="text-sm font-medium hover:text-brand-green py-2 px-3">
            Entrar
          </Link>
          <Link to="/register" className="bg-brand-green hover:bg-emerald-600 text-white text-sm font-bold py-2 px-4 rounded transition-colors">
            Abrir Conta
          </Link>
        </div>
      </div>
    </nav>
  );
}