import React from "react";
import Logo from "../assets/logo.svg";

const Topbar = () => {
  return (
    <div>
      <div className="bg-[#02243F] p-4 h-16 flex items-center justify-start max-[700px]:hidden">
        <img src={Logo} alt="logo" className="w-[113px] h-[68px] p-3" />
      </div>
      <div className="bg-gradient-to-r min-[585px]:h-80 from-[#09324f] to-[#82D3F5] flex justify-center items-center flex-col ">
        <p className="text-[#02243F] font-extrabold text-5xl max-[590px]:pt-16">
          ACCELERATE <span className="text-white">YOUR </span>TECH CAREER{" "}
          <span className="text-white">IN CANADA!</span>
        </p>
        <p className="font-medium text-white text-4xl mt-8 max-[590px]:pb-16 max-[580px]:mt-32 max-[580px]:text-3xl">
          EXCLUSIVE <span className="font-extrabold">FREE </span>RESUME WRITING
          SERVICE TO <span className="font-extrabold">5X </span>
          YOUR JOB HUNT
        </p>
      </div>
    </div>
  );
};

export default Topbar;
