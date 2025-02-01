import React from 'react';
import "./style.css"

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Experience &amp; Education</h2>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="experience-title">Education</h3>
            <div className="experience-item">
              <h4>Bachelors in Computer Engineering</h4>
              <h5>2021 - 2025</h5>
              <p><em>University of California-Riverside, Riverside, CA</em></p>
              <p>Relevant Coursework: Web Development, Intro to A.I., Embedded Systems, Machine Learning</p>
            </div>
            <div className="experience-item">
              <h4>High School Diploma</h4>
              <h5>2017 - 2021</h5>
              <p><em>Irvine High School, Irvine, CA</em></p>
              <p>GPA: 3.9</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="experience-title">Professional Experience</h3>
            <div className="experience-item">
              <h4>Lab Assistant</h4>
              <h5>May 2023 - March 2024</h5>
              <p><em>University Of California-Riverside, Center For Environmental Research And Technology</em></p>
              <ul>
                <li>Contributed to research projects aimed at developing more efficient and environmentally-friendly vehicle technologies.</li>
                <li>Managed the calibration and maintenance of testing apparatus to ensure consistent performance and precision in measurements.</li>
                <li>Assisted in collecting and analyzing car emissions samples from various vehicle models to ensure compliance with environmental standards through filters.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4>Software Engineering Intern</h4>
              <h5>June 2023 - August 2023</h5>
              <p><em>First American, Santa Ana, CA</em></p>
              <ul>
                <li>Dedicated significant time to understanding and coding in JavaScript, laying a robust foundation for web application development.</li>
                <li>Learned and implemented the intricate processes of integrating APIs from the front end to the back end, ensuring smooth data flow and functionality across application layers.</li>
                <li>Responsible for creating comprehensive tests for the WireLink UI, a critical interface used for wire transfers, ensuring its reliability and robustness.</li>
                <li>Leveraged the power of the Cypress automation testing tool, which streamlined and enhanced the accuracy of the testing process.</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4>Intern</h4>
              <h5>June 2022 - August 2022</h5>
              <p><em>Architectural Iron Designs, Inc., Bridgewater, NJ</em></p>
              <ul>
                <li>Organized and cataloged different projects from an architectural metalwork company called P.A. Fiebiger.</li>
                <li>Documented the details in Excel for each of their projects, making it easy to access all the files and blueprints in a clear and legible manner.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Experience;
