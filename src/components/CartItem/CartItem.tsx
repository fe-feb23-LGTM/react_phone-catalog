/* eslint-disable jsx-a11y/anchor-is-valid */
export const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__item-wrapper">
        <a
          href="#"
          className="cart__item-close_button"
        >
          <img
            src="icons/Close-cart.svg"
            alt="close"
            className="cart__item-close_img"
          />
        </a>

        <div className="cart__item-image--comtainer">
          <img
            src="img/phones/apple-iphone-11-pro-max/gold/00.jpg"
            alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
            className="cart__item-image--picture"
          />
        </div>

        <span
          className="cart__item-name"
        >
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </span>
      </div>

      <div className="cart__item-wrapper">
        <div className="cart__item-wrapper-counter">
          <div
            className="cart__item-button"
          >
            <img
              alt="+"
              src="icons/Plus.svg"
              className="cart__item-button_img"
            />
          </div>

          <span className="cart__item-count">
            1
          </span>

          <div
            className="cart__item-button"
          >
            <img
              alt="-"
              src="icons/Minus.svg"
              className="cart__item-button_img"
            />
          </div>
        </div>
        <span className="cart__item-price">
          $990
        </span>
      </div>
    </div>
  );
};
