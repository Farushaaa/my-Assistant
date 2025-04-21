import { advantagesSectionContent } from "../content/sectionContents";

const AdvantagesSection = ({ lang }) => {
  return (
    <div className="flex flex-col items-center mb-[50px]">
      <h1 className="text-3xl font-bold mb-6">
        {lang === "ru"
          ? "Почему вам стоит выбрать наш сервис?"
          : "Why you should choose us?"}
      </h1>
      <div className="grid grid-cols-2 w-[1300px] rounded-2xl bg-white ">
        {advantagesSectionContent[lang].map((advantage) => (
          <div className="flex flex-col items-center p-7">
            <p className="text-[23px] font-bold text-[#0087F5]">
              {advantage.title}
            </p>
            <p className="text-[18px] text-center">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagesSection;
