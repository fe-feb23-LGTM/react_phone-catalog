/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../Card/Card';
import { Phone } from '../../types/Phone';

export const Favorites = () => {
  const [favItems, setFavItems] = useState<Phone[]>([]);

  const handleFavClick = () => {
    const phonesString = localStorage.getItem('fav');

    if (phonesString) {
      const phones = JSON.parse(phonesString);

      setFavItems(phones);
    }
  };

  useEffect(() => {
    handleFavClick();
  }, []);

  return (
    <div className="favorites__wraper">
      <div className="productTable">
        <div className="productTable__path">
          <NavLink to="/">
            <img
              src="icons/Home.svg"
              alt="icons/Home"
              className="productTable__path__homeIcon"
            />
          </NavLink>

          <img
            alt="Vector(Stroke)"
            src="icons/Vector(Stroke).svg"
            className="productTable__path__arrow"
          />

          <span className="productTable__path__text">Favorites</span>
        </div>

        <h2 className="productTable__heading">Favorites</h2>

        <div className="productTable__modelsCount">
          {`${favItems.length} models`}
        </div>

        {favItems.length > 0 ? (
          <div className="productTable__productList">
            {favItems.map((phone) => (
              <div
                className="fav__item"
                key={phone.id}
                onClick={handleFavClick}
              >
                <Card phone={phone} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="favorites__text">Favorites is empty!</h1>
            <img src="icons/Favorites/NoFavorites.svg" alt="noFavorites" />
          </div>
        )}
      </div>
    </div>
  );
};
