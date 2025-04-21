import React from "react";
import { pricingContent } from "../content/sectionContents";

const Pricing = ({ lang, handleScroll, applicationForm }) => {
  return (
    <div className="flex flex-col items-center mt-[80px] mb-[50px]">
      <div className="flex flex-col text-center mb-10 ">
        <h1 className="text-3xl font-bold">
          {lang === "ru" ? "Сколько стоят наши услуги?" : "Pricing Plans"}
        </h1>
        <p className="text-[#9c9c9c] font-light">
          {lang === "ru"
            ? "тарифы действующие на территории СНГ"
            : "pricing plans applicable in the USA and UAE"}
        </p>
      </div>
      <div className="flex gap-10 justify-center w-[1000px]">
        {pricingContent[lang].map((card) => (
          <div
            key={card.id}
            className="rounded-2xl p-10 "
            style={{ background: card.gradient }}
          >
            <h1 className="text-2xl mb-2" style={{ color: card.color }}>
              {card.title}
            </h1>
            <p className="text-5xl font-medium border-b-3  w-fit border-[#C7C7C7]">
              {card.price}
            </p>
            <div className="pt-10">
              {card.description.map((text) => (
                <p className="flex items-center gap-2 text-[18px]">
                  <svg
                    className="w-[25px] h-[25px] shrink-0"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5625 18.5938L15.3125 27.3438L28.4375 7.65625"
                      stroke={card.color}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {text}
                </p>
              ))}
            </div>

            <div
              className="border w-fit flex bg-black py-3 px-4 mt-10 rounded-2xl items-center gap-2 cursor-pointer"
              onClick={() => handleScroll(applicationForm)}
            >
              <p className="text-white text-[18px]">{card.buttonTitle}</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.875 5.625L26.25 15M26.25 15L16.875 24.375M26.25 15H3.75"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
