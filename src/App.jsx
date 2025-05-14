import { useRef, useState } from "react";
import "./App.css";
import AdvantagesSection from "./components/AdvantagesSection";
import Application from "./components/Application";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import QuestionAnswer from "./components/QuestionAnswer";
import ReviewSection from "./components/ReviewSection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("ru");
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const applicationForm = useRef(null);
  const heroSectionRef = useRef(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ru" ? "en" : "ru"));
    console.log(lang);
  };
  const showDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScroll = (elementRef) => {
    const offset = -100; // adjust this value as needed (like -60 or -80)
    const elementPosition = elementRef.current.offsetTop + offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <Navbar
        lang={lang}
        toggleLanguage={toggleLanguage}
        heroSectionRef={heroSectionRef}
        handleScroll={handleScroll}
        dropdownOpen={dropdownOpen}
        setDropdownOpen={setDropdownOpen}
        showDropdown={showDropdown}
      />
      <Hero
        lang={lang}
        handleScroll={handleScroll}
        applicationForm={applicationForm}
        heroSectionRef={heroSectionRef}
      />
      <ServicesSection lang={lang} />
      <HowItWorks lang={lang} />
      <AdvantagesSection lang={lang} />
      <ReviewSection lang={lang} />
      <Pricing
        lang={lang}
        handleScroll={handleScroll}
        applicationForm={applicationForm}
      />
      <Application lang={lang} applicationForm={applicationForm} />
      <QuestionAnswer lang={lang} />
      <Footer />
    </div>
  );
}

export default App;
