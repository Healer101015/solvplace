import React from "react";
import Icon from "./Icon";

const Footer = () => {
  const handleFooterShare = async () => {
    const shareData = {
      title: "SOLVPLACE",
      text: "Assistência Técnica de Confiança.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Erro ao compartilhar", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copiado!");
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1D37]/95 backdrop-blur-md border-t border-[#00BFFF]/20 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] py-3 px-4">

      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">

        {/* CONTATO */}
        <div className="flex items-center gap-3 text-slate-300">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[#00BFFF] border border-slate-700">
            <Icon
              className="w-5 h-5"
              path={
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              }
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 font-bold uppercase">
              Suporte
            </span>
            <span className="text-sm font-bold text-white">
              11 95292-4711
            </span>
          </div>
        </div>

        {/* AÇÕES */}
        <div className="flex items-center gap-3">

          {/* SHARE */}
          <button
            onClick={handleFooterShare}
            className="w-12 h-12 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hover:bg-[#00BFFF] hover:text-[#001F3F] transition-all active:scale-95 flex items-center justify-center"
            title="Compartilhar"
          >
            <Icon
              className="w-5 h-5"
              path={
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
              }
            />
          </button>

          {/* WHATSAPP — CORRIGIDO */}
          <a
            href="https://wa.me/5511952924711"
            target="_blank"
            rel="noreferrer"
            title="Chamar no WhatsApp"
            className="w-12 h-12 flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full transition-all transform hover:scale-110 active:scale-95 border border-[#128C7E]"
          >
            <Icon
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current"
              path={
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.05 20.18C10.57 20.18 9.12 19.8 7.85 19.05L7.54 18.87L4.43 19.68L5.26 16.64L5.06 16.33C4.24 15.02 3.8 13.49 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.59 3.67 20.29 7.37 20.29 11.91C20.29 16.45 16.59 20.18 12.05 20.18ZM16.61 14.46C16.36 14.34 15.13 13.73 14.9 13.65C14.67 13.56 14.51 13.52 14.34 13.77C14.17 14.02 13.7 14.57 13.55 14.74C13.41 14.9 13.26 14.92 13.01 14.8C12.76 14.67 11.96 14.41 11.01 13.56C10.27 12.91 9.77 12.1 9.52 11.69C9.27 11.27 9.49 11.04 9.62 10.92C9.73 10.81 9.87 10.63 10 10.48C10.12 10.33 10.17 10.23 10.25 10.06C10.33 9.89 10.29 9.75 10.23 9.62C10.17 9.5 9.7 8.35 9.5 7.89C9.31 7.43 9.11 7.5 8.96 7.5C8.82 7.5 8.65 7.5 8.49 7.5C8.32 7.5 8.05 7.56 7.82 7.81C7.59 8.06 6.95 8.67 6.95 9.9C6.95 11.13 7.85 12.31 7.98 12.48C8.11 12.65 9.77 15.22 12.31 16.32C14.12 17.1 14.85 17.02 15.65 16.9C16.54 16.77 17.75 16.12 18 15.41C18.25 14.7 18.25 14.08 18.17 13.96C18.09 13.83 17.86 13.77 16.61 14.46Z" />
              }
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;