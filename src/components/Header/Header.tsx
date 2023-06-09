import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#home" className="header_logo">
        {/* <img
          src="#"
          alt="logo"
        /> */}
        Nice Gadjet
      </a>
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item is-active">
            <a className="nav_link" href="#home">
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
        <a href="#favorites" className="action">
          {/* <img
            src=""
            alt="favorites"
            className="action__favourites"
          /> */}
          favorites
        </a>

        <a href="#basket" className="action">
          {/* <img
            src=""
            alt="basket"
            className="action__basket"
          /> */}
          basket
        </a>
      </div>
    </header>
  );
};
