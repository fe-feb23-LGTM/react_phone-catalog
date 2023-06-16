import { Phone } from '../../types/Phone';
import { AddToCartFav } from '../AddToCartFav/AddToCartFav';

interface Props {
  phone: Phone;
}

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    image,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = phone;

  return (
    <div className="card">
      <div className="card__description">
        <div className="card__img--div">
          <img src={image} alt={name} className="card__img" />
        </div>

        <h2 className="card__name">{name}</h2>

        <div className="card__prices">
          <h2 className="card__price">
            {`$${price}`}
          </h2>
          <h2 className="card__full-price">
            {`$${fullPrice}`}
          </h2>
        </div>

        <div className="card__line" />

        <div className="card__details">
          <span className="card__label">Screen</span>
          <span className="card__value">{screen}</span>
        </div>

        <div className="card__details">
          <span className="card__label">Capacity</span>
          <span className="card__value">{capacity}</span>
        </div>

        <div className="card__details">
          <span className="card__label">RAM</span>
          <span className="card__value">{ram}</span>
        </div>

        <AddToCartFav phone={phone} width="160px" />
      </div>
    </div>
  );
};
