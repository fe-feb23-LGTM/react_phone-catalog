import classNames from 'classnames';
import { useState } from 'react';
import { Phone } from '../../types/Phone';

function isPhoneAdded(name: string, to: string) {
  if (!localStorage.getItem(to)) {
    return false;
  }

  const phones = localStorage.getItem(to)
    ? JSON.parse(localStorage.getItem(to) || '')
    : [];

  return phones
    .some((phone: Phone) => phone.name.toLowerCase() === name.toLowerCase());
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

  const indPhoneDel = phones.findIndex(
    phoneFilter => phoneFilter.name.toLowerCase() === phone.name.toLowerCase(),
  );

  if (indPhoneDel === -1) {
    return;
  }

  phones.splice(indPhoneDel, 1);

  localStorage.setItem(to, JSON.stringify(phones));
}

interface Props {
  phone: Phone;
  width: string;
}

export const AddToCartFav: React.FC<Props> = ({ phone, width }) => {
  const [isAddedToFav, setIsAddedToFav] = useState(
    isPhoneAdded(phone.name, 'fav'),
  );
  const [isAddedToCart, setIsAddedToCart] = useState(
    isPhoneAdded(phone.name, 'cart'),
  );

  const handleCardButton = (ev: React.MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();

    if (isAddedToCart) {
      setIsAddedToCart(false);
      togglePhone('cart', false, phone);

      return;
    }

    setIsAddedToCart(true);
    togglePhone('cart', true, phone);
  };

  const handleFavButton = (ev: React.MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();

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
