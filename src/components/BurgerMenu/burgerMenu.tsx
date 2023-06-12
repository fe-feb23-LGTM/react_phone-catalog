/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}
export const BurgerMenu: React.FC<Props> = ({
  isMenuOpen,
  onMenuToggle,
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
            onClick={onMenuToggle}
          >
            Nise Gadjet
          </NavLink>
        </div>
        <div className="menu__top__close">
          <span
            className="menu__top__close__icon"
            onClick={onMenuToggle}
            role="button"
            tabIndex={0}
          >
            X
          </span>
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
              onClick={onMenuToggle}
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
              onClick={onMenuToggle}
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
              onClick={onMenuToggle}
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
              onClick={onMenuToggle}
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
          onClick={onMenuToggle}
        >
          Favourites
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => classNames(
            'menu__bottom__item',
            { 'bottom-active': isActive },
          )}
          onClick={onMenuToggle}
        >
          Cart
        </NavLink>
      </div>
    </div>
  );
};
