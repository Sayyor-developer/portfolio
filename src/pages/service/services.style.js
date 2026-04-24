import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;

  .max-width {
    width: 100%;
    max-width: 1100px;
    padding: 0 20px;
  }

  .title {
    text-align: center;
    margin-bottom: 50px;
    h1 {
      font-size: var(--font-size-40);
      color: var(--text-main);
      margin-bottom: 10px;
    }
    p {
      color: var(--primary-color);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 14px;
    }
  }

  /* Ant Design Tabs custom styling */
  .ant-tabs-nav::before { border-bottom: 1px solid var(--border-color) !important; }
  .ant-tabs-tab-btn {
    font-size: 18px !important;
    font-weight: 500;
    color: var(--text-second) !important;
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn { color: var(--primary-color) !important; }
  .ant-tabs-ink-bar { background: var(--primary-color) !important; }

  @media (max-width: 380px) {
    padding: 50px 0;
    .ant-tabs-tab-btn { font-size: 15px !important; }
    .title h1 { font-size: 28px; }
  }
`;

export const TimelineWrapper = styled.div`
  margin-top: 40px;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;

  /* Yillar (Label) qismini oq va aniq qilish */
  .ant-timeline-item-label {
    color: #ffffff !important; /* Mutloq oq rang */
    font-weight: 600 !important;
    font-size: 14px !important;
    opacity: 0.9;
  }

  /* Timeline chizig'i va nuqtasi */
  .ant-timeline-item-tail {
    border-inline-start: 2px solid var(--border-color) !important;
  }

  .ant-timeline-item-head {
    background-color: var(--bg-color) !important;
    border-color: var(--primary-color) !important;
    border-width: 3px !important;
  }

  /* Karta stili */
  .qualification-card {
    background: var(--box-bg);
    border: 1px solid var(--border-color);
    padding: 22px;
    border-radius: 16px;
    text-align: left;
    transition: 0.3s ease;
    
    &:hover {
      border-color: var(--primary-color);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px var(--shadow-color);
    }

    h3 { 
      color: var(--text-main); 
      font-size: 18px; 
      margin-bottom: 5px; 
    }
    span { 
      color: var(--primary-color); 
      font-size: 14px; 
      display: block; 
      margin-bottom: 10px; 
      font-weight: 500; 
    }
    p { 
      color: var(--text-second); 
      font-size: 13px; 
      line-height: 1.6; 
      margin: 0; 
    }
  }

  @media (max-width: 576px) {
    .ant-timeline-item-label {
      font-size: 12px !important;
      padding-bottom: 10px;
    }
  }
`;

export const ServicesCards = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  .service-box {
    background-color: var(--box-bg);
    border: 1px solid var(--border-color);
    padding: 40px 30px;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:hover {
      transform: translateY(-10px);
      border-color: var(--primary-color);
      box-shadow: 0 20px 40px var(--shadow-color);
    }

    .icon-wrapper { font-size: 45px; color: var(--primary-color); margin-bottom: 25px; }
    h2 { font-size: 22px; color: var(--text-main); margin-bottom: 15px; }
    
    .view-more {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--primary-color);
      font-weight: 600;
      font-size: 14px;
      margin-top: auto;
    }
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
    .service-box { padding: 30px 20px; h2 { font-size: 19px; } }
  }
`;

export const ModalContent = styled.div`
  padding: 10px 0;
  h3 {
    color: var(--text-main) !important;
    font-size: 22px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 12px;
  }
  .desc-item {
    display: flex;
    gap: 12px;
    margin-bottom: 15px;
    align-items: flex-start;
    span { color: var(--primary-color); font-size: 18px; }
    p { color: var(--text-second); margin: 0; font-size: 15px; line-height: 1.6; }
  }
`;