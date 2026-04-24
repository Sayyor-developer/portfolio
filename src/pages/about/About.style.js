import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  padding: 100px 0;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;

  .title {
    text-align: center;
    margin-bottom: 60px;
    h1 {
      font-size: var(--font-size-40);
      color: var(--text-main);
    }
    p {
      color: var(--primary-color);
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
  }

  .about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }

  .about-left {
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      max-width: 400px;
      border-radius: 20px;
      filter: grayscale(20%);
      transition: 0.3s;
      &:hover {
        filter: grayscale(0%);
      }
    }
  }

  .about-right {
    flex: 1;
    .description {
      font-size: 18px;
      color: var(--text-second);
      line-height: 1.6;
      margin-bottom: 30px;
    }
  }

  .right-box-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }

  .stat-box {
    background-color: var(--box-bg);
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 10px var(--shadow-color);
    transition: 0.3s;

    &:hover {
      border-color: var(--primary-color);
      transform: translateY(-5px);
    }

    h2 {
      color: var(--primary-color);
      font-size: 24px;
      margin-bottom: 5px;
    }
    p {
      color: var(--text-main);
      font-size: 14px;
      font-weight: 500;
    }
  }

  .btn {
    background-color: var(--primary-color);
    color: #fff;
    padding: 12px 28px;
    border-radius: 8px;
    gap: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
      gap: 15px;
    }
  }

  /* RESPONSIVE */
  @media (max-width: 992px) {
    .about-content {
      flex-direction: column;
      text-align: center;
    }
    .about-left img {
      max-width: 320px;
    }
  }

  @media (max-width: 500px) {
    .right-box-bar {
      grid-template-columns: 1fr; /* Stat-boxlar bitta ustunda */
      gap: 15px;
    }
    .title h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 380px) {
    padding: 60px 0;
    .description {
      font-size: 15px;
    }
    .about-left img {
      max-width: 260px;
    }
  }
`;