import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#0078AA]">
            Matheus <span className="text-[#3AB4F2]"> &quot;Kilua&quot;</span> Soares
          </h1>
          <h1 className="py-2 text-[#9ba600]">Front-End Web Dev</h1>
          <p className="py-4 text-[#3AB4F2] sm:max-w-[70%] m-auto">
            Desenvolvedor full stack com foco no front end e apaixonado por HxH
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/mateeus-soarees/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn color="#3AB4F2" />
              </div>
            </a>
            <a
              href="https://github.com/killu4kun"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub color="#9ba600" />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail color="#3AB4F2" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
