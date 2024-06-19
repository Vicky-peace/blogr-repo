import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">Blogr</div>
      <nav className="nav">
        <ul>
          <li><a href="#product">Product</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
      </nav>
      <div>
        <button className="btn">Login</button>
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
