import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { BurgerMenu } from '../BurgerMenu';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
          <li className="nav_item">
            <NavLink
              className={({ isActive }) => classNames(
                'nav_link',
                { 'is-active': isActive },
              )}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink
              className={({ isActive }) => classNames(
                'nav_link',
                { 'is-active': isActive },
              )}
              to="/phones"
            >
              Phones
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink
              className={({ isActive }) => classNames(
                'nav_link',
                { 'is-active': isActive },
              )}
              to="/tablets"
            >
              Tablets
            </NavLink>
          </li>

          <li className="nav_item">
            <NavLink
              className={({ isActive }) => classNames(
                'nav_link',
                { 'is-active': isActive },
              )}
              to="/accessories"
            >
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
          favs
        </NavLink>

        <NavLink to="/cart" className="action">
          {/* <img
            src=""
            alt="cart"
            className="action__cart"
          /> */}
          cart
        </NavLink>

        <NavLink
          to="#menu"
          className="action burger-button"
          onClick={openMenu}
        >
          {/* <img
            src=""
            alt="burger-icon"
            className="action__burger"
          /> */}
          burger
        </NavLink>
      </div>
      {isOpen && (
        <BurgerMenu
          isMenuOpen={isOpen}
          onMenuClose={closeMenu}
        />
      )}
    </header>
  );
};
