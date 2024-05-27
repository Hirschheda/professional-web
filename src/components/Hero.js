import React from 'react';
import './style.css'
function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <h1>Hirsch Chheda</h1>
      <p>I'm <span class="typed" data-typed-items="a Coder,a Day Trader,an Athlete"></span></p>
    </div>
    
  </section>
  );
}

export default Hero;