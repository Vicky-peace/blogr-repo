import React from 'react';
import './dropdown.scss'; // Importing the SCSS styles

const Dropdown = ({ title, items, isOpen, toggleDropdown }) => {
  return (
    <div className="dropdown">
      <button
        onClick={toggleDropdown}
        className="dropdown-toggle"
      >
        {title}
      </button>
      {isOpen && (
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
};

export default Dropdown;
