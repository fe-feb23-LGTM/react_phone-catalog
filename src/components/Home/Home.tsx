import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone } from '../../types/Phone';
import { HomeSlider } from '../HomeSlider';
import { Slider } from '../Slider';
import { getAllPhones } from '../../api/phones';

export const Home: React.FC = () => {
  const [brandNewModels, setBrandNewModels] = useState<Phone[]>([]);
  const [hotPriceModels, setHotPriceModels] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAll = async () => {
    try {
      setIsLoading(true);

      const phones = await getAllPhones();

      setBrandNewModels(phones.sort(
        (a, b) => Number(b.year) - Number(a.year),
      ).splice(0, 11));

      setHotPriceModels(phones.sort(
        (a, b) => {
          if (a.fullPrice && b.fullPrice) {
            return (b.fullPrice - b.price) - (a.fullPrice - a.price);
          }

          return -1;
        },
      ).splice(0, 11));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`homePage fetch error ${err}`);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="home">
      <h1 className="home__heading">Welcome to Nice Gadgets Store</h1>

      <div className="home__topSlider">
        <HomeSlider />
      </div>

      <div className="home__newSlider small__slider">
        <Slider
          title="Brand new models"
          selectedPhones={brandNewModels}
          isLoading={isLoading}
        />
      </div>

      <div className="home__categorys">
        <h2 className="home__categorys__heading">Shop by category</h2>

        <div className="home__categorys__wraper">
          <NavLink to="/phones">
            <div className="home__categorysItem">
              <div className="img_bc img_bc_1">
                <img
                  className="home__categorysItem__img"
                  src="img/catphones.png"
                  alt="categorysItemImg"
                />
              </div>
              <h3 className="home__categorysItem__heading">Mobile phones</h3>
              <span className="home__categorysItem__count">71 models</span>
            </div>
          </NavLink>

          <NavLink to="/tablets">
            <div className="home__categorysItem">
              <div className="img_bc img_bc_2">
                <img
                  className="home__categorysItem__img"
                  src="img/cattablets.png"
                  alt="categorysItemImg"
                />
              </div>
              <h3 className="home__categorysItem__heading">Tablets</h3>
              <span className="home__categorysItem__count">0 models</span>
            </div>
          </NavLink>

          <NavLink to="/accessories">
            <div className="home__categorysItem">
              <div className="img_bc img_bc_3">
                <img
                  className="home__categorysItem__img"
                  src="img/catacc.png"
                  alt="categorysItemImg"
                />
              </div>
              <h3 className="home__categorysItem__heading">Accessories</h3>
              <span className="home__categorysItem__count">0 models</span>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="home__hotSlider small__slider">
        <Slider
          title="Hot prices"
          selectedPhones={hotPriceModels}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
