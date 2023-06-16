import { useEffect, useState } from 'react';

export const FavoritesCounter: React.FC = () => {
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const getFavCount = () => {
      const favData = localStorage.getItem('fav');

      if (favData !== null) {
        const parsedData = JSON.parse(favData);

        setFavCount(parsedData.length);
      }
    };

    const intervalId = setInterval(getFavCount, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="counter">
      <img
        src="icons/Favourites.svg"
        alt="favourites"
        className="counter__img"
      />
      {favCount !== 0 && (
        <div className="counter__number">
          {favCount}
        </div>
      )}
    </div>
  );
};
