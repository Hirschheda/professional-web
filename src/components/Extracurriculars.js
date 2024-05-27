import React from 'react';
import './style.css'
function Extracurriculars() {
  return (
    <section id="extracurriculars" className="extracurriculars">
      <div className="container">
        <div className="section-title">
          <h2>Extracurriculars/Interests/Miscellaneous</h2>
          <p>Here are some of my extracurricular activities, interests, and miscellaneous information:</p>
        </div>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3>Hackathons</h3>
            <ul>
              <li><strong>Citrus Hack</strong>: Participated and won the Best Innovation Award.</li>
              <li><strong>Cutie Hack</strong>: Developed an AI-based solution for real-time language translation.</li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3>Coding Clubs</h3>
            <ul>
              <li><strong>ACM</strong>: Active member, participating in weekly coding challenges and workshops.</li>
              <li><strong>AI Enthusiasts</strong>: Engaged in AI/ML projects and discussions.</li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3>Volunteer Work</h3>
            <ul>
              <li><strong>Code for Good</strong>: Volunteered as a coding instructor for underprivileged children.</li>
              <li><strong>Green Earth</strong>: Participated in environmental sustainability projects and clean-up drives.</li>
            </ul>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <h3>Interests</h3>
            <ul>
              <li><strong>Technology</strong>: Passionate about the latest advancements in technology and AI.</li>
              <li><strong>Sports</strong>: Enjoy playing soccer and running marathons.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Extracurriculars;