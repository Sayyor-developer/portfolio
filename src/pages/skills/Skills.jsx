import React, { useState } from 'react';
import { SkillsContainer } from "./Skills.style.js";

const Skills = ({ lang }) => {
  const [activeSkill, setActiveSkill] = useState(1);

  const skillsData = {
    1: {
      title: { uz: "Frontend Developer", en: "Frontend Developer", ru: "Frontend Разработчик" },
      techs: [
        { name: "React", level: "90%" },
        { name: "TypeScript", level: "80%" },
        { name: "JavaScript", level: "90%" },
        { name: "Redux Toolkit", level: "80%" },
        { name: "Styled Components", level: "85%" },
        { name: "Tailwind CSS", level: "80%" },
        { name: "Vite", level: "85%" },
        { name: "HTML5", level: "100%" },
        { name: "CSS3", level: "100%" },
        { name: "Bootstrap", level: "95%" },
        { name: "Sass", level: "95%" },
      ]
    },
    2: {
      title: { uz: "Backend Developer", en: "Backend Developer", ru: "Backend Разработчик" },
      techs: [
        { name: "Supabase", level: "75%" },
        { name: "Node.js", level: "65%" },
        { name: "Firebase", level: "80%" },
      ]
    },
    3: {
      title: { uz: "UI/UX Designer", en: "UI/UX Designer", ru: "UI/UX Дизайнер" },
      techs: [
        { name: "Figma", level: "85%" },
        { name: "Responsive Design", level: "95%" },
      ]
    },
    4: {
      title: { uz: "Web Optimization", en: "Web Optimization", ru: "Оптимизация" },
      techs: [
        { name: "SEO", level: "80%" },
        { name: "Lighthouse Score", level: "90%" },
        { name: "Web Vitals", level: "85%" },
      ]
    },
    5: {
      title: { uz: "Soft Skills", en: "Soft Skills", ru: "Soft Skills" },
      techs: [
        { name: "Teamwork", level: "100%" },
        { name: "Communication", level: "90%" },
      ]
    }
  };

  return (
    <SkillsContainer id="skills">
      <div className="max-width" data-aos="fade-up">
        <h1 className="skills-title">
          {lang === 'uz' ? 'Mening ko‘nikmalarim' : lang === 'ru' ? 'Мои навыки' : 'My Skills'}
        </h1>

        <div className="skills-menu display-flex">
          {Object.keys(skillsData).map((id) => (
            <h1
              key={id}
              className={activeSkill === Number(id) ? "active" : ""}
              onClick={() => setActiveSkill(Number(id))}
            >
              {skillsData[id].title[lang] || skillsData[id].title.en}
            </h1>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-date-content">
            {skillsData[activeSkill].techs.map((skill, index) => (
              <div className="texnologies" key={index} data-aos="zoom-in">
                <div className="tech-info">
                  <h2>{skill.name}</h2>
                  <span>{skill.level}</span>
                </div>
                <div className="a">
                  <div className="b" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;