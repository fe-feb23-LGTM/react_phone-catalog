import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import { HomeSlider } from '../HomeSlider';

export const Home: React.FC = () => {
  const phone: Phone = {
    id: 1,
    category: 'phones',
    phoneId: 'apple-iphone-7-32gb-black',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.jpg',
  };

  return (
    <>
      <HomeSlider />
      <Card phone={phone} />
    </>
  );
};
