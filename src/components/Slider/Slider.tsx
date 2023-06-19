/* eslint-disable no-constant-condition */
/* eslint-disable import/no-unresolved */

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation } from 'swiper';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';
import { Loader } from '../Loader';

interface Props {
  title: string;
  selectedPhones: Phone[];
  className?: string;
  isLoading: boolean;
}

export const Slider: React.FC<Props> = ({
  title,
  selectedPhones,
  className,
  isLoading,
}) => {
  const swiperRef = useRef<SwiperType>();
  const [isButtonPrev, setIsButtonPrev] = useState<boolean>(false);
  const [isButtonNext, setIsButtonNext] = useState<boolean>(false);

  const handleReachEnd = () => {
    setIsButtonNext(true);
  };

  const handleSlideChange = () => {
    const swiper = swiperRef.current;

    if (swiper) {
      setIsButtonPrev(swiper.activeIndex > 0);
      setIsButtonNext(false);
    }
  };

  return (
    <div className={`recommended-container ${className}`}>
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
              src={!isButtonPrev
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
              src={isButtonNext
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
            onSlideChange={handleSlideChange}
            onReachEnd={() => {
              handleReachEnd();
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
