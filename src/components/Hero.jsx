import { heroSectionContent } from "../content/sectionContents";

const Hero = ({ lang, handleScroll, applicationForm, heroSectionRef }) => {
  return (
    <div
      className="flex pt-[80px] justify-between mt-[100px]"
      ref={heroSectionRef}
    >
      <div className="flex flex-col gap-12 w-[900px] ml-[50px]  ">
        <h1 className="font-bold text-7xl">{heroSectionContent[lang].title}</h1>
        <p className="text-3xl text-[#5B5B5B font-medium">
          {heroSectionContent[lang].description}
        </p>
        <div
          onClick={() => handleScroll(applicationForm)}
          className="flex w-fit p-5 rounded-2xl bg-[#0087F5] justify-between items-center cursor-pointer"
        >
          <p className="text-white text-2xl">
            {heroSectionContent[lang].buttonContent}
          </p>
          <img
            className="h-[25px] w-[25px] ml-2"
            src="src\assets\arrow to right.svg"
            alt="right arrow"
          />
        </div>
      </div>
      <div className="hidden xl:block w-[750px] h-[500px] absolute right-0 top-0  ">
        <img src="src\assets\young_man.png" alt="young man working" />
      </div>
    </div>
  );
};

export default Hero;
