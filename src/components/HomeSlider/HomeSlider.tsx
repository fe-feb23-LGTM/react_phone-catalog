import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';

SwiperCore.use([Pagination, Navigation]);

export const HomeSlider: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const p = await awsGetPhoto(
          'img/banner-phones.png',
        );

        setPhotoUrl(p || 'asf');
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide>
        <img src={photoUrl} alt="Slide 1" />
        {/* <img src="img/home_slider/Banner.png" alt="Slide 1" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <img src="path/to/image2.jpg" alt="Slide 2" />
        {/* <img src="img/home_slider/Banner.png" alt="Slide 1" /> */}
      </SwiperSlide>
      <SwiperSlide>
        <img src="path/to/image3.jpg" alt="Slide 3" />
        {/* <img src="img/home_slider/Banner.png" alt="Slide 1" /> */}
      </SwiperSlide>
    </Swiper>
  );
};
