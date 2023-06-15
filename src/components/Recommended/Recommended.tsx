import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import './Recommended.scss';

export const Recommended = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones('price', '8', '1').then((data) => setPhones(data));
  }, []);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={16}
      observer
      observeParents
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {phones.map((phone) => (
        <SwiperSlide key={phone.id}>
          <div className="card__container">
            <Card phone={phone} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
