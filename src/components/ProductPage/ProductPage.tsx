/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductPhone } from '../../types/ProductPhone';
import { Recommended } from '../Recommended/Recommended';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';

export const ProductPage = () => {
  const [img, setImg] = useState<string[]>([]);

  const getPhoneId = () => {
    const phoneID = Math.random().toString().slice(-6);

    return phoneID;
  };

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

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const getImg = await Promise.all(phone.images.map(image => awsGetPhoto(image)));

        setImg(getImg);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchPhoto();
  }, []);

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

        <div className="phone__images">
          <div className="phone__image-main">
            <div>
              <img src={`${img[0]}`} alt="IphoneImg" />
            </div>
          </div>

          <div className="phone__image-container">
            <div className="phone__image-option">
              <div
                style={
                  {
                    backgroundImage: `url(${img[0]})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                  }
                }
              />
            </div>

            <div className="phone__image-option">
              <div
                style={
                  {
                    backgroundImage: `url(${img[1]})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                  }
                }
              />
            </div>

            <div className="phone__image-option">
              <div
                style={
                  {
                    backgroundImage: `url(${img[2]})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100%',
                  }
                }
              />
            </div>
          </div>
        </div>

        <div className="colors-container">
          <div className="colors">
            <div className="colors__title">Available colors</div>
            <div className="colors__items-wrapper">
              <div className="colors__item">
                <img
                  src="icons/colors/Midnight.svg"
                  alt="midnightColor"
                  className="color"
                />
              </div>
              <div className="colors__item">
                <img
                  src="icons/colors/Silver.svg"
                  alt="midnightColor"
                  className="color"
                />
              </div>
              <div className="colors__item">
                <img
                  src="icons/colors/Gold.svg"
                  alt="midnightColor"
                  className="color"
                />
              </div>
              <div className="colors__item">
                <img
                  src="icons/colors/Green.svg"
                  alt="midnightColor"
                  className="color"
                />
              </div>
            </div>
          </div>

          <div className="phoneId">
            ID:
            {' '}
            {getPhoneId()}
          </div>
        </div>
      </div>
      <hr className="is-marginless" />

      <Recommended />
    </div>
  );
};
