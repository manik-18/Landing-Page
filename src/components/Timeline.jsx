import React from "react";
import ATS from "../assets/atsoptimized.svg";
import FTA from "../assets/fastturnaround.svg";
import Mobile from "../assets/mobile.svg";
import security from "../assets/security.svg";
import aim from "../assets/aim.svg";
import clock from "../assets/clock.svg";
import search from "../assets/search.svg";

const Timeline = () => {
  return (
    <div className="min-[680px]:flex p-32 gap-x-8 text-[#09324F] items-center justify-center">
      <div className="min-[680px]:text-left">
        <div>
          <p className="font-bold text-lg">1. ATS-Optimized:</p>
          <p>
            Our resumes are designed to pass through ATS filters, increasing
            your chances of landing an interview.
          </p>
          <div className="flex justify-center">
            <img src={ATS} alt="ats" className="h-54 my-8" />
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">3. Personal Branding:</p>
          <p>
            We don't just list your experiences; we craft a narrative that
            showcases your unique professional story.
          </p>
          <div className="flex justify-center">
            <img src={Mobile} alt="mobile" className="h-54 my-8" />
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">5. Fast Turnaround: </p>
          <p>
            Our direct communication approach significantly reduces the time it
            takes to finalize a resume that's ready to go.
          </p>
          <div className="flex justify-center">
            <img src={FTA} alt="fta" className="h-54 my-8" />
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">7. Confidentiality Assured:</p>
          <p>Your personal and professional information is safe with us.</p>
        </div>
      </div>

      <div className="min-[680px]:text-right min-[680px]:border-l-4 min-[680px]:border-[#063A63]">
        <div>
          <div className="flex justify-center">
            <img src={search} alt="search" className="h-54 my-8" />
          </div>

          <p className="font-bold text-lg">2. Guaranteed Interview Calls:</p>
          <p>
            We're so confident in our service that we guarantee interview calls,
            or we'll revise your resume.
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={aim} alt="aim" className="h-54 my-8" />
          </div>

          <p className="font-bold text-lg">4. Industry Insights:</p>
          <p>
            With our deep understanding of the tech industry, we tailor your
            resume to speak to industry-specific trends and demands.
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <img src={clock} alt="clock" className="h-54 my-8" />
          </div>

          <p className="font-bold text-lg">6. Unlimited Revisions:</p>
          <p>We work with you until you're 100% satisfied with your resume.</p>
        </div>
        <div className="flex justify-center">
          <img src={security} alt="security" className="h-54 my-8" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
