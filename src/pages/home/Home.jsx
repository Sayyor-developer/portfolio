import React, { useState, useEffect } from 'react';
import myPhoto from '../../assets/men.png';
import { HomeContainer } from './Home.styles';
import { FiGithub } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Home = ({ lang }) => {
  // Matnlar massivi
  const jobsUz = ["Frontend Dasturchi", "UI/UX Dizayner"];
  const jobsEn = ["Frontend Developer", "UI/UX Designer"];
  const jobsRu = ["Фронтенд Разработчик", "UI/UX Дизайнер"];

  // Hozirgi tilga qarab massivni tanlash
  const jobs = lang === "uz" ? jobsUz : lang === "ru" ? jobsRu : jobsEn;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % jobs.length;
      const fullText = jobs[i];

      setDisplayText(
        isDeleting 
          ? fullText.substring(0, displayText.length - 1) 
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, jobs, typingSpeed]);

  const content = {
    en: {
      name: "Sayyor.dev",
      description: "I’m a Frontend Developer specializing in creating modern websites, focusing on UI/UX, design, and full functionality, including SSL, domains, hosting, and SEO.",
      image: myPhoto,
    },
    uz: {
      name: "Sayyor.dev",
      description: "Men zamonaviy veb-ilovalarni yaratishga ixtisoslashgan Frontend Dasturchiman, UI/UX, dizayn va to‘liq funksionallik, jumladan SSL, domenlar, hosting va SEO ga alohida e’tibor qarataman.",
      image: myPhoto,
    },
    ru: {
      name: "Сайёр.дев",
      description: "Я фронтенд-разработчик, создающий современные сайты с упором на UI/UX, дизайн и функциональность. Работаю с SSL, доменами, хостингом и SEO.",
      image: myPhoto,
    }
  };

  const t = content[lang] || content.uz;

  return (
    <HomeContainer id='home'>
      <div className="max-width">
        <div className="home-wrapper display-flex">

          {/* Social icons */}
          <div className="bar display-flex" data-aos="fade-right">
            <FiGithub onClick={() => window.open("https://github.com/Sayyor-developer", "_blank")} style={{ cursor: 'pointer' }} />
            <MdOutlineMarkEmailUnread onClick={() => window.open("mailto:ismoilovsayyor62@gmail.com")} style={{ cursor: 'pointer' }} />
            <FaTelegramPlane onClick={() => window.open("https://t.me/w_ffish_2", "_blank")} style={{ cursor: 'pointer' }} />
            <FaInstagram
              onClick={() => window.open("https://www.instagram.com/iamsayyor", "_blank")}
              style={{ cursor: 'pointer' }}
            />
          </div>

          {/* Info Content */}
          <div className="home-left" data-aos="fade-right">
            <h1>{t.name}</h1>
            <h2 style={{ height: '40px', color: 'var(--primary-color)' }}>
              {displayText}
              <span className="cursor" style={{ borderLeft: '2px solid', marginLeft: '5px', animation: 'blink 1s infinite' }}></span>
            </h2>
            <p>{t.description}</p>
          </div>

          {/* Image */}
          <div className="home-right display-flex" data-aos="fade-left">
            <div className="box display-flex">
              <img src={t.image} alt={t.name} />
            </div>
          </div>

        </div>
      </div>
      
      {/* Kursorni miltillashi uchun kichik stil */}
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </HomeContainer>
  );
}

export default Home;