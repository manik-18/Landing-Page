import React from "react";

const Successstories = () => {
  return (
    <div>
      <div>
        <p className="text-[#253255] font-bold text-center text-3xl my-8">
          Here's How It Works
        </p>
        <div className="bg-[#02243F] text-white px-64 max-[610px]:text-[#253255] max-[970px]:px-32 max-[610px]:px-16 max-[610px]:bg-[#cae9f5]">
          <ul className="space-y-4 list-decimal text-justify py-8">
            <li>
              <span className="font-bold">Submit Your Details: </span>
              Provide your Name, WhatsApp Number, and upload your Current Resume
              in the fields below.
            </li>
            <li>
              <span className="font-bold">Group Addition: </span>
              Within <span className="font-bold">24 hours</span> of submission,
              you will be added to a WhatsApp group with our Resume Writer.
            </li>
            <li>
              <span className="font-bold">Information Collection: </span>
              Our Resume Writer team will share a Google Doc for you to input
              additional details.
            </li>
            <li>
              <span className="font-bold">Receive Your New Resume: </span>
              After updating the provided Doc, our team will share your revamped
              resume within 48 hours.
            </li>
            <li>
              <span className="font-bold">Video Testimonial: </span>
              If you're pleased with the result, we kindly request a video
              testimonial. Once shared, you'll get your revamped resume, no
              strings attached!
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-[#253255] font-bold text-3xl text-center mt-8">
          SUCCESS STORIES
        </p>
        <div className="">
        <div className="flex justify-evenly items-center my-16">
          <p className="text-[#253255] font-bold text-5xl max-[520px]:text-lg">{"<"}</p>
          <div className="flex justify-center items-center flex-col">
            <div className="h-96 w-60 max-[780px]:w-36 max-[780px]:h-56 max-[520px]:w-20 max-[520px]:h-32 bg-[#D9D9D9]"></div>
            <p className="text-[#253255] font-bold text-lg max-[520px]:text-xs">
              COLLEGE NAME
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="h-96 w-60 max-[780px]:w-36 max-[780px]:h-56 max-[520px]:w-20 max-[520px]:h-32 bg-[#D9D9D9]"></div>
            <p className="text-[#253255] font-bold text-lg max-[520px]:text-xs">
              COLLEGE NAME
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="h-96 w-60 max-[780px]:w-36 max-[780px]:h-56 max-[520px]:w-20 max-[520px]:h-32 bg-[#D9D9D9]"></div>
            <p className="text-[#253255] font-bold text-lg max-[520px]:text-xs">
              COLLEGE NAME
            </p>
          </div>
          <p className="text-[#253255] font-bold text-5xl max-[520px]:text-lg">{">"}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Successstories;
