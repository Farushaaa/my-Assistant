import React, { useState } from "react";
import { faqContent } from "../content/sectionContents";
const QuestionAnswer = ({ lang }) => {
  // content - object of arrays of objects - content{[{}], [{}]}

  // content = {[],[]}
  // content = {ru[{q:, id:, isOpen:}], en[{q:, id:, isOpen:}]}

  const [stateItems, setStateItems] = useState(faqContent);

  const showAnswer = (id) => {
    setStateItems((prev) => ({
      //prev is content(state) here
      ...prev, // ...prev -> destructuring rest of object (if now is ru, then destructuring en)
      [lang]: prev[lang].map(
        (
          item //lang = 'en' -> [lang]: code   ===  'en': code |  we are setting a value to a 'en'
        ) => (item.id === id ? { ...item, isOpen: !item.isOpen } : item) // prev[lang] is ru or en arrays  |  then we map the array | then we find the id | after accessing object we destructure everything exept id field
      ),
    }));
  };

  return (
    <div className="flex flex-col items-center mt-20 mb-20">
      <h1 className="font-semibold text-3xl mb-1 ">
        {lang === "ru"
          ? "Отвечаем на ваши вопросы"
          : "Frequently Asked Questions"}
      </h1>
      <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto p-10">
        {stateItems[lang].map((item) => (
          <div
            key={item.id}
            className="mb-10 w-full max-w-[800px] border-b-2 border-[#BFBFBF]"
          >
            <div className="flex flex-row justify-between w-[800px]">
              <p className="text-[20px] font-medium">{item.questoon}</p>
              <button
                onClick={() => showAnswer(item.id)}
                className="cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${
                    item.isOpen ? "rotate-45" : ""
                  }`}
                >
                  <path
                    d="M12 4.5V19.5M19.5 12H4.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            {item.isOpen && (
              <p className="text-[#686868] py-1">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAnswer;
