// import { useState } from 'react';

export const FavoritesCounter: React.FC = () => {
  // const [favCount, setFavCount] = useState(0);

  // const getFavCount = () => {
  //   setFavCount(JSON.parse(localStorage.getItem('fav') || '').length);
  // };

  // setInterval(() => {
  //   getFavCount();
  // }, 1000);

  return (
    <div className="counter">
      <img
        src="icons/Favourites.svg"
        alt="favourites"
        className="counter__img"
      />
      {/* {favCount !== 0 && (
        <div className="counter__number">
          {favCount}
        </div>
      )} */}
    </div>
  );
};
