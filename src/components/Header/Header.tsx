import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { BurgerMenu } from '../BurgerMenu';
import { FavoritesCounter } from '../FavoritesCounter/FavoritesCounter';
import { CartCounter } from '../CartCounter';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={classNames(
        'header',
        { sticky: isSticky },
      )}
    >
      <NavLink to="/" className="header_logo">
        <img
          src="icons/logo/Logo.svg"
          alt="logo"
        />
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
        <NavLink
          to="/favourites"
          className={({ isActive }) => classNames(
            'action',
            { 'bottom-active': isActive },
          )}
        >
          <FavoritesCounter />
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => classNames(
            'action',
            { 'bottom-active': isActive },
          )}
        >
          <CartCounter />
        </NavLink>

        <NavLink
          to="#menu"
          className="action burger-button"
          onClick={openMenu}
        >
          <img
            src="icons/Menu.svg"
            alt="burger-icon"
            className="action__burger"
          />
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
