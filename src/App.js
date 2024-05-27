import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';

function App() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize Typed.js
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const typed_strings = typedElement.getAttribute('data-typed-items').split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Skills />
        <Experience />
        <Extracurriculars />
        <Contact />
      </main>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  );
}

export default App;