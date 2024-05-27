import React from 'react';
import "./style.css"
function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>I am a computer engineering student with a strong interest in software development, vehicle technology research, and environmental sustainability. I have a background in various technical skills, including C++, Python, JavaScript, and more.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img className="img-fluid" alt="Profile Pic" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Student</h3>
            <p className="fst-italic">
              A dedicated and hardworking individual with a passion for coding, trading, and athletic pursuits.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>15 March 2003</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+949 880 5104</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Riverside, USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>hirschchheda@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Resume:</strong> <a href="/img/Hirsch-Chheda-Resume.pdf" target="_blank">Resume</a></li>
                </ul>
              </div>
            </div>
            <p>
              I am currently pursuing my degree in Computer Engineering at the University of California, Riverside, and am expected to graduate in June 2025 with a GPA of 3.7. My interests include software development, vehicle technology research, and environmental sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;