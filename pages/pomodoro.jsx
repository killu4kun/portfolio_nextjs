import Image from "next/image";
import React from "react";
import pomodoroImg from "../public/assets/pomodoro.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const pomodoro = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="contain"
          src={pomodoroImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Pomodoro App</h2>
          <h3>React Native</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-[#0078AA]">Project</p>
          <h2 className="text-[#F2DF3A]">Overview</h2>
          <p className="text-[#3AB4F2]">
            I created this app to get knowledge working in React Native and
            learning the basics.This application was build using React Native.
            It functions as a pomodoro timer that you can select the time you
            want to focus on determinate task
          </p>
          <a
            href="https://github.com/killu4kun/Pomodoro-React-Native"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default pomodoro;
