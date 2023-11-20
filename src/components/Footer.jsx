import React from "react";
import team from "../assets/team.svg";
import yt from "../assets/youtube.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#02243F]">
        <div className="flex justify-center items-center gap-2 pt-4">
          <hr className="border-1 border-white w-[30%] max-[610px]:w-[20%] max-[410px]:w-[10%]" />
          <p className="text-white font-semibold text-4xl max-[730px]:text-3xl">MEET THE TEAM</p>
          <hr className="border-1 border-white w-[30%] max-[610px]:w-[20%] max-[410px]:w-[10%]" />
        </div>
        <div className="flex justify-center items-center">
          <img src={team} alt="team" className="h-[50%]" />
        </div>
      </div>
      <div className="bg-gradient-to-r h-24 from-[#09324f] to-[#82D3F5] flex justify-center items-center gap-x-8">
        <p className="text-white font-semibold text-2xl max-[510px]:text-xl max-[435px]:text-sm"> CONNECT WITH US!</p>
        <img src={yt} alt="youtube" className="h-10 max-[510px]:h-8 max-[435px]:h-5" />
        <img src={linkedin} alt="linkedin" className="h-12 max-[510px]:h-10 max-[435px]:h-6" />
      </div>
      <div className="bg-[#02243F]">
        <p className="font-semibold text-white text-center py-4 max-[450px]:text-xs"> Copyright © 2023 Top Talent Bridge | All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
