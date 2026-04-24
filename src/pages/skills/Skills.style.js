import styled from 'styled-components';

export const SkillsContainer = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;

  .skills-title {
    text-align: center;
    font-size: var(--font-size-40);
    color: var(--text-main);
    margin-bottom: 40px;
  }

  .skills-menu {
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 50px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 20px;

    h1 {
      font-size: 18px;
      cursor: pointer;
      color: var(--text-second);
      transition: 0.3s;
      font-weight: 500;
      position: relative;

      &.active {
        color: var(--primary-color);
        &::after {
          content: '';
          position: absolute;
          bottom: -22px;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--primary-color);
        }
      }

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  .skills-date-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }

  .texnologies {
    background-color: var(--box-bg);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px var(--shadow-color);
    border: 1px solid var(--border-color);

    .tech-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      h2 {
        font-size: 18px;
        color: var(--text-main);
      }

      span {
        color: var(--primary-color);
        font-weight: 600;
      }
    }

    /* Progress bar stili */
    .a {
      width: 100%;
      height: 8px;
      background-color: var(--border-color);
      border-radius: 10px;
      overflow: hidden;

      .b {
        height: 100%;
        background-color: var(--primary-color);
        border-radius: 10px;
        transition: width 1s ease-in-out;
      }
    }
  }

  @media (max-width: 768px) {
  padding: 60px 20px;
  
  .skills-menu {
    gap: 10px;
    h1 {
      font-size: 15px; /* Planchetlar uchun biroz kichikroq */
    }
  }
}

/* Aynan 380px va undan kichik ekranlar uchun */
@media (max-width: 380px) {
  padding: 40px 15px;

  .skills-title {
    font-size: 28px; /* Sarlavha sig'ishi uchun */
    margin-bottom: 30px;
  }

  .skills-menu {
    gap: 8px;
    margin-bottom: 30px;
    
    h1 {
      font-size: 13px; /* Matnlar qisqarib ketmasligi uchun */
      padding: 5px 0;
      
      &.active::after {
        bottom: -21px; /* Chiziqni joyiga to'g'irlash */
      }
    }
  }

  .skills-date-content {
    grid-template-columns: 1fr; /* Hammasi bitta ustunda */
    gap: 15px;
  }

  .texnologies {
    padding: 15px; /* Ichki joyni kamaytirish */
    
    .tech-info {
      h2 {
        font-size: 16px; /* Skill nomi */
      }
      span {
        font-size: 14px; /* Foiz ko'rsatkichi */
      }
    }
    
    .a {
      height: 6px; /* Progress bar biroz ingichka */
    }
  }
}
`;