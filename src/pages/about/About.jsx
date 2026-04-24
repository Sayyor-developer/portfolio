import { AboutContainer } from "./About.style";
import AboutImg from "../../assets/men2.png";
import { FaArrowRightLong } from "react-icons/fa6";

const About = ({ lang }) => {
  const content = {
    uz: {
      title: "Men haqimda",
      subtitle: "Kirish",
      description: "Men zamonaviy veb-ilovalarni yaratishga ixtisoslashgan Full-Stack Dasturchiman, UI/UX, dizayn va to‘liq funksionallik, jumladan frontend va backend, SSL, domenlar, hosting va SEO ga alohida e’tibor qarataman.",
      experience: "Tajribam",
      projects: "Loyihalarim",
      students: "O'quvchilarim",
      btn: "CV yuklab olish"
    },
    en: {
      title: "About Me",
      subtitle: "Introduction",
      description: "I am a Full-Stack Developer specializing in creating modern web applications, focusing on UI/UX, design, and full functionality including frontend, backend, SSL, domains, hosting, and SEO.",
      experience: "Experience",
      projects: "Projects",
      students: "Students",
      btn: "Download CV"
    },
    ru: {
      title: "Обо мне",
      subtitle: "Введение",
      description: "Я Full-Stack разработчик, специализирующийся на создании современных веб-приложений, уделяя особое внимание UI/UX, дизайну и полной функциональности.",
      experience: "Опыт",
      projects: "Проектов",
      students: "Учеников",
      btn: "Скачать CV"
    }
  };

  const t = content[lang] || content.en;

  return (
    <AboutContainer id="about">
      <div className="max-width">
        <div className="title" data-aos="fade-up">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>

        <div className="about-content">
          <div className="about-left" data-aos="fade-right">
            <img src={AboutImg} alt="Sayyorbek" />
          </div>

          <div className="about-right" data-aos="fade-left">
            <p className="description">{t.description}</p>

            <div className="right-box-bar">
              <div className="stat-box">
                <h2>4+</h2>
                <p>{t.experience}</p>
              </div>
              <div className="stat-box">
                <h2>6+</h2>
                <p>{t.projects}</p>
              </div>
              <div className="stat-box">
                <h2>15+</h2>
                <p>{t.students}</p>
              </div>
            </div>

            <button className="btn display-flex">
              {t.btn} <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;