import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header id="header" className="header">
      <NavLink to="/" className="header_logo">
        {/* <img
          src="#"
          alt="logo"
        /> */}
        Nice Gadjet
      </NavLink>
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item is-active">
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink className="nav_link" to="/phones">
              Phones
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink className="nav_link" to="/tablets">
              Tablets
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink className="nav_link" to="/accessories">
              Accessories
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <NavLink to="/favourites" className="action">
          {/* <img
            src=""
            alt="favourites"
            className="action__favourites"
          /> */}
          favourites
        </NavLink>

        <NavLink to="/cart" className="action">
          {/* <img
            src=""
            alt="cart"
            className="action__cart"
          /> */}
          cart
        </NavLink>
      </div>
    </header>
  );
};
