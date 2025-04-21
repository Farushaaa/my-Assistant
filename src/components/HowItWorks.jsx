import React from "react";
import { howItWorksContent } from "../content/sectionContents";

const HowItWorks = ({ lang }) => {
  return (
    <div className="flex flex-col items-center mb-[50px]">
      <h1 className="font-bold text-3xl flex justify-center mb-5">
        {lang === "ru" ? "Как это работает?" : "How it Works?"}
      </h1>
      <div
        className="w-[1100px] rounded-2xl bg-white"
        style={{
          background:
            "linear-gradient(to bottom left, rgba(130, 165, 255, 0.81) 0%, rgba(255, 255, 255, 1) 39%)",
        }}
      >
        {howItWorksContent[lang].map((step) => (
          <div key={step.number} className="flex flex-col items-center my-10">
            <p className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg font-bold">
              {step.number}
            </p>
            <p className="w-[800px] mt-2 text-center font-[600] text-[20px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
