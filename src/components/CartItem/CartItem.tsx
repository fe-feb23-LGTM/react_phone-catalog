export const CartItem = () => {
  return (
    <div className="cart__item">
      <button
        type="button"
        className="cart__item-close_button"
      >
        x
      </button>

      <div className="cart__item-image--comtainer">
        <img
          src="./testImg.png"
          alt="Apple iPhone 14 Pro 128GB Silver (MQ023)"
          className="cart__item-image--picture"
        />
      </div>

      <span
        className="cart__item-name"
      >
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </span>

      <button
        type="button"
        className="cart__item-button"
      >
        -
      </button>

      <span className="cart__item-count">
        1
      </span>

      <button
        type="button"
        className="cart__item-button"
      >
        +
      </button>

      <span className="cart__item-price">
        $990
      </span>
    </div>
  );
};
