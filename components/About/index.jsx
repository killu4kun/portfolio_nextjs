import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#F806CC]">
            About
          </p>
          <p className="py-2 text-[#570A57]">/ / Just do it</p>
          <p className="py-2 text-[#F806CC]">
            Fusce ligula urna, ultrices feugiat venenatis lacinia, elementum vel
            eros. Nunc laoreet enim risus, quis laoreet velit pharetra eu.
            Curabitur sollicitudin, elit eget blandit venenatis, purus nibh
            vulputate lectus, id interdum magna est ut lacus. Aliquam maximus
            justo non ultrices tempor. Vivamus maximus non mi ut vehicula.
            Pellentesque mollis in justo vitae hendrerit. Praesent vel interdum
            nibh. Aliquam viverra tristique bibendum. Donec mollis nibh mauris,
            vel laoreet felis ultrices venenatis. Praesent ac metus et mi
            lacinia cursus vel sed sem. Duis dignissim vitae purus eget tempus.
            Duis id orci consectetur dui tristique rutrum.
          </p>
          <p className="py-2 text-[#A91079]">
            Sed ac purus et libero egestas vehicula id in leo. Curabitur in
            laoreet tortor, in dignissim justo. Quisque tempus justo eu semper
            mollis. Duis accumsan a magna sit amet blandit. Aenean accumsan
            dapibus dolor at dictum. Phasellus ornare eu dui quis convallis. Nam
            feugiat enim ex, sit amet tincidunt orci molestie vitae. Vivamus
            euismod purus vel nisl gravida dapibus a vitae mi. Donec posuere
            nisi lorem. Praesent elementum, risus in semper hendrerit, purus
            nisl placerat diam, a vestibulum tortor est vel massa. Aliquam a
            tellus sit amet leo consequat mattis in vitae enim. Vestibulum
            vulputate lacinia tempus.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-[#F806CC] underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-[#570A57] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
