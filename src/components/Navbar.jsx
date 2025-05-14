import { useState } from "react";
import ArrowIcon from "../assets/whiteArrow.svg";
import BurgerMenu from "../assets/burgerMenu.svg";
import ExitIcon from "../assets/exitIconWhite.svg";
import { sectionsContent } from "../content/sectionContents";

const Navbar = ({ lang, toggleLanguage, heroSectionRef, handleScroll }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLangSelect = (selectedLang) => {
    if (selectedLang !== lang) {
      toggleLanguage(); // assumes it switches between "ru" and "en"
    }
    setDropdownOpen(false); // close dropdown after click
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu handler works");
  };

  return (
    <div className="flex justify-center ">
      <div className="flex rounded-2xl items-center justify-between p-4 bg-white w-[95%] mt-3 fixed z-50">
        <div
          className="text-2xl font-semibold cursor-pointer"
          onClick={() => handleScroll(heroSectionRef)}
        >
          My Assistant
        </div>
        <div className="flex items-center relative">
          <div className="flex flex-row items-center">
            {/* Language Selector */}
            <div className="relative mr-4">
              <div
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex rounded-3xl px-3 py-2 bg-[#0087F5] text-white items-center cursor-pointer"
              >
                <p className="mr-1 font-bold text-[15px]">
                  {lang.toUpperCase()}
                </p>
                <img
                  src={ArrowIcon}
                  alt="arrow"
                  className={`transform transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-full bg-[#0087F5] rounded-2xl  z-10">
                  {["ru", "en"]
                    .filter((code) => code !== lang)
                    .map((code) => (
                      <div
                        key={code}
                        className="px-3 py-2 text-white hover:bg-blue-600 rounded-xl cursor-pointer"
                        onClick={() => handleLangSelect(code)}
                      >
                        {code.toUpperCase()}
                      </div>
                    ))}
                </div>
              )}
            </div>
            {/* Language Selector */}

            {/* Menu */}
            <div>
              <button onClick={handleMenuOpen}>
                <img
                  src={BurgerMenu}
                  alt="burger menu"
                  className="w-[30px] cursor-pointer"
                />
              </button>
            </div>
            {/* Menu */}
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="border bg-black  top-0 right-0 w-[500px] h-full z-50 fixed duration-200">
          <div className="flex justify-end p-5">
            <button onClick={handleMenuOpen}>
              <img src={ExitIcon} alt="" className="cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col gap-3 px-10 ">
            {sectionsContent[lang].map((section) => (
              <p className="text-white text-3xl cursor-pointer hover:text-blue-400 transition-colors duration-200">
                {section.text}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
