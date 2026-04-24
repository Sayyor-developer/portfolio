import styled from 'styled-components';

export const HomeContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
  padding: 80px 0;

  .home-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
  }

  /* Social Icons Bar */
  .bar {
    flex-direction: column;
    gap: 25px;
    margin-right: 40px;
    
    svg {
      font-size: 24px;
      color: var(--primary-color);
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        transform: scale(1.2);
        color: var(--text-main);
      }
    }
  }

  /* Text Content */
  .home-left {
    flex: 1;
    h1 {
      font-size: 60px;
      color: var(--text-main);
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
      color: var(--primary-color);
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      color: var(--text-second);
      line-height: 1.6;
      max-width: 500px;
    }
  }

  /* Image Box */
  .home-right {
    flex: 1;
    justify-content: center;
    .box {
      width: 400px;
      height: 400px;
      background-color: var(--primary-color);
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; /* Modern shakl */
      overflow: hidden;
      transition: 0.5s;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        border-radius: 50%;
      }
    }
  }

  /* RESPONSIVE 380px gacha */
  @media (max-width: 992px) {
    .home-wrapper {
      flex-direction: column-reverse;
      text-align: center;
    }
    .bar {
      flex-direction: row;
      margin-right: 0;
      margin-top: 30px;
    }
    .home-left p {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    .home-left h1 { font-size: 40px; }
    .home-left h2 { font-size: 22px; }
    .home-right .box { width: 280px; height: 280px; }
  }

  @media (max-width: 380px) {
    padding: 60px 0;
    .home-left h1 { font-size: 32px; }
    .home-left p { font-size: 15px; }
    .home-right .box { width: 240px; height: 240px; }
  }
`;