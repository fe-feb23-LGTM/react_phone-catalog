// import { Phone } from '../../types/Phone';

export const Home: React.FC = () => {
  return (
    <div className="home__wrapper">
      <div className="home">
        <h1 className="home__heading">Welcome to Nice Gadgets Store</h1>

        <div className="home__topSlider">
          Top slider!!! 340px high
        </div>

        <div className="home__newSlider">
          brand new models!!! 500px high
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

        <div className="home__hotSlider">
          hot Prices!!! 500px high
        </div>
      </div>
    </div>
  );
};
