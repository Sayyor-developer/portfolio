import React, { useState } from 'react';
import { Wrapper, FilterMenu, ProjectGrid, ProjectCard } from './Portfolio.style';
import './portfolio.css'
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

const Portfolio = ({ lang = 'en' }) => {
  const [filter, setFilter] = useState('all');

  // --- TRANSLATIONS ---
  const translations = {
    uz: {
      title: "Oxirgi ishlar",
      subtitle: "Portfolio",
      filters: { all: "Hammasi", fullstack: "Fullstack", frontend: "Frontend", backend: "Backend" },
      projects: [
        { id: 1, title: "Korxona CRM platformasi", desc: "Katta hajmdagi mijozlar bazasi va real-vaqtda tahliliy ma'lumotlarni boshqarish tizimi." },
        { id: 2, title: "SaaS loyihalarni boshqarish", desc: "Jamoalar uchun vazifalarni kuzatish va fayl almashish platformasi." },
        { id: 3, title: "AI rasm generatori", desc: "Sun'iy intellekt yordamida rasm yaratish va obuna asosida sotish servisi." },
        { id: 4, title: "E-Commerce MarketPlace", desc: "Murakkab filtrlash va to'lov tizimiga ega onlayn do'kon platformasi." },
        { id: 5, title: "Real-vaqtli Chat ilovasi", desc: "Guruhli suhbatlar va foydalanuvchilar onlaynligini ko'rsatuvchi chat." },
        { id: 6, title: "Blogging Platforma", desc: "Dasturchilar uchun maqolalar yozish va sharhlash platformasi." },
        { id: 7, title: "React komponentlar kutubxonasi", desc: "Dizayn tizimlari uchun qayta ishlatiladigan UI komponentlar to'plami." },
        { id: 9, title: "Scalable API Gateway", desc: "Mikroservislar uchun xavfsizlik va so'rovlarni boshqarish shlyuzi." },
      ]
    },
    en: {
      title: "Recent Works",
      subtitle: "Portfolio",
      filters: { all: "All", fullstack: "Fullstack", frontend: "Frontend", backend: "Backend" },
      projects: [
        { id: 1, title: "Enterprise CRM Platform", desc: "Large-scale customer base and real-time analytical data management system." },
        { id: 2, title: "SaaS Project Management Tool", desc: "Task tracking, file sharing, and schedule management for teams." },
        { id: 3, title: "AI Image Generator Portal", desc: "AI-powered image generation and subscription-based service." },
        { id: 4, title: "E-Commerce MarketPlace", desc: "Online store platform with complex filtering and payment systems." },
        { id: 5, title: "Real-Time Chat Application", desc: "Group chats, message statuses, and online presence tracking." },
        { id: 6, title: "Dev.to Clone (Blogging)", desc: "A blogging platform for developers to write, comment, and like articles." },
        { id: 7, title: "React Components Library", desc: "Reusable, tested, and documented UI component set for design systems." },
        { id: 9, title: "Scalable API Gateway", desc: "Central gateway for security and request management for microservices." },
      ]
    },
    ru: {
      title: "Последние работы",
      subtitle: "Портфолио",
      filters: { all: "Все", fullstack: "Fullstack", frontend: "Frontend", backend: "Backend" },
      projects: [
        { id: 1, title: "Корпоративная CRM платформа", desc: "Система управления большой базой клиентов и аналитикой в реальном времени." },
        { id: 2, title: "SaaS управление проектами", desc: "Платформа для отслеживания задач и обмена файлами для команд." },
        { id: 3, title: "AI Генератор изображений", desc: "Сервис создания изображений с помощью ИИ на основе подписки." },
        { id: 4, title: "E-Commerce Маркетплейс", desc: "Платформа онлайн-магазина со сложной фильтрацией и платежной системой." },
        { id: 5, title: "Чат в реальном времени", desc: "Приложение для чата с групповыми беседами и статусами пользователей." },
        { id: 6, title: "Blogging Платформа", desc: "Платформа для написания статей и комментариев для разработчиков." },
        { id: 7, title: "Библиотека React компонентов", desc: "Набор UI компонентов для систем дизайна." },
        { id: 9, title: "Scalable API Gateway", desc: "Центральный шлюз безопасности для микросервисов." },
      ]
    }
  };

  const t = translations[lang] || translations.en;

  // --- STATIC PROJECT ASSETS (Images & Tech remain same) ---
  const projectAssets = [
    { id: 1, category: "fullstack", image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=400&auto=format&fit=crop", tech: ["React", "Node.js", "PostgreSQL", "Socket.io"], github: "#", demo: "#" },
    { id: 2, category: "fullstack", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop", tech: ["Next.js", "TypeScript", "Prisma", "AWS S3"], github: "#", demo: "#" },
    { id: 3, category: "fullstack", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop", tech: ["React", "OpenAI API", "Mongoose", "Stripe"], github: "#", demo: "#" },
    { id: 4, category: "fullstack", image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=400&auto=format&fit=crop", tech: ["React", "Supabase", "Tailwind CSS", "Payme API"], github: "#", demo: "#" },
    { id: 5, category: "fullstack", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&auto=format&fit=crop", tech: ["React", "Node.js", "Redis", "MongoDB"], github: "#", demo: "#" },
    { id: 6, category: "fullstack", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=400&auto=format&fit=crop", tech: ["Next.js", "MDX", "Cloudinary", "Auth.js"], github: "#", demo: "#" },
    { id: 7, category: "frontend", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop", tech: ["React", "TypeScript", "Storybook", "Webpack"], github: "#", demo: "#" },
    { id: 8, category: "frontend", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=400&auto=format&fit=crop", tech: ["React", "Chart.js", "CoinGecko API", "Framer Motion"], github: "#", demo: "#" },
    { id: 9, category: "backend", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400&auto=format&fit=crop", tech: ["Node.js", "Express", "JWT", "Rate Limiting"], github: "#", demo: "#" },
    { id: 10, category: "backend", image: "https://images.unsplash.com/photo-1520004434532-6684164f378d?q=80&w=400&auto=format&fit=crop", tech: ["Python", "Django", "Celery", "PostgreSQL"], github: "#", demo: "#" }
  ];

  // Merge translations with assets
  const combinedProjects = t.projects.map(p => ({
    ...p,
    ...projectAssets.find(asset => asset.id === p.id)
  }));

  const filteredProjects = filter === 'all' 
    ? combinedProjects 
    : combinedProjects.filter(p => p.category === filter);

  const filterOptions = ['all', 'fullstack', 'frontend', 'backend'];

  return (
    <Wrapper id="portfolio" data-aos="fade-up">
      <div className="max-width">
        <div className="title">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>

        <FilterMenu>
          {filterOptions.map((cat) => (
            <button 
              key={cat} 
              className={filter === cat ? 'active' : ''} 
              onClick={() => setFilter(cat)}
            >
              {t.filters[cat]}
            </button>
          ))}
        </FilterMenu>

        <ProjectGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} data-aos="zoom-in">
              <div className="img-box">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" title="View Code">
                    <VscGithubAlt />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo">
                    <VscLinkExternal />
                  </a>
                </div>
              </div>
              <div className="content">
                <div className="tech-tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </div>
    </Wrapper>
  );
};

export default Portfolio;