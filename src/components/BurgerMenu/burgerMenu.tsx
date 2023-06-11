import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return window.location.pathname === path;
  };

  return (
    <>
      {isMenuOpen && (
        <div className="menu">
          <div className="menu__top">
            <div className="menu__top__logo">
              <NavLink to="/" className="menu__top__logo__icon">
                Nice gadjet
              </NavLink>
            </div>
            <div
              className="menu__top__close"
              onClick={toggleMenu}
              role="button"
              tabIndex={0}
              onKeyDown={toggleMenu}
            >
              <span className="menu__top__close__icon">
                X
              </span>
            </div>

          </div>
          <div className="menu__content">
            <ul className="menu__content__list">
              <li className="menu__content__item">
                <NavLink
                  to="/"
                  className={classNames('menu__content__item__link', {
                    content__active: isActive('/'),
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="menu__content__item">
                <NavLink
                  to="/phones"
                  className={classNames('menu__content__item__link', {
                    active: isActive('/phones'),
                  })}
                >
                  Phones
                </NavLink>
              </li>
              <li className="menu__content__item">
                <NavLink
                  to="/tablets"
                  className={classNames('menu__content__item__link', {
                    active: isActive('/tablets'),
                  })}
                >
                  Tablets
                </NavLink>
              </li>
              <li className="menu__content__item">
                <NavLink
                  to="/accessories"
                  className={classNames('menu__content__item__link', {
                    active: isActive('/accessories'),
                  })}
                >
                  Accessories
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="menu__bottom">
            <NavLink
              to="/favourites"
              className={classNames('menu__bottom__item', {
                bottom__active: isActive('/favourites'),
              })}
            >
              Favourites
            </NavLink>

            <NavLink
              to="/cart"
              className={classNames('menu__bottom__item', {
                bottom__active: isActive('/cart'),
              })}
            >
              Cart
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
