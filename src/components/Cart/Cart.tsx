export const Cart = () => {
  const cartItems = [1, 2, 3, 4, 5];

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
            <div className="cart__checkoutBtn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
