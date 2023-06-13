/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  isMenuOpen: boolean;
  onMenuClose: () => void;
}
export const BurgerMenu: React.FC<Props> = ({
  isMenuOpen,
  onMenuClose,
}) => {
  return (
    <div className={classNames(
      'menu',
      { 'menu--active': isMenuOpen },
    )}
    >
      <div className="menu__top">
        <div className="menu__top__logo">
          <NavLink
            to="/"
            className="menu__top__logo__icon"
            onClick={onMenuClose}
          >
            <img
              src="icons/logo/Logo.svg"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="menu__top__close">
          <div
            className="menu__top__close__icon"
            onClick={onMenuClose}
            role="button"
            tabIndex={0}
          >
            <img
              src="icons/Close.svg"
              alt="Close"
            />
          </div>
        </div>
      </div>
      <div className="menu__content">
        <ul className="menu__content__list">
          <li className="menu__content__item">
            <NavLink
              to="/"
              className={({ isActive }) => classNames(
                'menu__content__item__link',
                { 'is-active': isActive },
              )}
              onClick={onMenuClose}
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
              onClick={onMenuClose}
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
              onClick={onMenuClose}
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
              onClick={onMenuClose}
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
            { 'bottom-active': isActive },
          )}
          onClick={onMenuClose}
        >
          <img
            src="icons/Favourites.svg"
            alt="favourites"
          />
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => classNames(
            'menu__bottom__item',
            { 'bottom-active': isActive },
          )}
          onClick={onMenuClose}
        >
          <img
            src="icons/Shopping_bag(Cart).svg"
            alt="cart"
          />
        </NavLink>
      </div>
    </div>
  );
};
