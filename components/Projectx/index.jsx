import React from "react";
import houseImg from "../../public/assets/house.png";
import pomodoroImg from "../../public/assets/pomodoro.png";
import kilua from "../../public/assets/9kkd.gif";
import ProjectItem from "../ProjectItem";
import qrCodImg from "../../public/assets/qr-code.png"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projetos
        </p>
        <h2 className="py-4">Projetos que já construi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="House Marketplace"
            backgroundImg={houseImg}
            projectUrl="/houseMarketplace"
            tech="React JS"
          />
          <ProjectItem
            title="Pomodoro App"
            backgroundImg={pomodoroImg}
            projectUrl="/pomodoro"
            tech="React Native"
          />
          <ProjectItem
            title="QR CODE GENERATOR"
            backgroundImg={qrCodImg}
            projectUrl="/qrCode"
            tech="React"
          />
          <ProjectItem
            title="TO BE MADE"
            backgroundImg={kilua}
            projectUrl="/kilua"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
