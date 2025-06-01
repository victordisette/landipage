import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="bg-white flex flex-col items-center w-full py-[108px] max-md:py-[100px] px-5">
      {/* Título */}
      <h2 className="text-[rgba(39,124,48,1)] text-[70px] font-semibold text-center max-md:text-[40px] mb-16">
        <span style={{ color: 'rgba(39,124,48,1)' }}>Conheça Nosso</span> Time!
      </h2>

      {/* Container das fotos + informações */}
      <div className="flex flex-wrap justify-center gap-10 max-w-[1114px] w-full">
        {/* Membro 1 */}
        <div className="flex flex-col items-center w-[225px] max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/21b9d402beaa3144e5a420251f1845fd23adccd6?placeholderIfAbsent=true"
            alt="Renata Oliveira"
            className="w-full rounded-[200px] object-contain aspect-[0.87]"
          />
          <div className="bg-[rgba(242,247,243,1)] border-2 border-[rgba(39,124,48,1)] flex flex-col items-center text-center text-[32px] text-[rgba(39,124,48,1)] px-6 py-8 mt-6 rounded-md">
            <h3 className="font-black">Renata Oliveira</h3>
            <p className="text-4xl font-light mt-2.5">CEO</p>
            <p className="mt-6 font-normal text-base">
              Fundadora e CEO da Flagr e Especialista em Direito Empresaria/Societário, com foco em startups.
            </p>
          </div>
        </div>

        {/* Membro 2 */}
        <div className="flex flex-col items-center w-[225px] max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/294290e65fab44dbb4b934ad88d9fa28/0ae8363914c0a58981cd21b964fc24337e16c909?placeholderIfAbsent=true"
            alt="Marcela Ventura"
            className="w-full rounded-[200px] object-contain aspect-[0.87]"
          />
          <div className="bg-[rgba(242,247,243,1)] border-2 border-[rgba(39,124,48,1)] flex flex-col items-center text-center text-[32px] text-[rgba(39,124,48,1)] px-6 py-8 mt-6 rounded-md">
            <h3 className="font-black">Marcela Ventura</h3>
            <p className="text-4xl font-light mt-2.5">COO</p>
            <p className="mt-6 font-normal text-base">
              Fundadora e COO da Flagr e <br />
              Especialista em Direito Tributário, com foco em startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
