import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#home">
        <img
          src="../../img/header/Logo.png"
          alt="logo"
        />
      </a>
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <a className="nav_link is-active" href="#home">
              Home
            </a>
          </li>

          <li className="nav_item">
            <a className="nav_link" href="#phones">
              Phones
            </a>
          </li>

          <li className="nav_item">
            <a className="nav_link" href="#tablets">
              Tablets
            </a>
          </li>

          <li className="nav_item">
            <a className="nav_link" href="#accessories">
              Accessories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
