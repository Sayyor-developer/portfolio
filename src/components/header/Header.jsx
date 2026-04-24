import { RiMenuUnfold2Fill, RiCloseFill } from "react-icons/ri";
import { 
  MdOutlineColorLens, 
  MdLanguage, 
  MdOutlineDarkMode, 
  MdOutlineLightMode 
} from "react-icons/md";

import { HeaderContainer } from "./Header.styles";
import './header.css'
import { useState, useEffect } from "react";
import Aos from "aos";

const Header = ({ lang, setLang }) => {
  const [colorModal, setColorModal] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Dark mode holati - localStorage orqali saqlanadi
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Theme o'zgarganda body klassini va localStorage-ni yangilash
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const changeColor = (color) => {
    document.documentElement.style.setProperty("--primary-color", color);
    setColorModal(false);
  };

  const changeLanguage = (selected) => {
    setLang(selected);
    setLangModal(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        Aos.refresh();
      }, 100);
    }
    setActiveSection(id);
    setSidebarOpen(false);
  };

  // Click outside - modallarni yopish uchun
  useEffect(() => {
    const closeModals = () => {
      setColorModal(false);
      setLangModal(false);
    };
    window.addEventListener("click", closeModals);
    return () => window.removeEventListener("click", closeModals);
  }, []);

  return (
    <HeaderContainer colorModal={colorModal} langModal={langModal}>
      <div className="max-width" data-aos="fade-down">
        <div className="header-cont">
          {/* Logo */}
          <div className="logo" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
            <h1>Sayyor</h1>
          </div>

          {/* Desktop Nav */}
          <ul className="nav-list">
            {["home", "about", "skills", "services", "portfolio", "contact"].map((sec) => (
              <li 
                key={sec}
                className={activeSection === sec ? "active" : ""} 
                onClick={() => scrollToSection(sec)}
              >
                {lang === "uz" ? (
                  sec === "home" ? "Bosh sahifa" : 
                  sec === "about" ? "Men haqimda" : 
                  sec === "skills" ? "Ko‘nikmalar" : 
                  sec === "services" ? "Xizmatlar" : 
                  sec === "portfolio" ? "Portfolio" : "Aloqa"
                ) : lang === "ru" ? (
                  sec === "home" ? "Главная" : 
                  sec === "about" ? "Обо мне" : 
                  sec === "skills" ? "Навыки" : 
                  sec === "services" ? "Услуги" : 
                  sec === "portfolio" ? "Портфолио" : "Контакты"
                ) : (
                  sec.charAt(0).toUpperCase() + sec.slice(1)
                )}
              </li>
            ))}
          </ul>

          {/* Icons & Modals Area */}
          <div className="icons">
            {/* Theme Toggle Button */}
            <div className="theme-toggle" onClick={toggleTheme} style={{ cursor: "pointer", fontSize: "22px" }}>
              {isDark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </div>

            <MdOutlineColorLens
              onClick={(e) => {
                e.stopPropagation();
                setColorModal(!colorModal);
                setLangModal(false);
              }}
            />
            
            <MdLanguage
              onClick={(e) => {
                e.stopPropagation();
                setLangModal(!langModal);
                setColorModal(false);
              }}
            />

            <div className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <RiCloseFill /> : <RiMenuUnfold2Fill />}
            </div>

            {/* Color modal */}
            <div className="color-filter-modal" onClick={(e) => e.stopPropagation()}>
              {["#ff6347", "#2563eb", "#28a745", "#ffc107", "#6f42c1", "#fd7e14"].map((c) => (
                <div 
                  key={c}
                  className="color" 
                  style={{ backgroundColor: c }} 
                  onClick={() => changeColor(c)}
                ></div>
              ))}
            </div>

            {/* Language modal */}
            <div className="lang-modal" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => changeLanguage("uz")}>🇺🇿 Uzbek</button>
              <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
              <button onClick={() => changeLanguage("ru")}>🇷🇺 Russian</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
    {/* Sidebar (Mobile) */}
      {/* Sidebar (Mobile) */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} 
           style={{ 
             background: isDark ? "#0b1120" : "#ffffff", 
             transition: "0.4s all ease-in-out",
             position: "fixed",
             top: 0,
             right: sidebarOpen ? "0" : "-100%",
             width: "280px", // Minimalist kenglik
             height: "100vh",
             zIndex: 100000
           }}>
        
        {/* Yopish tugmasi (X) sidebar ichida o'ng tepada */}
        <div className="close-sidebar" 
             onClick={() => setSidebarOpen(false)}
             style={{
               position: "absolute",
               top: "20px",
               right: "20px",
               fontSize: "30px",
               color: isDark ? "#ffffff" : "#000000",
               cursor: "pointer",
               display: sidebarOpen ? "block" : "none"
             }}>
          <RiCloseFill />
        </div>

        <ul style={{ padding: "80px 20px", listStyle: "none" }}>
          {["home", "about", "skills", "services", "portfolio", "contact"].map((sec) => (
            <li 
              key={sec} 
              onClick={() => scrollToSection(sec)}
              style={{ 
                color: isDark ? "#ffffff" : "#000000",
                padding: "15px 0",
                fontSize: "1.2rem",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                transition: "0.3s"
              }}
            >
               {lang === "uz" ? (
                  sec === "home" ? "Bosh sahifa" : 
                  sec === "about" ? "Men haqimda" : 
                  sec === "skills" ? "Ko‘nikmalar" : 
                  sec === "services" ? "Xizmatlar" : 
                  sec === "portfolio" ? "Portfolio" : "Aloqa"
                ) : lang === "ru" ? (
                  sec === "home" ? "Главная" : 
                  sec === "about" ? "Обо мне" : 
                  sec === "skills" ? "Навыки" : 
                  sec === "services" ? "Услуги" : 
                  sec === "portfolio" ? "Портфолио" : "Контакты"
                ) : (
                  sec.charAt(0).toUpperCase() + sec.slice(1)
                )}
            </li>
          ))}
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;