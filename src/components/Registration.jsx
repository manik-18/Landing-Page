import React from "react";

const Registration = () => {
  return (
    <div className="flex justify-evenly items-start max-[960px]:flex-col  max-[960px]:items-center max-[960px]:px-16">
      <div className="text-[#02243F]">
        <div className=" mt-4">
          <p className="font-semibold text-5xl">
            Unlock Interviews with a Standout <br />Resume
          </p>
          <hr className="my-8 border-2 w-32 border-[#09324F]"/>
        </div>
        <div>
          <p className="text-3xl font-bold ">
            Why a <span className="text-[#0FA958]">Great Resume Matters:</span>
          </p>
          <ul className="list-disc p-8 text-xl space-y-4">
            <li>
              <span className="font-bold">Makes a Strong First Impression: </span>Captures attention
              and showcases your potential.
            </li>
            <li>
              <span className="font-bold">ATS-Friendly: </span>Designed to get past automated filters
              and into human hands.
            </li>
            <li>
              <span className="font-bold">Highlights Your Skills: </span>Clearly presents your
              experiences and abilities.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-3xl font-bold">
            Our <span className="text-[#0FA958]">Canada-Specific </span >Resume Writing <span className="text-[#0FA958]">Service</span>
          </p>
        </div>
      </div>
      <div>
        <div className="bg-[#213360] p-4 px-8 text-white h-[28rem] max-[1150px]:h-[30rem] max-[1130px]:h-[33rem] w-96 rounded-b-lg flex flex-col justify-center max-[960px]:mt-16 max-[425px]:w-auto">
            <p className="text-3xl font-semibold">Fill In Your Details</p>
          <div className="flex flex-col justify-center">
            <label htmlFor="name" className="text-xl font-semibold mt-4">NAME</label>
            <input type="text" className="rounded-md h-8"/>
            <label htmlFor="email" className="text-xl font-semibold mt-4">EMAIL</label>
            <input type="email" className="rounded-md h-8"/>
            <label htmlFor="contact" className="text-xl font-semibold mt-4">WHATSAPP NUMBER</label>
            <input type="text" className="rounded-md h-8"/>
          </div>
           <div className="flex justify-center items-center flex-col">
           <button className="bg-[#0FA958] mt-8 mb-2 w-32 font-medium h-8 rounded-lg">CLAIM NOW</button>
          <p className="font-semibold">*Only 39 slots left out of 100</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
