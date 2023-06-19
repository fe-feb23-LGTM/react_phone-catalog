/* eslint-disable no-constant-condition */
/* eslint-disable import/no-unresolved */

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import { Loader } from '../Loader';

interface Props {
  title: string;
  selectedPhones: Phone[];
  isLoading: boolean;
}

export const Slider: React.FC<Props> = ({
  title,
  selectedPhones,
  isLoading,
}) => {
  const swiperRef = useRef<SwiperType>();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('reachBeginning', () => {
        setIsBeginning(true);
      });

      swiperRef.current.on('reachEnd', () => {
        setIsEnd(true);
      });

      swiperRef.current.on('fromEdge', () => {
        setIsBeginning(false);
        setIsEnd(false);
      });
    }
  }, [isLoading]);

  return (
    <div className="recommended-container">
      <div className="recommended-header">
        <h2 className="recommended-header-title">
          {title}
        </h2>
        <div className="recommended-header-buttons">
          <button
            className="recommended-button recommended-button-prev"
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img
              src={isBeginning
                ? 'icons/Chevron-Left.svg'
                : 'icons/Vector(Stroke).svg'}
              alt="left"
            />
          </button>
          <button
            className="recommended-button recommended-button-next"
            type="button"
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          >
            <img
              src={isEnd
                ? 'icons/Chevron-Left.svg'
                : 'icons/Vector(Stroke).svg'}
              alt="right"
              style={{
                transform: 'matrix(-1, 0, 0, 1, 0, 0)',
              }}
            />
          </button>
        </div>
      </div>
      {
        isLoading ? (
          <Loader />
        ) : (
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            centeredSlidesBounds
            spaceBetween={16}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {selectedPhones.map((phone) => (
              <SwiperSlide key={phone.id}>
                <Card phone={phone} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      }
    </div>
  );
};
