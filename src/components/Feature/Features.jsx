import React from 'react';
import './feature.scss';

function FeaturesSection() {
  return (
    <section className="features">
      <div className="card">
        <h3>Introducing an extensible editor</h3>
        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content.</p>
      </div>
      <div className="card">
        <h3>State of the Art Infrastructure</h3>
        <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity.</p>
      </div>
      <div className="card">
        <h3>Free, open, simple</h3>
        <p>Blogr is a free and open source application backed by a large community of helpful developers.</p>
      </div>
    </section>
  );
}

export default FeaturesSection;
