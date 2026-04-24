import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 999;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);

  .max-width { padding: 0 20px; }

  .header-cont { display: flex; justify-content: space-between; align-items: center; }

  .logo h1 { color: var(--primary-color); cursor: pointer; }

  .nav-list { display: flex; gap: 30px; list-style: none; }
  .nav-list li { cursor: pointer; transition: 0.3s; &:hover { color: var(--primary-color); } }

  .icons { display: flex; gap: 15px; position: relative; }
  .icons svg { font-size: 25px; cursor: pointer; }

  .menu-icon { display: none; cursor: pointer; }

  /* COLOR MODAL */
  .color-filter-modal {
    position: absolute;
    top: 40px;
    right: 0;
    display: ${({ colorModal }) => (colorModal ? "grid" : "none")};
    grid-template-columns: repeat(3, 30px);
    gap: 10px;
    background: #fff;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    z-index: 1500;
  }
    background-color: var(--header-bg); /* Mana shu joyi muhim! */
  color: var(--text-color);
  transition: all 0.3s ease; /* Rang silliq o'zgarishi uchun */

  h1, li {
    color: var(--text-color);
  }

  .active {
    color: var(--primary-color); /* Color modal o'zgartiradigan rang */
  }

  /* Modallar ham dark mode-da ko'rinishi uchun */
  .lang-modal, .color-filter-modal {
    background-color: var(--header-bg);
    border: 1px solid var(--text-color);
    color: var(--text-color);
  }

  .color { width: 30px; height: 30px; border-radius: 6px; cursor: pointer; }
  .red { background: #ff6347; }
  .blue { background: #2563eb; }
  .green { background: #28a745; }
  .yellow { background: #ffc107; }
  .purple { background: #6f42c1; }
  .orange { background: #fd7e14; }

  /* LANGUAGE MODAL */
  .lang-modal {
    position: absolute;
    top: 55px;
    right: -20px;
    display: ${({ langModal }) => (langModal ? "flex" : "none")};
    flex-direction: column;
    gap: 5px;
    width: 150px;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 1500;
  }
  .lang-modal button { padding: 6px 10px; border: none; border-radius: 8px; cursor: pointer; background: #fff; text-align: start; transition: 0.2s; &:hover { background: var(--primary-color); color: #fff; } }

  /* SIDEBAR */
  .sidebar {
    position: fixed;
    top: 0;
    right: -280px;
    width: 280px;
    height: 100vh;
    background: #fff;
    box-shadow: -5px 0 20px rgba(0,0,0,0.2);
    transition: 0.3s ease;
    z-index: 1200;
    padding: 20px;
  }
  .sidebar.open { right: 0; }
  .sidebar ul { list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 20px; font-size: 18px; }

  @media (max-width: 900px) {
    .nav-list { display: none; }
    .menu-icon { display: block; }
  }

  .nav-list li.active,
.sidebar ul li.active {
  color: var(--primary-color); /* yoki boshqa rang */
  transform: translateY(-5px);
  border-bottom: 2px solid var(--primary-color); /* optional */
}


`;
