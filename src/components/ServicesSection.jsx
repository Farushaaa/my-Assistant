import { servicesContent } from "../content/sectionContents";

const ServicesSection = ({ lang }) => {
  return (
    <div className="flex flex-col lg:flex  items-center pt-[200px] m-auto mb-[50px] ">
      <h1 className="text-4xl font-bold mb-10">
        {servicesContent[lang].titleSection}
      </h1>

      <div
        className="flex rounded-2xl w-[1200px]  bg-white justify-between"
        style={{
          background: `linear-gradient(315deg, #FAFAFA 68%, #839FE6 100%)`,
        }}
      >
        <div className="lg:block hidden w-[700px] h-[500px] ml-20 mt-10">
          <img src="src\assets\businesswoman.png" alt="businesswoman smiling" />
        </div>

        <div className="flex flex-col ">
          <p className="text-[30px] px-10 font-semibold py-15 ">
            {servicesContent[lang].description}
          </p>

          <div>
            {servicesContent[lang].items.map((item) => (
              <div className="flex items-center px-10 ">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.625 15.9375L13.125 23.4375L24.375 6.5625"
                    stroke="#0087F5"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[20px]  font-[500] ">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
