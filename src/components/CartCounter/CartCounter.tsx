import { useEffect, useState } from 'react';

export const CartCounter: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const getCartCount = () => {
      const cartData = localStorage.getItem('cart');

      if (cartData !== null) {
        const parsedData = JSON.parse(cartData);

        setCartCount(parsedData.length);
      }
    };

    const intervalId = setInterval(getCartCount, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="counter">
      <img
        src="icons/Shopping_bag(Cart).svg"
        alt="cart"
        className="counter__img"
      />
      {cartCount !== 0 && (
        <div className="counter__number">
          {cartCount}
        </div>
      )}
    </div>
  );
};
