import { useState } from 'react';
import { Phone } from '../../types/Phone';
import { togglePhone } from '../AddToCartFav/AddToCartFav';

/* eslint-disable jsx-a11y/anchor-is-valid */
interface Props {
  phone: Phone;
  image: string | null;
}

function deleteSelectedPhonesFromLS(id: number) {
  const phoneStr = localStorage.getItem('cart');

  if (!phoneStr) {
    return;
  }

  const phones = JSON.parse(phoneStr)
    .filter((phone: Phone) => phone.id !== id);

  localStorage.setItem('cart', JSON.stringify(phones));
}

function countCurrentAddedPhone(id: number) {
  const phones: Phone[] = JSON.parse(localStorage.getItem('cart') || '[]');

  return phones.filter(phone => phone.id === id)
    .length;
}

export const CartItem: React.FC<Props> = ({ phone, image }) => {
  const {
    id,
    name,
    price,
  } = phone;
  const [countPhones, setCountPhones] = useState(countCurrentAddedPhone(id));

  function addPhoneToLocaleStorage() {
    togglePhone('cart', true, phone);
    setCountPhones(prevCount => prevCount + 1);
  }

  function removePhoneFromLocaleStorage() {
    togglePhone('cart', false, phone);
    setCountPhones(prevCount => prevCount - 1);
  }

  return (
    <div className="cart__item">
      <div className="cart__item-wrapper">
        <button
          type="button"
          onClick={() => deleteSelectedPhonesFromLS(phone.id)}
          className="cart__item-close_button"
        >
          <img
            src="icons/Close-cart.svg"
            alt="close"
            className="cart__item-close_img"
          />
        </button>

        <div className="cart__item-image--comtainer">
          {image
            ? (
              <img
                src={image}
                alt={name}
                className="cart__item-image--picture"
              />
            )
            : (
              <div className="loader-wrapper">
                <div className="loader is-loading" />
              </div>
            ) }
        </div>

        <span
          className="cart__item-name"
        >
          {name}
        </span>
      </div>

      <div className="cart__item-wrapper">
        <div className="cart__item-wrapper-counter">
          <button
            type="button"
            className="cart__item-button"
            onClick={removePhoneFromLocaleStorage}
          >
            <img
              alt="-"
              src="icons/Minus.svg"
              // className="cart__item-button_img"
            />
          </button>

          <span className="cart__item-count">
            {countPhones}
          </span>

          <button
            type="button"
            className="cart__item-button"
            onClick={addPhoneToLocaleStorage}
          >
            <img
              alt="+"
              src="icons/Plus.svg"
              // className="cart__item-button_img"
            />
          </button>
        </div>
        <span className="cart__item-price">
          {price}
        </span>
      </div>
    </div>
  );
};
