/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  cartItems: number[];
  onClear : Dispatch<SetStateAction<number[]>>
  onClose: () => void;
};

export const CheckoutModal: React.FC<Props> = ({ onClear, onClose }) => {
  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="modal__top">
          <button
            type="button"
            className="modal_close"
            onClick={onClose}
          >
            X
          </button>
          <h1 className="modal_title">
            Ooopss...
          </h1>
        </div>

        <hr className="is-marginless" />

        <h3 className="modal__text">
          Checkout is not implemented yet. Do you want to clear the Cart?
        </h3>

        <hr className="is-marginless" />

        <div className="modal_btns">
          <Link to="/" className="modal_btn">
            Back home
          </Link>
          <div
            tabIndex={0}
            role="button"
            className="modal_btn"
            onClick={() => onClear([])}
          >
            Clear cart
          </div>
        </div>
      </div>
    </div>
  );
};
