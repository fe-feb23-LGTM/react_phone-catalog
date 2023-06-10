/* eslint-disable jsx-a11y/anchor-is-valid */
export const BurgerMenu = () => {
  return (
    <div className="menu">
      <div className="menu__top">
        <div className="menu__top__logo">
          <span className="menu__top__logo__icon">
            Nice gadjet
          </span>
        </div>
        <div className="menu__top__close">
          <span className="menu__top__close__icon">
            X
          </span>
        </div>

      </div>
      <div className="menu__content">
        <ul className="menu__content__list">
          <li className="menu__content__list__item">
            <a href="#" className="menu__content__list__item__link">
              Home
            </a>
          </li>
          <li className="menu__content__list__item">
            <a href="#" className="menu__content__list__item__link">
              Phones
            </a>
          </li>
          <li className="menu__content__list__item">
            <a href="#" className="menu__content__list__item__link">
              Tablets
            </a>
          </li>
          <li className="menu__content__list__item">
            <a href="#" className="menu__content__list__item__link">
              Accessories
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
