import React from "react";
import { reviewsContent } from "../content/sectionContents";

const ReviewSection = ({ lang }) => {
  return (
    <div className="flex flex-col my-10">
      <h1 className="flex justify-center text-3xl font-bold">
        {lang === "ru" ? "Отзывы наших клиентов" : "Clients' Reviews"}
      </h1>
      <div className="flex justify-between px-[80px]  pt-5">
        {reviewsContent[lang].map((author) => (
          <div className="p-5 ">
            <h1 className="text-[28px]">{author.authorName}</h1>
            <p className="text-[17px] border-b-2 w-fit text-[#0087F5] border-[#0087F5]">
              {author.authorTitle}
            </p>
            <p className="mt-5 font-cormorant text-[20px] font-medium">
              {author.authorReview}
            </p>
          </div>
        ))}
      </div>
      <div className="px-[100px] pt-5">
        <h1 className="text-[28px]">
          {lang === "ru" ? "Жапар Арткулов" : "Zhapar Artkulov"}
        </h1>
        <p className="text-[17px] border-b-2 w-fit text-[#0087F5] border-[#0087F5]">
          {lang === "ru"
            ? "Предприниматель в сфере логистики"
            : "Enterpreneur in the sphere of logistics"}
        </p>
        <p className="mt-5 font-cormorant text-[20px] font-medium">
          {lang === "ru"
            ? "С сервисом My Assistant мы смогли значительно упростить нашу работу. Удалённый ассистент не только выполняет задания, но и активно участвует в развитии нашего бизнеса."
            : "With the My Assistant service, we were able to significantly simplify our work. The remote assistant not only performs tasks, but also actively participates in the development of our business."}
        </p>
      </div>
    </div>
  );
};

export default ReviewSection;
