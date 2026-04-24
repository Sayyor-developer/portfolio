// import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Header from './components/header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import './App.css';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Services from './pages/service/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

function App() {
  const [lang, setLang] = useState("en"); // Global til state

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer />
    
      <Header lang={lang} setLang={setLang} />

     
      <Home lang={lang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <Services lang={lang} />
      <Portfolio lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}

export default App;
