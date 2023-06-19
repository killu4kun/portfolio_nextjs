import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 text-justify'>
          <p className='uppercase text-xl tracking-widest text-[#0078AA]'>
            Sobre
          </p>
          <p className='py-2 text-[#3AB4F2]'>/ / Just do it</p>
          <p className='py-2 text-[#0078AA]'>
            Nasci e floresci em Uberaba, cidade encantadora de Minas Gerais,
            conhecida como a terra do zebu, onde tradições se entrelaçam com
            modernidade. Originário de uma família humilde, mas resiliente,
            testemunhei a luta incansável dos meus entes queridos. Durante a
            minha infância, fui acolhido e educado com amor e dedicação pelos
            meus avós, enquanto minha mãe, incansável, trabalhava durante o dia
            e perseguia seu sonho de se formar em Serviço Social durante as
            noites estreladas. A educação que recebi pode ter sido básica, mas
            foi enriquecedora e de qualidade, proporcionada pelas escolas
            governamentais que me acolheram ao longo da minha jornada.
          </p>
          <p className='py-2 text-[#0078AA]'>
            Após completar o ensino médio, trilhei caminhos acadêmicos
            fascinantes. Inicialmente, adentrei o mundo da Matemática,
            explorando a magia dos números, dos cálculos e das descobertas que
            desafiam a mente. Em seguida, passei a desbravar a Engenharia
            Ambiental, fascinado pela perspectiva de preservar a natureza e
            criar soluções sustentáveis para as questões do nosso planeta. No
            entanto, foi na Engenharia da Computação, na renomada universidade
            federal da minha cidade, que minha verdadeira vocação se revelou.
            Embora naquele momento eu ainda não estivesse pronto mentalmente
            para enfrentar os desafios da graduação, foi nessa época de
            autodescoberta que me apaixonei profundamente pela arte de
            programar.
          </p>
          <p className='py-2 text-[#0078AA]'>
            Entretanto, a vida sempre guarda surpresas e, ao abandonar a
            faculdade, encontrei um amigo de infância que havia traçado seu
            caminho em outro estado. Ele compartilhou comigo a existência de um
            curso de programação full-stack, chamado Trybe, que oferecia uma
            oportunidade única sem nenhum custo financeiro. Foi nesse momento
            crucial que tomei uma decisão que redefiniu completamente o rumo da
            minha vida, abrindo as portas para um mundo vasto e empolgante: o
            universo da programação. Com muito esforço e dedicação, concluí
            minha formação na Trybe, conquistando habilidades versáteis tanto no
            front-end quanto no back-end. No entanto, ao longo dessa jornada,
            descobri uma paixão ardente pela criação de interfaces encantadoras
            e interativas no front-end, tornando-me um entusiasta apaixonado
            dessa vertente. Hoje, almejo ansiosamente a oportunidade de aplicar
            meu conhecimento, agregar valor e aprimorar minhas habilidades como
            profissional. Estou em busca de desafios empolgantes que me permitam
            deixar minha marca no campo da programação, trazendo inovação e
            excelência em cada projeto que abraço. Por favor, sinta-se à vontade
            para embelezar ainda mais este texto, caso julgue necessário.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-[#9ba600] underline cursor-pointer'>
              Confira alguns de meus projetos
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-[#0078AA] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
