import React from 'react';
import './footer.scss'; 
const Footer = () => {
  const productItems = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
  const connectItems = ['Contact', 'Newsletter', 'LinkedIn'];

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="text-left">
            <h2>Blogr</h2>
          </div>
          <div className="text-left">
            <h2>Product</h2>
            <ul>
              {productItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-left">
            <h2>Connect</h2>
            <ul>
              {connectItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
