// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Certifique-se de que o arquivo solv.png está em src/assets/
import SolvLogo from '../assets/solv.png';

const Navbar = () => {

  // Função para compartilhar o site no WhatsApp
  const handleShare = () => {
    const text = "Oi! Conheça a SOLVPLACE, assistência técnica que busca e entrega em casa. Recomendo! 🚀";
    const url = window.location.href;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`, '_blank');
  };

  return (
    // Fundo SÓLIDO Navy Blue (#001F3F) igual a Hero Section
    // Mantive a borda sutil em Ciano (#00BFFF/20) para dividir suavemente quando rolar a página
    <nav className="bg-[#001F3F] shadow-lg sticky top-0 z-50 border-b border-[#00BFFF]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* LADO ESQUERDO: LOGO */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              {/* LOGO IMAGEM */}
              <img
                src={SolvLogo}
                alt="Solvplace Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* LADO DIREITO: LINKS E BOTÕES */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">






          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;