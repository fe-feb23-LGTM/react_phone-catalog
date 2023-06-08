import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#home" className="header_link">
        <img
          src="../../../public/icons/logo/Nice_Gadget.svg"
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
      <div className="header__actions">
        <a href="#favorites" className="favorites">
          <img src="" alt="favorites" />
        </a>
        <a href="#basket" className="basket">
          <img src="" alt="basket" />
        </a>
      </div>
    </header>
  );
};
