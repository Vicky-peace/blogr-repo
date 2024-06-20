import React, { useState } from 'react';
import './navbar.scss'; 

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const productItems = ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'];
  const companyItems = ['About', 'Team', 'Blog', 'Careers'];
  const connectItems = ['Contact', 'Newsletter', 'LinkedIn'];

  const Dropdown = ({ title, items }) => (
    <div className="dropdown">
      <button onClick={() => toggleDropdown(title)} className="dropdown-toggle">
        {title}
      </button>
      {openDropdown === title && (
        <div className="dropdown-content">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <nav className="navbar">
     
      <div className="menu-items">
      <h1 className="navbar-title">Blogr</h1>
        <Dropdown
          title="Product"
          items={productItems}
        />
        <Dropdown
          title="Company"
          items={companyItems}
        />
        <Dropdown
          title="Connect"
          items={connectItems}
        />
      </div>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
