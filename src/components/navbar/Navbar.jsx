import React, { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import './navbar.css'; 

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const productItems = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
  const companyItems = ['About', 'Team', 'Blog', 'Careers'];
  const connectItems = ['Contact', 'Newsletter', 'LinkedIn'];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.style.overflow = showMenu ? 'hidden' : 'auto'; // Toggle scrolling
  };

  const closeMenu = () => {
    setShowMenu(false);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <nav className={`navbar ${showMenu ? 'menu-open' : ''}`}>
      <div className="navbar-content">
        <h1 className={`navbar-title ${showMenu ? 'text-black' : 'text-white'}`}>Blogr</h1>
        <div className={`${showMenu ? 'menu-items-visible' : 'menu-items-hidden'}`}>
          <Dropdown
            title="Product"
            items={productItems}
            isOpen={openDropdown === 'product'}
            toggleDropdown={() => toggleDropdown('product')}
          />
          <Dropdown
            title="Company"
            items={companyItems}
            isOpen={openDropdown === 'company'}
            toggleDropdown={() => toggleDropdown('company')}
          />
          <Dropdown
            title="Connect"
            items={connectItems}
            isOpen={openDropdown === 'connect'}
            toggleDropdown={() => toggleDropdown('connect')}
          />
        </div>
      </div>
      <div className="menu-toggle">
        <button onClick={toggleMenu} className={`${showMenu ? 'menu-open-btn' : 'menu-close-btn'}`}>
          {showMenu ? (
            <span className="icon close-icon"></span>
          ) : (
            <span className="icon hamburger-icon"></span>
          )}
        </button>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <ul>
            <li>Product</li>
            <li>Company</li>
            <li>Connect</li>
          </ul>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
          <button onClick={closeMenu} className="close-menu">Close</button>
        </div>
      )}
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
