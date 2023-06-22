/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';

type Props = {
  onClose?: () => void;
  msg?: string;
  title?: string;
  isCloseNeeded?: boolean;
};

export const EmptyCartModal: React.FC<Props> = ({
  onClose,
  msg = 'Your cart is empty. Please add some items to the cart.',
  title = 'Ooopss...',
  isCloseNeeded = true,
}) => {
  return (
    <div className="modal">
      <div className="modal_wrapper">
        <div className="modal__top">
          {isCloseNeeded && (
            <button
              type="button"
              className="modal_close"
              onClick={onClose}
            >
              X
            </button>
          )}
          <h1 className="modal_title">
            {title}
          </h1>
        </div>

        <hr className="is-marginless" />

        <h3 className="modal__text">
          {msg}
        </h3>

        <hr className="is-marginless" />

        <div className="modal_btns">
          <Link to="/phones" className="modal_btn">
            Go to shop
          </Link>
        </div>
      </div>
    </div>
  );
};
