/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckoutModal } from '../CheckoutModal';
import { CartItem } from '../CartItem';
import { Phone } from '../../types/Phone';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';

type FetchedPhotos = {
  [key: string]: string | null;
};

function getTotalPrice() {
  const phoneStr = localStorage.getItem('cart');

  if (!phoneStr) {
    return 0;
  }

  return JSON.parse(phoneStr)
    .reduce((acc: number, el: Phone) => acc + el.price, 0);
}

function countPhonesInLS() {
  const phoneStr = localStorage.getItem('cart');

  if (!phoneStr) {
    return 0;
  }

  return JSON.parse(phoneStr).length;
}

function getPhonesFromLocalStorage() {
  const phoneStr = localStorage.getItem('cart');

  if (!phoneStr) {
    return [];
  }

  return JSON.parse(phoneStr)
    .filter((el: Phone, ind: number, arr: Phone[]) => (
      ind === arr.findIndex(findEl => (
        findEl.name.toLowerCase() === el.name.toLowerCase()
      ))))
    .sort((a: Phone, b: Phone) => a.id - b.id);
}

export const Cart = () => {
  const [countItems, setCountItems] = useState(countPhonesInLS());
  const [showModal, setShowModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(getTotalPrice());
  const [fetchedPhotos, setFetchedPhotos] = useState<FetchedPhotos>({});
  const phones: Phone[] = getPhonesFromLocalStorage();

  const fetchPhoto = async (phone: Phone) => {
    try {
      const photo = await awsGetPhoto(phone.image);

      setFetchedPhotos(prevState => ({
        ...prevState,
        [phone.id]: photo,
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    phones.map(phone => fetchPhoto(phone));
    const intervalId = setInterval(() => {
      setCountItems(countPhonesInLS());
      setTotalPrice(getTotalPrice());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  const handleClearCart = () => {
    localStorage.setItem('cart', '[]');
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
        <Link
          to="#"
          onClick={() => window.history.back()}
        >
          <div className="cart__back">
            <img src="icons/Vector(Stroke).svg" alt="imgBack" />
            <span className="cart__backBtn">Back</span>
          </div>
        </Link>

        <div className="cart__heading">
          Cart
        </div>

        <div className="cart__listAndCheckout">
          <div className="cart__itemList">
            {phones.length ? (
              phones.map((phone) => (
                <CartItem
                  key={phone.id}
                  phone={phone}
                  image={fetchedPhotos[phone.id]}
                />
              )))
              : (
                <>
                  {countItems === 0 && (
                    <img
                      src="icons/emptyCart.svg"
                      alt="empty cart"
                      className="cart__empty-cart-img"
                    />
                  )}

                  {countItems === 0 && (
                    <h2 className="cart__empty-cart-name">
                      Your cart is currently empty. You can explore our
                      <Link to="/phones">&nbsp;products</Link>
                      .
                    </h2>
                  )}
                </>
              )}
          </div>

          <div className="cart__checkout">
            <div className="cart__checkoutTotal">
              {`$${totalPrice}`}
            </div>
            <div className="cart__checkoutCount">
              {`Total for ${countItems} items`}
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
                cartItems={countItems}
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
