import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

/* eslint-disable jsx-a11y/anchor-is-valid */
export const BurgerMenu = () => {
  return (
    <div className="menu">
      <div className="menu__content">
        <ul className="menu__content__list">
          <li className="menu__content__item">
            <NavLink
              to="/"
              className={({ isActive }) => classNames(
                'menu__content__item__link',
                { 'is-active': isActive },
              )}
            >
              Home
            </NavLink>
          </li>
          <li className="menu__content__item">
            <NavLink
              to="/phones"
              className={({ isActive }) => classNames(
                'menu__content__item__link',
                { 'is-active': isActive },
              )}
            >
              Phones
            </NavLink>
          </li>
          <li className="menu__content__item">
            <NavLink
              to="/tablets"
              className={({ isActive }) => classNames(
                'menu__content__item__link',
                { 'is-active': isActive },
              )}
            >
              Tablets
            </NavLink>
          </li>
          <li className="menu__content__item">
            <NavLink
              to="/accessories"
              className={({ isActive }) => classNames(
                'menu__content__item__link',
                { 'is-active': isActive },
              )}
            >
              Accessories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="menu__bottom">
        <NavLink
          to="/favourites"
          className={({ isActive }) => classNames(
            'menu__bottom__item',
            { 'is-active': isActive },
          )}
        >
          Favourites
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => classNames(
            'menu__bottom__item',
            { 'is-active': isActive },
          )}
        >
          Cart
        </NavLink>
      </div>
    </div>
  );
};
