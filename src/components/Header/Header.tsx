/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { BurgerMenu } from '../BurgerMenu';
import { FavoritesCounter } from '../FavoritesCounter/FavoritesCounter';
import { CartCounter } from '../CartCounter';
import { EmptyCartModal } from '../EmptyCartModal';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isloged, setIsloged] = useState<string | null>(null);
  const [showModal, setShowModal] = useState('');

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogOut = () => {
    setIsloged('false');
    localStorage.setItem('log', 'false');
    setShowModal('you was logged out');
    setTimeout(() => {
      setShowModal('');
    }, 2000);
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
    setInterval(() => {
      setIsloged(localStorage.getItem('log'));
    }, 1000);
  }, []);

  return (
    <>
      <header
        id="header"
        className="header"
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
              'action action--favourites',
              { 'bottom-active': isActive },
            )}
          >
            <FavoritesCounter />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => classNames(
              'action action--cart',
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

          {isloged === 'true' ? (
            <NavLink
              to="/"
              className="action authorization"
              onClick={handleLogOut}
            >
              <img
                className="authorization_icon"
                src="icons/exit-sign-icon.svg"
                alt="signupicon"
              />
            </NavLink>
          ) : (
            <NavLink
              to="/authorization"
              className="action authorization"
            >
              <img
                className="authorization_icon"
                src="icons/log-in-icon.svg"
                alt="signupicon"
              />
            </NavLink>
          )}

        </div>
        {isOpen && (
          <BurgerMenu
            isMenuOpen={isOpen}
            onMenuClose={closeMenu}
          />
        )}
      </header>
      <div className="header__top" id="header__top" />

      {showModal && (
        <EmptyCartModal
          isCloseNeeded={false}
          msg={showModal}
          title="Congratulations!"
        />
      )}
    </>
  );
};
