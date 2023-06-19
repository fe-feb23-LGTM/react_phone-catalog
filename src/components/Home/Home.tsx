import { useEffect, useState } from 'react';
import { Phone } from '../../types/Phone';
import { HomeSlider } from '../HomeSlider';
import { Slider } from '../Slider';
import { getAllPhones } from '../../api/phones';

export const Home: React.FC = () => {
  const [brandNewModels, setBrandNewModels] = useState<Phone[]>([]);
  const [hotPriceModels, setHotPriceModels] = useState<Phone[]>([]);

  const getAll = async () => {
    try {
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
      ));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(`homePage fetch error ${err}`);
    }
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
        />
      </div>

      <div className="home__categorys">
        <h2 className="home__categorys__heading">Shop by category</h2>

        <div className="home__categorys__wraper">
          <div className="home__categorysItem">
            <img
              className="home__categorysItem__img img_bc_1"
              src="img/catphones.png"
              alt="categorysItemImg"
            />
            <h3 className="home__categorysItem__heading">Mobile phones</h3>
            <span className="home__categorysItem__count">71 models</span>
          </div>

          <div className="home__categorysItem">
            <img
              className="home__categorysItem__img img_bc_2"
              src="img/cattablets.png"
              alt="categorysItemImg"
            />
            <h3 className="home__categorysItem__heading">Tablets</h3>
            <span className="home__categorysItem__count">0 models</span>
          </div>

          <div className="home__categorysItem">
            <img
              className="home__categorysItem__img img_bc_3"
              src="img/catacc.png"
              alt="categorysItemImg"
            />
            <h3 className="home__categorysItem__heading">Accessories</h3>
            <span className="home__categorysItem__count">0 models</span>
          </div>
        </div>
      </div>

      <div className="home__hotSlider small__slider">
        <Slider
          title="Hot prices"
          selectedPhones={hotPriceModels}
        />
      </div>
    </div>
  );
};
