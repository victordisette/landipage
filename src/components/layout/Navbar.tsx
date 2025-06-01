import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="w-full px-5 md:pl-[66px]">
          <div className="flex flex-wrap items-center justify-between w-full max-w-[1799px] mx-auto gap-5">
            {/* Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/e563c3b85325a3f95d745b7fbca0139cd1a779a9?placeholderIfAbsent=true"
              className="w-[180px] md:w-[234px] object-contain"
              alt="Flagr Logo"
            />

            {/* Menu e Botões */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-[44px] w-full md:w-auto">
              {/* Navegação */}
              <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-[35px] text-lg md:text-2xl text-[rgba(0,63,13,1)] font-normal py-4 md:py-0">
                <a href="#home" className="hover:text-[rgba(39,124,48,1)] transition-colors">Início</a>
                <a href="#about" className="hover:text-[rgba(39,124,48,1)] transition-colors">Sobre Nós</a>
                <a href="#benefits" className="hover:text-[rgba(39,124,48,1)] transition-colors">Benefícios</a>
                <a href="#how-it-works" className="hover:text-[rgba(39,124,48,1)] transition-colors">Como Funciona</a>
                <a href="#pricing" className="hover:text-[rgba(39,124,48,1)] transition-colors">Planos</a>
                <a href="#contact" className="hover:text-[rgba(39,124,48,1)] transition-colors">Contato</a>
              </nav>

              {/* Botões */}
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-base md:text-xl font-medium mt-4 md:mt-0">
                <button className="px-6 py-2 border border-[rgba(39,124,48,1)] text-[rgba(0,63,13,1)] hover:bg-[rgba(39,124,48,0.1)] transition-colors">
                  Entrar
                </button>
                <button className="px-6 py-2 bg-[rgba(39,124,48,1)] text-white hover:bg-[rgba(39,124,48,0.9)] transition-colors">
                  Comece agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Espaço para o conteúdo não ficar escondido atrás da navbar */}
      <div style={{ height: '100px' }} />
    </>
  );
};

export default Navbar;
