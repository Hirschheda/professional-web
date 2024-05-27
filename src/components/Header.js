import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./style.css";

function Header() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img  alt="Profile" className="img-fluid rounded-circle" />
          <h1 className="text-light"><a href="index.html">Hirsch Chheda</a></h1>
          <div className="social-links mt-3 text-center">
            <a href="https://twitter.com/hersheyChhedar" target="_blank" className="twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/hershey_cheddar/" target="_blank" className="instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/hirsch-chheda-4355b5209/" target="_blank" className="linkedin"><FaLinkedin /></a>
            <a href="https://github.com/hirschheda" target="_blank" className="github"><FaGithub /></a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active" onClick={(e) => handleScroll(e, '#hero')}><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto" onClick={(e) => handleScroll(e, '#about')}><i className="bx bx-user"></i> <span>About Me</span></a></li>
            <li><a href="#skills" className="nav-link scrollto" onClick={(e) => handleScroll(e, '#skills')}><i className="bx bx-code"></i> <span>Skills</span></a></li>
            <li><a href="#experience" className="nav-link scrollto" onClick={(e) => handleScroll(e, '#experience')}><i className="bx bx-file-blank"></i> <span>Experience</span></a></li>
            <li><a href="#extracurriculars" className="nav-link scrollto" onClick={(e) => handleScroll(e, '#extracurriculars')}><i className="bx bx-book"></i> <span>Extracurriculars</span></a></li>
            <li><a href="#contact" className="nav-link scrollto" onClick={(e) => handleScroll(e, '#contact')}><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;