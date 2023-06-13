/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { CheckoutModal } from '../CheckoutModal';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([1, 2, 3, 4, 5]);
  const [showModal, setShowModal] = useState(false);

  const handleClearCart = () => {
    setCartItems([]);
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cartWraper">
      <div className="cart">
        <div className="cart__back">
          <div className="cart__backIcon" />
          <span className="cart__backBtn">Back</span>
        </div>

        <div className="cart__heading">
          Cart
        </div>

        <div className="cart__listAndCheckout">
          <div className="cart__itemList">
            {cartItems.map(item => (
              <div key={item} className="cart__item">
                {item}
              </div>
            ))}
          </div>

          <div className="cart__checkout">
            <div className="cart__checkoutTotal">
              $777
            </div>
            <div className="cart__checkoutCount">
              {`Total for ${cartItems.length} items`}
            </div>
            <hr className="is-marginless" />
            <div
              tabIndex={0}
              role="button"
              className="cart__checkoutBtn"
              onClick={handleOpenModal}
            >
              Checkout
            </div>
            {showModal && (
              <CheckoutModal
                cartItems={cartItems}
                onClear={handleClearCart}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
