import { applicationFormContent } from "../content/sectionContents";

const Application = ({ lang, applicationForm }) => {
  return (
    <div className="flex justify-center mb-10 mt-20 ">
      <div
        ref={applicationForm}
        className="flex flex-row rounded-2xl w-fit justify-between py-10 px-25 bg-white"
        style={{
          background: `linear-gradient(270deg, #FFFFFF 70%, #bfc6f0 90%)`,
        }}
      >
        <div className="flex flex-col mr-30 ">
          <h1 className="font-medium text-3xl w-[400px] mb-5">
            {lang === "ru"
              ? "Свяжитесь с нами - мы подберем для вас бизнес-ассистента!"
              : "Contact us and we will select a business assistant for you!"}
          </h1>
          <div>
            <img
              src="src\assets\man working.png"
              alt="Man working"
              className="w-[300px] h-[300px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-5">
            {applicationFormContent[lang].map((userInput) => (
              <div className="flex flex-col ">
                <label htmlFor="" className="text-[18px]">
                  <span className="text-[#0087F5] font-bold">*</span>{" "}
                  {userInput.title}
                </label>
                <input
                  type="text"
                  className="border rounded-2xl py-1 px-3 w-[300px]"
                  placeholder={userInput.example}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-2 bg-[#0087F5] w-fit py-3 px-3 mt-10 rounded-2xl ">
            <p className="text-white text-[18px]">
              {lang === "ru" ? "Оставить заявку" : "Apply"}
            </p>
            <img
              src="src\assets\tick.svg"
              alt="tick"
              className="h-[25px] w-[25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
