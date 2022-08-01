import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#0078AA]">
            About
          </p>
          <p className="py-2 text-[#3AB4F2]">/ / Just do it</p>
          <p className="py-2 text-[#0078AA]">
            Nascido e crescido em Uberaba,Minas Gerais,a terra do zebu.Venho de
            uma familia humilde mas batalhadora,durante minha infância fui
            criado pelos meus avós pois minha mae trabalhava durante o dia e
            cursava Serviço Social a noite pois ela tinha um sonho.Tive uma
            educação básica durante toda minha vida,estudei em escolas do
            governo durante minha vida toda,era básica mas de qualidade.Logo
            após me formar no ensino médio,cheguei a cursar Matematica,Eng
            Ambiental e finalmente Eng. Computação pela federal de minha cidade,
            mas ainda não tinha me desenvolvido mentalmente para uma faculdade
            mas ali descobri minha vocação que era ser programador.
          </p>
          <p className="py-2 text-[#0078AA]">
            Logo após o abandono da faculdade,me deparei com um amigo de
            infancia que já morava em outro estado mas me contava de um curso de
            programação full-stack sem precisar pagar nada,a Trybe,foi ali que
            tomei uma escolha que mudou minha vida e me abriu portar para esse
            mundo imenso que é a programação. Atualmente me formei pela trybe ,
            consigo atuar tanto no front como no back, mas adquiri uma paixão
            pelo front.Hoje busco oportunidades para agregar valor e melhorar minhas habilidades.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[#F2DF3A] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-[#0078AA] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
