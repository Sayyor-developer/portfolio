import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;

  .title {
    text-align: center;
    margin-bottom: 50px;
    h1 {
      font-size: var(--font-size-40);
      color: var(--text-main);
    }
    p {
      color: var(--primary-color);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  .max-width {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const FilterMenu = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 50px;

  button {
    padding: 10px 25px;
    border-radius: 30px;
    border: 1px solid var(--primary-color);
    background: transparent;
    color: var(--text-main);
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover, &.active {
      background-color: var(--primary-color);
      color: #fff;
    }
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
`;

export const ProjectCard = styled.div`
  background-color: var(--box-bg);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);

  &:hover {
    transform: translateY(-10px);
    .overlay { opacity: 1; }
    .img-box img { transform: scale(1.1); }
  }

  .img-box {
    position: relative;
    height: 220px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s ease;
    }

    .overlay {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      opacity: 0;
      transition: 0.3s ease;

      svg {
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        &:hover { color: var(--primary-color); }
      }
    }
  }

  .content {
    padding: 20px;

    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 15px;

      span {
        font-size: 12px;
        padding: 4px 10px;
        background: var(--primary-light); /* Rangli shaffof fon */
        color: var(--primary-color);
        border-radius: 5px;
        font-weight: 600;
      }
    }

    h3 {
      color: var(--text-main);
      margin-bottom: 10px;
      font-size: 20px;
    }

    p {
      color: var(--text-second);
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;