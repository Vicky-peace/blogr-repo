import React from 'react';
import './heroSection.scss';

function HeroSection() {
  return (
    <section className="hero">
      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
      <div className="buttons">
        <button className="btn">Start for Free</button>
        <button className="btn btn-light">Learn More</button>
      </div>
    </section>
  );
}

export default HeroSection;
