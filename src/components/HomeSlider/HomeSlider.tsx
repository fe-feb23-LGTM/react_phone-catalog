import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';
import './HomeSlider.scss';
import { Loader } from '../Loader';

SwiperCore.use([Pagination, Navigation]);

export const HomeSlider: React.FC = () => {
  const [fetchedPhotos, setFetchedPhotos] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPhoto = async (photoPath: string) => {
    try {
      setIsLoading(true);

      const photo = await awsGetPhoto(photoPath);

      setFetchedPhotos(prevState => ([
        ...prevState,
        photo,
      ]));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const sliderPhotoPaths = [
      'img/banner1.png',
      'img/banner2.png',
      'img/banner3.png',
      'img/banner4.png',
      'img/banner5.jpeg',
    ];

    sliderPhotoPaths.map(photoPath => fetchPhoto(photoPath));
  }, []);

  return (
    <section className="home__slider">
      {
        isLoading ? (
          <Loader />
        ) : (
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
            {fetchedPhotos.map(photoPath => (
              <SwiperSlide key={photoPath}>
                <img
                  src={photoPath}
                  alt="banner"
                  className="slider__image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      }
    </section>
  );
};
