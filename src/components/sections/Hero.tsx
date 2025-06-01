import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="px-4 max-w-full mt-2 max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-w-[1200px] mx-auto">
        {/* Texto */}
        <div className="w-[45%] max-md:w-full max-md:ml-0 flex flex-col justify-center">
          <h1 className="text-[rgba(39,124,48,1)] font-semibold text-[70px] max-md:text-[40px] leading-tight">
            Flagr, automatizando sua StartUp
          </h1>
          <p className="text-[rgba(0,63,13,1)] text-3xl font-normal mt-10 max-md:mt-6 max-md:text-xl max-w-[607px] max-md:max-w-full leading-relaxed">
            Transformamos a Due Diligence da sua startup em um processo rápido, preciso e seguro. Reduza riscos e tome decisões com mais confiança.
          </p>
          <button
            className="bg-[rgba(39,124,48,1)] shadow-md text-white text-xl mt-10 px-6 py-3 rounded hover:bg-[rgba(39,124,48,0.9)] transition-colors max-md:w-full max-md:px-5"
            type="button"
          >
            Agende uma demonstração gratuita!
          </button>
        </div>

        {/* Imagem */}
        <div className="w-[55%] max-md:w-full max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/0d7eb72d72ef4880de187af028be88d3403c3f79?placeholderIfAbsent=true"
            alt="Flagr Platform"
            className="w-full h-auto object-contain rounded-none"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
