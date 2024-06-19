import React from 'react';
import Image2 from '../../images/bg-pattern-intro-desktop.svg';
import './heroSection.scss'; 
const Hero = () => {
  return (
    <div className="hero">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${Image2})` }}
      ></div>
      <div className="hero-content">
        <h1 className="hero-title">
          A modern publishing platform
        </h1>
        <p className="hero-subtitle">
          Grow your audience and build your online brand
        </p>
        <div className="buttons">
          <button className="button start-button">
            Start for Free
          </button>
          <button className="button learn-button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
