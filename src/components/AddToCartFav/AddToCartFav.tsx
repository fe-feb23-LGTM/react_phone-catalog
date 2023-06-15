import classNames from 'classnames';
import { useState } from 'react';
import { Phone } from '../../types/Phone';

function isPhoneAdded(id: number, to: string) {
  if (!localStorage.getItem(to)) {
    return false;
  }

  const phones = localStorage.getItem(to)
    ? JSON.parse(localStorage.getItem(to) || '')
    : [];

  return phones.some((phone: Phone) => phone.id === id);
}

// isAdd if equal to true then phone will be add to 'to'
//  togglePhone('cart', true, phone) - will add phone to localeStorage with key 'cart'
export function togglePhone(to: string, isAdd: boolean, phone: Phone) {
  const phones: Phone[] = localStorage.getItem(to)
    ? JSON.parse(localStorage.getItem(to) || '')
    : [];

  if (isAdd) {
    phones.push(phone);
    localStorage.setItem(to, JSON.stringify(phones));

    return;
  }

  const filteredPhones = phones.filter(
    phoneFilter => phoneFilter.id !== phone.id,
  );

  localStorage.setItem(to, JSON.stringify(filteredPhones));
}

interface Props {
  phone: Phone;
  width: string;
}

export const AddToCartFav: React.FC<Props> = ({ phone, width }) => {
  const [isAddedToFav, setIsAddedToFav] = useState(
    isPhoneAdded(phone.id, 'fav'),
  );
  const [isAddedToCart, setIsAddedToCart] = useState(
    isPhoneAdded(phone.id, 'cart'),
  );

  const handleCardButton = () => {
    if (isAddedToCart) {
      setIsAddedToCart(false);
      togglePhone('cart', false, phone);

      return;
    }

    setIsAddedToCart(true);
    togglePhone('cart', true, phone);
  };

  const handleFavButton = () => {
    if (isAddedToFav) {
      setIsAddedToFav(false);
      togglePhone('fav', false, phone);

      return;
    }

    setIsAddedToFav(true);
    togglePhone('fav', true, phone);
  };

  return (

    <div className="addToCartFav__buttons">
      <button
        className={classNames('addToCartFav__add', {
          'addToCartFav__add--added': isAddedToCart,
        })}
        style={{ width: `${width}` }}
        type="button"
        onClick={handleCardButton}
      >
        {isAddedToCart ? 'Remove' : 'Add to cart'}
        {' '}
      </button>

      <button
        onClick={handleFavButton}
        type="button"
        className="addToCartFav__like-button"
      >
        {isAddedToFav
          ? (
            <img
              src="icons/Buttons/likeYellow.svg"
              alt="like"
              className="addToCartFav__like"
            />
          )
          : (
            <img
              src="icons/Buttons/like.svg"
              alt="like"
              className="addToCartFav__like"
            />
          )}

      </button>
    </div>
  );
};
