import React from 'react';
import Icon from './Icon';

const Footer = () => {
  // Lógica de Compartilhamento
  const handleFooterShare = async () => {
    const shareData = {
      title: 'SOLVPLACE',
      text: 'Assistência Técnica de Confiança.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Erro ao compartilhar', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado!");
    }
  };

  return (
    // 'fixed bottom-0' faz o rodapé ficar colado lá embaixo
    // 'z-50' garante que fique na frente do conteúdo
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1D37]/95 backdrop-blur-md border-t border-[#00BFFF]/20 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] py-3 px-4 transition-all">

      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">

        {/* 1. INFORMAÇÃO DE CONTATO (Telefone) */}
        <div className="flex items-center gap-2 text-slate-300">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[#00BFFF]">
            <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-tight">Contato</span>
            <span className="text-sm font-bold text-white leading-tight">11 95292-4711</span>
          </div>
        </div>

        {/* GRUPO DA DIREITA: COMPARTILHAR E WHATSAPP */}
        <div className="flex items-center gap-3">

          {/* 2. BOTÃO COMPARTILHAR */}
          <button
            onClick={handleFooterShare}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-[#00BFFF] hover:text-[#001F3F] transition active:scale-95"
            title="Compartilhar"
          >
            <Icon path={<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />} className="w-5 h-5" />
          </button>

          {/* 3. BOTÃO WHATSAPP (Destacado) */}
          <a
            href="https://wa.me/5511952924711"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl font-bold shadow-lg shadow-green-900/20 transition transform active:scale-95"
          >
            <Icon path={<path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.078 0c-6.525 0-11.854 5.302-11.886 11.826a11.724 11.724 0 0 0 1.96 6.307l-2.152 7.863 8.046-2.096a11.785 11.785 0 0 0 6.035 1.65h.005c6.527 0 11.853-5.304 11.886-11.828a11.82 11.82 0 0 0-3.48-8.418z" />} className="w-5 h-5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;