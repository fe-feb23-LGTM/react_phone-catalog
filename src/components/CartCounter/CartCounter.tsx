// import { useState } from 'react';

export const CartCounter: React.FC = () => {
  // const [cartCount, setCartCount] = useState(0);

  // const getCartCount = () => {
  //   setCartCount(JSON.parse(localStorage.getItem('cart') || '').length);
  // };

  // setInterval(() => {
  //   getCartCount();
  // }, 1000);

  return (
    <div className="counter">
      <img
        src="icons/Shopping_bag(Cart).svg"
        alt="cart"
        className="counter__img"
      />
      {/* {cartCount !== 0 && (
        <div className="counter__number">
          {cartCount}
        </div>
      )} */}
    </div>
  );
};
