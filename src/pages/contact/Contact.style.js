import styled from 'styled-components';

export const ContactWrapper = styled.section`
  width: 100%;
  padding: 80px 0;
  background-color: var(--bg-color);
  display: flex;
  justify-content: center;
  transition: all 0.3s ease;

  .contact-main {
    width: 100%;
    max-width: 1100px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
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

  .contact-container {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
  }

  @media (max-width: 992px) {
    .contact-container {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 380px) {
    padding: 50px 0;
    .title h1 { font-size: 28px; }
  }
`;

export const InfoCards = styled.div`
  flex: 0 0 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .info-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    background-color: var(--box-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      border-color: var(--primary-color);
      transform: translateX(8px);
    }

    .icon {
      font-size: 24px;
      color: var(--primary-color);
      background: var(--bg-color);
      min-width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    div {
      h3 { color: var(--text-main); font-size: 16px; margin-bottom: 2px; }
      p { color: var(--text-second); font-size: 13px; word-break: break-all; }
    }
  }

  @media (max-width: 992px) {
    flex: 1;
    width: 100%;
  }

  @media (max-width: 380px) {
    .info-item { padding: 15px; gap: 12px; }
  }
`;

export const ContactForm = styled.form`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .input-group {
    display: flex;
    gap: 15px;
  }

  .input-box {
    flex: 1;
    input, textarea {
      width: 100%;
      padding: 14px 18px;
      background-color: var(--box-bg);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      color: var(--text-main);
      font-size: 15px;
      outline: none;
      transition: 0.3s;

      &::placeholder { color: var(--text-second); opacity: 0.5; }
      &:focus { border-color: var(--primary-color); }
    }
    textarea { resize: none; }
  }

  button {
    padding: 15px 35px;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: max-content;
    transition: 0.3s;

    &:hover:not(:disabled) { opacity: 0.9; transform: translateY(-2px); }
    &:disabled { cursor: not-allowed; opacity: 0.7; }
  }

  @media (max-width: 600px) {
    .input-group { flex-direction: column; }
    button { width: 100%; }
  }

  @media (max-width: 380px) {
    input, textarea { font-size: 14px; padding: 12px 15px; }
  }
`;