import { Phone } from '../../types/Phone';

interface Props {
  phone: Phone;
}

export const Card: React.FC<Props> = ({ phone }) => {
  const {
    image,
    name,
    fullPrice,
    price,
    // screen,
    // capacity,
    // ram,
  } = phone;

  return (
    <div className="card">
      <div className="card__description">
        <div className="card__img--div">
          <img src={image} alt={name} className="card__img" />
        </div>

        <h2 className="card__name">{name}</h2>

        <div className="card__prices">
          <h2 className="card__price">{price}</h2>
          <h2 className="card__full-price">{fullPrice}</h2>
        </div>
        <img
          src="icons/Buttons/addedToFavorit.svg"
          alt=""
          className="card__like"
        />
      </div>
    </div>
  );
};
