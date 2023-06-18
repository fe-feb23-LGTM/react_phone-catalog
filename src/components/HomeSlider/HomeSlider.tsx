// import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
// import { awsGetPhoto } from '../../_utils/awsGetPhoto';
import 'swiper/swiper.scss';
import './HomeSlider.scss';
// import 'swiper/modules/pagination/pagination.scss';
// import 'swiper/modules/navigation/navigation.scss';

SwiperCore.use([Pagination, Navigation]);

export const HomeSlider: React.FC = () => {
  // const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   const fetchPhoto = async () => {
  //     try {
  //       const p = await awsGetPhoto(
  //         'img/banner-phones.png',
  //       );

  //       setPhotoUrl(p || 'asf');
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error);
  //     }
  //   };

  //   fetchPhoto();
  // }, []);

  return (
    <section className="home__slider">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay]}
      >
        <SwiperSlide>
          {/* <img
            src={photoUrl}
            alt="Slide 1"
            className="slider__image"
          /> */}
          <img
            src="img/Slider_img/Banner.png"
            alt=""
            className="slider__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="img/Slider_img/Banner.png"
            alt=""
            className="slider__image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="img/Slider_img/Banner.png"
            alt=""
            className="slider__image"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
