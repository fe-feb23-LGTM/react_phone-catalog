import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Phone } from '../../types/Phone';
import { Card } from '../Card/Card';

interface Props {
  title: string;
  selectedPhones: Phone[];
}

export const Slider: React.FC<Props> = ({ title, selectedPhones }) => {
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const updateButtonStates = () => {
      const prevButton = document.querySelector('.recommended-button-prev');
      const nextButton = document.querySelector('.recommended-button-next');

      if (prevButton
        && prevButton.classList.contains('swiper-button-disabled')) {
        setIsPrevButtonDisabled(true);
      } else {
        setIsPrevButtonDisabled(false);
      }

      if (nextButton
        && nextButton.classList.contains('swiper-button-disabled')) {
        setIsNextButtonDisabled(true);
      } else {
        setIsNextButtonDisabled(false);
      }
    };

    const observer = new MutationObserver(updateButtonStates);
    const prevButton = document.querySelector('.recommended-button-prev');
    const nextButton = document.querySelector('.recommended-button-next');

    if (prevButton && nextButton) {
      observer.observe(prevButton, { attributes: true });
      observer.observe(nextButton, { attributes: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
          >
            <img
              src={isPrevButtonDisabled
                ? 'icons/Chevron-Left.svg'
                : 'icons/Vector(Stroke).svg'}
              alt="left"
            />
          </button>
          <button
            className="recommended-button recommended-button-next"
            type="button"
          >
            <img
              src={isNextButtonDisabled
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
      <Swiper
        slidesPerView="auto"
        centeredSlidesBounds
        spaceBetween={16}
        navigation={{
          prevEl: '.recommended-button-prev',
          nextEl: '.recommended-button-next',
        }}
      >
        {selectedPhones.map((phone) => (
          <SwiperSlide key={phone.id}>
            <Card phone={phone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
