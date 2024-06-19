import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul className="links">
          <li><a href="#about">About</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
        <ul className="links">
          <li><a href="#contact">Contact</a></li>
          <li><a href="#newsletter">Newsletter</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
