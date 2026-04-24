import React, { useState } from 'react';
import { Timeline, Tabs, Modal } from "antd";
import { BookOutlined, SolutionOutlined } from "@ant-design/icons";
import { VscTerminalTmux, VscArrowRight } from "react-icons/vsc";
import { GrReactjs } from "react-icons/gr";
import { RiGitMergeLine } from "react-icons/ri";
import { Wrapper, TimelineWrapper, ServicesCards, ModalContent } from "./services.style";

const Services = ({ lang = 'en' }) => {
  const [modalOpen, setModalOpen] = useState(null);

  const t = {
    uz: {
      qualTitle: "Malaka",
      qualSubtitle: "Mening professional yo'lim",
      education: "Ta'lim",
      experience: "Tajriba",
      viewMore: "Batafsil ko'rish",
      servicesTitle: "Xizmatlar",
      servicesSubtitle: "Professional Yechimlar",
      eduItems: [
        {
          date: "2023 - Hozirgi vaqt",
          title: "Kompyuter muhandisligi (BSc)",
          place: "TATU - Toshkent Axborot Texnologiyalari Universiteti",
          desc: "Algoritmlar, ma'lumotlar tuzilmasi, nazorat nazariyasi va yarimo'tkazgichlar fizikasi."
        },
        {
          date: "2022 - 2023",
          title: "Web dasturlash",
          place: "IT Akademiya (Yuqori daraja)",
          desc: "Frontend arxitekturasi va murakkab JavaScript mantiqlarini o'rganish."
        }
      ],
      workItems: [
        {
          date: "2024 - Hozirgi vaqt",
          title: "Middle Frontend Dasturchi",
          place: "Aminor CRM / Freelance",
          desc: "React va Supabase yordamida SaaS yechimlari va murakkab dashboardlar yaratish."
        },
        {
          date: "2023 - 2024",
          title: "Frontend Developer",
          place: "Freelance",
          desc: "Mijozlar uchun Pixel-Perfect landing pagelar va interaktiv veb-saytlar ishlab chiqish."
        }
      ],
      services: [
        { 
          title: "UI/UX Dasturlash", 
          desc: ["Figma-dan React-ga Pixel-Perfect o'tkazish", "GSAP va Framer Motion animatsiyalari", "Responsive va Adaptive dizaynlar", "Foydalanish qulayligi (A11y)"] 
        },
        { 
          title: "Frontend muhandisligi", 
          desc: ["React 18 va Next.js (App Router)", "Zustand va Redux Toolkit bilan holatni boshqarish", "Performance optimizatsiyasi", "React Hook Form bilan ishlash"] 
        },
        { 
          title: "Arxitektura va Integratsiya", 
          desc: ["Supabase (Auth, DB, Storage) integratsiyasi", "RESTful API va WebSocket bilan ishlash", "SOLID va Clean Architecture tamoyillari", "Git Flow ish jarayoni"] 
        }
      ]
    },
    en: {
      qualTitle: "Qualification",
      qualSubtitle: "My professional journey",
      education: "Education",
      experience: "Experience",
      viewMore: "View more",
      servicesTitle: "Services",
      servicesSubtitle: "Professional Solutions",
      eduItems: [
        {
          date: "2023 - Present",
          title: "Computer Engineering (BSc)",
          place: "TUIT - University of IT",
          desc: "Focus: Algorithms, Control Theory and Semiconductor Physics."
        },
        {
          date: "2022 - 2023",
          title: "Web Development",
          place: "IT Academy (Advanced Level)",
          desc: "Studying frontend architecture and complex JavaScript logic."
        }
      ],
      workItems: [
        {
          date: "2024 - Present",
          title: "Middle Frontend Developer",
          place: "Aminor CRM / Freelance",
          desc: "Building scalable SaaS solutions and high-performance dashboards with React."
        },
        {
          date: "2023 - 2024",
          title: "Frontend Developer",
          place: "Freelance",
          desc: "Developing Pixel-Perfect landing pages and interactive web applications."
        }
      ],
      services: [
        { 
          title: "UI/UX Development", 
          desc: ["Pixel-Perfect conversion from Figma", "Advanced GSAP Animations", "Responsive & Adaptive layouts", "User Experience focus"] 
        },
        { 
          title: "Frontend Engineering", 
          desc: ["React 18 & Next.js (App Router)", "State Management (Zustand/Redux)", "Optimization & Memoization", "Handling complex forms"] 
        },
        { 
          title: "Architecture & Integration", 
          desc: ["Deep Supabase Integration", "RESTful API & WebSocket communication", "SOLID principles implementation", "Git Flow & CI/CD basics"] 
        }
      ]
    }
  };

  const curr = t[lang] || t.en;
  const icons = [<VscTerminalTmux />, <GrReactjs />, <RiGitMergeLine />];

  const renderTimeline = (items) => (
    <TimelineWrapper>
      <Timeline
        mode="alternate"
        items={items.map((item, index) => ({
          label: item.date,
          children: (
            <div className="qualification-card" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
              <h3>{item.title}</h3>
              <span>{item.place}</span>
              <p>{item.desc}</p>
            </div>
          )
        }))}
      />
    </TimelineWrapper>
  );

  return (
    <Wrapper id="services">
      <div className="max-width">
        <div className="title" data-aos="fade-up">
          <h1>{curr.qualTitle}</h1>
          <p>{curr.qualSubtitle}</p>
        </div>

        <Tabs
          centered
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              label: <span><BookOutlined /> {curr.education}</span>,
              children: renderTimeline(curr.eduItems),
            },
            {
              key: '2',
              label: <span><SolutionOutlined /> {curr.experience}</span>,
              children: renderTimeline(curr.workItems),
            },
          ]}
        />

        <div className="title" style={{ marginTop: '100px' }} data-aos="fade-up">
          <h1>{curr.servicesTitle}</h1>
          <p>{curr.servicesSubtitle}</p>
        </div>

        <ServicesCards>
          {curr.services.map((service, index) => (
            <div key={index} className="service-box" onClick={() => setModalOpen(index)} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="icon-wrapper">{icons[index]}</div>
              <h2>{service.title}</h2>
              <div className="view-more">{curr.viewMore} <VscArrowRight /></div>
            </div>
          ))}
        </ServicesCards>

        <Modal
          centered
          open={modalOpen !== null}
          onCancel={() => setModalOpen(null)}
          footer={null}
          width={420}
          styles={{ 
            content: { backgroundColor: 'var(--box-bg)', border: '1px solid var(--border-color)', borderRadius: '24px' },
            header: { backgroundColor: 'transparent', borderBottom: 'none' }
          }}
        >
          {modalOpen !== null && (
            <ModalContent>
              <h3>{curr.services[modalOpen].title}</h3>
              {curr.services[modalOpen].desc.map((line, idx) => (
                <div key={idx} className="desc-item">
                  <span>✦</span>
                  <p>{line}</p>
                </div>
              ))}
            </ModalContent>
          )}
        </Modal>
      </div>
    </Wrapper>
  );
};

export default Services;