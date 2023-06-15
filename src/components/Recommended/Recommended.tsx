import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import './Recommended.scss';

export const Recommended = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones('price', '8', '1').then((data) => setPhones(data));
  }, []);

  SwiperCore.use([Navigation]);

  return (
    <div className="swiper-container">
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        observer
        observeParents
        loop
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
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
            <Card phone={phone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
