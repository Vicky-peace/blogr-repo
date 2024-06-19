import React from 'react';
import Phone from '../../images/illustration-phones.svg';
import './combined.scss'; // Importing combined styles

const Content2 = () => {
  return (
    <div className="content2">
      <div className="container">
        <div className="text-area">
          <h2>State of the Art Infrastructure</h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.
          </p>
          <p>
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
        <img src={Phone} alt="Phone infrastructure" />
      </div>
    </div>
  );
};

export default Content2;
