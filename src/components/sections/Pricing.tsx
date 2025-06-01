import React from 'react';
import PricingCard from '../ui/PricingCard';

const Pricing: React.FC = () => {
  const startFeatures = [
    "Dashboard",
    "Data Room Juridico",
    "Relatório de Due Diligence / 2x por ano",
    "Assistente virtual para Duvidas (24/7)"
  ];

  const essentialFeatures = [
    "Dashboard",
    "Consultoria Jurídico / 15min por Mês",
    "Data Room Juridico",
    "Relatório de Due Diligence / 3x por ano",
    "Correção de Riscos do Relatório de Due Diligence / 3x por ano",
    "Assistente virtual para Duvidas (24/7)",
    "Analise de Pitch Deck / 1x por Mês"
  ];

  const masterFeatures = [
    "Dashboard",
    "Consultoria Jurídico / 30min por Mês",
    "Data Room Juridico",
    "Gestão de contratos / até 4",
    "Relatório de Due Diligence / 6x por ano",
    "Correção de Riscos do Relatório de Due Diligence / 6x por ano",
    "Assistente virtual para Duvidas (24/7)",
    "Analise de Pitch Deck / 1x por Mês",
    "Divulgação de Score para Investidores"
  ];

  return (
    <section
      id="pricing"
      className="bg-white z-10 flex w-full flex-col items-center mt-[264px] pb-[54px] px-20 max-md:mt-10 max-md:px-5"
    >
      <div className="w-full max-w-[1535px] flex flex-col items-center text-center">
        <h2 className="text-[70px] font-semibold text-[rgba(0,63,13,1)] max-md:text-[40px]">
          <span className="text-[rgba(48,158,79,1)]">Conheça Nossos</span> Planos!
        </h2>

        <div className="mt-[50px] w-full flex justify-center max-md:flex-col max-md:items-center gap-5">
          {/* Card Start */}
          <div className="w-[33%] max-md:w-full transition-all">
            <PricingCard
              type="start"
              title="Start"
              price="R$ 250"
              features={startFeatures}
              bgImage="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/86802ed29fbc546766da943a32d53fd5c13e9293?placeholderIfAbsent=true"
            />
          </div>

          {/* Card Master (central, maior destaque) */}
          <div className="w-[34%] scale-[1.05] z-20 max-md:w-full transition-all">
            <PricingCard
              type="master"
              title="Master"
              price="R$ 600"
              features={masterFeatures}
              bgColor="rgba(39,124,48,1)"
            />
          </div>

          {/* Card Essential */}
          <div className="w-[33%] max-md:w-full transition-all">
            <PricingCard
              type="essential"
              title="Essential"
              price="R$ 400"
              features={essentialFeatures}
              bgColor="rgba(70,183,102,1)"
            />
          </div>
        </div>

        {/* Botão Ver Mais */}
        <div className="mt-10">
          <button
            className="bg-[rgba(39,124,48,1)] text-white px-10 py-2 text-lg font-medium transition-colors hover:bg-[rgba(39,124,48,0.9)] max-md:w-full max-md:max-w-xs"
          >
            Ver Mais
          </button>
        </div>

        {/* Seção final */}
        <div className="bg-[rgba(39,124,48,1)] w-full mt-[148px] pt-[25px] pb-[47px] px-20 text-white flex flex-col items-center max-md:mt-10 max-md:px-5">
          <h3 className="text-5xl font-black max-md:text-[40px]">Somos para você!</h3>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/1422864c811b5853b5a2989ceaedf367453cf09c?placeholderIfAbsent=true"
            className="aspect-[200] w-[211px] object-contain mt-[18px]"
            alt="Divider"
          />
          <p className="text-[32px] font-normal tracking-[3.2px] mt-[49px] max-md:text-xl max-md:mt-10">
            Se você é uma startup em fase de desenvolvimento e expansão, que busca estruturar sua base jurídica com segurança e eficiência ou empreendedor que desejam evitar riscos legais desde os primeiros passos, somos a plataforma certa para você!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
