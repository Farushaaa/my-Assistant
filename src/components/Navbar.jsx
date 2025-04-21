import { useState } from "react";

const Navbar = ({ lang, toggleLanguage, heroSectionRef, handleScroll }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLangSelect = (selectedLang) => {
    if (selectedLang !== lang) {
      toggleLanguage(); // assumes it switches between "ru" and "en"
    }
    setDropdownOpen(false); // close dropdown after click
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
          {/* Language Selector */}
          <div className="relative mr-4">
            <div
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex rounded-3xl px-3 py-2 bg-[#0087F5] text-white items-center cursor-pointer"
            >
              <p className="mr-1 font-bold text-[15px]">{lang.toUpperCase()}</p>
              <img
                src="src/assets/white arrow.svg"
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="flex rounded-3xl px-3 py-2 bg-[#0087F5] text-white items-center mr-4">
  <p className="font-bold text-[15px]">{lang === "ru" ? "RU" : "EN"}</p>
  <button onClick={showDropdown} className="cursor-pointer">
    <img src="src\assets\white arrow.svg" alt="arrow" />
  </button>
</div>; */
}
