/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ProductPhone } from '../../types/ProductPhone';
import { Recommended } from '../Recommended/Recommended';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';
import { AddToCartFav } from '../AddToCartFav/AddToCartFav';

export const ProductPage = () => {
  const [img, setImg] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);

  const phone: ProductPhone = {
    id: 'apple-iphone-11-pro-64gb-gold',
    namespaceId: 'apple-iphone-11-pro',
    name: 'Apple iPhone 11 Pro 64GB Gol\'d',
    capacityAvailable: ['64GB', '256GB', '512GB'],
    capacity: '64GB',
    priceRegular: 1312,
    priceDiscount: 1270,
    colorsAvailable: ['spacegray', 'midnightgreen', 'gold', 'silver'],
    color: 'gold',
    images: [
      'img/phones/apple-iphone-11-pro/gold/00.jpg',
      'img/phones/apple-iphone-11-pro/gold/01.jpg',
      'img/phones/apple-iphone-11-pro/gold/02.jpg',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          ' A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          ' Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title: 'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: '5.8\' OLED',
    resolution: '2436х1125',
    processor: 'Apple A13 Bionic',
    ram: '4GB',
    camera: '12 Mp + 12 Mp + 12MP',
    zoom: 'Digital, 10x / Optical, 2x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  };

  const getPhoneId = () => {
    const phoneID = Math.random().toString().slice(-6);

    return phoneID;
  };

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const getImg = await Promise.all(phone.images.map(image => awsGetPhoto(image)));

        setImg(getImg);
        setMainImage(getImg[0]);
        setSelectedImage(getImg[0]);
        setSelectedColor(phone.color);
        setSelectedCapacity(phone.capacity);
      } catch (error) {
        console.log(img);
        console.error(error);
      }
    };

    fetchPhoto();
  }, []);

  const favPhone = {
    id: Math.random() * 10,
    name: phone.id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' '),
    price: phone.priceDiscount,
    fullPrice: phone.priceRegular,
    screen: phone.screen,
    capacity: phone.capacity,
    ram: phone.ram,
    image: phone.images[0],
  };

  const onPhotoSelect = (image: string) => {
    setSelectedImage(image);
    setMainImage(image);
  };

  const onColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const onCapacitySelect = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  return (
    <div className="product-wrapper">
      <div className="product__navigation">
        <Link to="/#">
          <img
            src="icons/Home.svg"
            alt="imgBack"
            className="product__navigation-home"
          />
        </Link>

        <img
          src="icons/Chevron-Right.svg"
          alt="imgBack"
          className="product__navigation-vector"
        />

        <Link to="/phones" className="product__navigation-link">
          <span>Phones</span>
        </Link>

        <img
          src="icons/Chevron-Right.svg"
          alt="imgBack"
          className="product__navigation-vector"
        />

        <div className="product__navigation-phone">
          {phone.id.split('-').join(' ')}
        </div>
      </div>

      <Link
        to="#"
        onClick={() => window.history.back()}
      >
        <div className="product__back">
          <img
            src="icons/Vector(Stroke).svg"
            alt="imgBack"
            className="product__back-vector"
          />
          <span className="product__backBtn">Back</span>
        </div>
      </Link>

      <div className="phone">
        <div className="phone__title">
          {phone.id.split('-').join(' ')}
        </div>

        <div className="tablet-wrapper">
          <div>
            <div className="phone__images">
              <div className="phone__image-main">
                <div
                  style={
                    {
                      backgroundImage: `url(${mainImage})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      height: '100%',
                    }
                  }
                >
                  {/* <img src={`${mainImage}`} alt="IphoneImg" /> */}
                </div>
              </div>

              <div className="phone__image-container">
                {img.map(phoneImage => (
                  <div
                    className={cn('phone__image-option', {
                      activeImage: selectedImage === phoneImage,
                    })}
                    key={phoneImage}
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      style={
                        {
                          backgroundImage: `url(${phoneImage})`,
                          backgroundSize: 'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          height: '100%',
                        }
                      }
                      onClick={() => onPhotoSelect(phoneImage)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tablet-wrapper__aside">
            <div className="colors-container">
              <div className="colors">
                <div className="colors__title">Available colors</div>
                <div className="colors__items-wrapper">
                  {phone.colorsAvailable.map(color => (
                    <div
                      role="button"
                      tabIndex={0}
                      className="colors__item"
                      key={color}
                      onClick={() => onColorSelect(color)}
                    >
                      <img
                        src={`icons/colors/${color}.svg`}
                        alt={`${color}`}
                        className={cn('color', {
                          activeColor: selectedColor === color,
                        })}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="phoneId">
                ID:
                {' '}
                {useMemo(() => getPhoneId(), [])}
              </div>
            </div>

            <hr className="is-marginless" />

            <div className="capacity">
              <div className="capacity__title">Select capacity</div>
              <div className="capacity__wrapper">
                {phone.capacityAvailable.map(memory => (
                  <div
                    role="button"
                    tabIndex={0}
                    className={cn('capacity__item', {
                      activeCapacity: selectedCapacity === memory,
                    })}
                    key={memory}
                    onClick={() => onCapacitySelect(memory)}
                  >
                    {memory}
                  </div>
                ))}
              </div>
            </div>

            <hr className="is-marginless" />

            <div className="price">
              <div className="price__regular">
                {phone.priceDiscount}
              </div>

              <div className="price__discount">
                {phone.priceRegular}
              </div>
            </div>

            <div className="action__product">
              <AddToCartFav phone={favPhone} width="240px" />
            </div>

            <div className="short-tech">
              <div className="short-tech__title">
                <div>Screen</div>
                <div>Resolution</div>
                <div>Processor</div>
                <div>RAM</div>
              </div>

              <div className="short-tech__value">
                <div>{phone.screen}</div>
                <div>{phone.resolution}</div>
                <div>{phone.processor}</div>
                <div>{phone.ram}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="about">
          <div className="about__main-title">About</div>

          <hr className="is-marginless" />

          {phone.description.map(paragraph => (
            <div key={paragraph.title}>
              <div className="about__title">
                {paragraph.title}
              </div>
              <div className="about__text">

                <div className="about__text-first">
                  {paragraph.text[0]}
                </div>
                {'      '}
                {paragraph.text[1]}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-specs">
          <div className="tech-specs__title">Tech specs</div>

          <hr className="is-marginless" />

          <div className="tech-specs__table">
            <div className="tech-specs__titles">
              <div>Screen</div>
              <div>Resolution</div>
              <div>Processor</div>
              <div>RAM</div>
              <div>Built in memory</div>
              <div>Camera</div>
              <div>Zoom</div>
              <div>Cell</div>
            </div>

            <div className="tech-specs__value">
              <div>{phone.screen}</div>
              <div>{phone.resolution}</div>
              <div>{phone.processor}</div>
              <div>{phone.ram}</div>
              <div>{phone.capacity}</div>
              <div>{phone.camera}</div>
              <div>{phone.zoom}</div>
              <div>{phone.cell.slice(-3).join(', ')}</div>
            </div>
          </div>
        </div>
      </div>
      <Recommended />
    </div>
  );
};
