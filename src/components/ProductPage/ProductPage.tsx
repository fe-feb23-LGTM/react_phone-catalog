/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import { useEffect, useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { ProductPhone } from '../../types/ProductPhone';
import { Recommended } from '../Recommended/Recommended';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';
import { AddToCartFav } from '../AddToCartFav/AddToCartFav';
import { getPhoneAboutById } from '../../api/phones';
import { LoaderSimple } from '../LoaderSimple/LoaderSimple';

type ColorName =
  | 'midnightgreen'
  | 'spacegray'
  | 'rosegold'
  | 'green'
  | 'purple'
  | 'gold'
  | 'yellow';

type ColorValue = Readonly<string>;

const colorMap: Readonly<Record<ColorName, ColorValue>> = {
  midnightgreen: '#39513D',
  spacegray: '#505050',
  rosegold: '#ffb9b9',
  green: '#91ffd1',
  purple: '#df9fff',
  gold: '#ffe4ca',
  yellow: '#ffdf40',
};

export const ProductPage = () => {
  const [img, setImg] = useState<string[]>([]);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);
  const [phone, setPhone] = useState<ProductPhone | null>(null);
  const { phoneId } = useParams();

  const getPhoneId = () => {
    const phoneID = Math.random().toString().slice(-6);

    return phoneID;
  };

  useEffect(() => {
    const fetchPhoneAbout = async () => {
      try {
        const fetchedPhoneAbout = await getPhoneAboutById(phoneId || '');

        setPhone(fetchedPhoneAbout);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhoneAbout();
  }, [phoneId]);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        if (phone) {
          const getImg = await Promise.all(phone.images.map(image => awsGetPhoto(image)));

          setImg(getImg);
          setMainImage(getImg[0]);
          setSelectedImage(getImg[0]);
          setSelectedColor(phone.color);
          setSelectedCapacity(phone.capacity);
        }
      } catch (error) {
        console.log(img);
        console.error(error);
      }
    };

    fetchPhoto();
  }, [phone]);

  const favPhone = phone
    ? {
      id: Math.random() * 10,
      name: phone.id.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' '),
      price: phone.priceDiscount,
      fullPrice: phone.priceRegular,
      screen: phone.screen,
      capacity: phone.capacity,
      ram: phone.ram,
      image: phone.images[0],
    }
    : null;

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

  const handleChangeUrlWithColor = (phoneColor: string) => {
    if (phone !== null) {
      const idParts = phone.id.split('-');
      const neededIdParts = idParts.slice(0, idParts.length - 1);
      const neededUrlParts = [...neededIdParts, phoneColor];
      const foundUrl = neededUrlParts.join('-');

      return foundUrl;
    }

    return null;
  };

  const handleChangeUrlWithCapacity = (phoneCapacity: string) => {
    if (phone !== null) {
      const normalizeCapacity = `${phoneCapacity.slice(
        0,
        phoneCapacity.length - 2,
      )}gb`;
      const oldValue = /(\d+gb)/;
      const foundUrl = phone.id.replace(oldValue, normalizeCapacity);

      return foundUrl;
    }

    return null;
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
          {phone ? phone.id.split('-').join(' ') : <LoaderSimple />}
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
          {phone ? phone.id.split('-').join(' ') : <LoaderSimple />}
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
                />
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
                  {phone ? (phone?.colorsAvailable.map((color: ColorName | string) => {
                    const colorValue
                      = colorMap[color as ColorName] || color;
                    const styles = {
                      backgroundColor: colorValue,
                    };

                    return (
                      <Link
                        to={`../phones/${handleChangeUrlWithColor(color)}`}
                        key={color}
                        className={cn('colors_item', {
                          activeColor: selectedColor === color,
                        })}
                        onClick={() => onColorSelect(color)}
                      >
                        <div className="color" style={styles} />
                      </Link>
                    );
                  })) : <LoaderSimple />}
                </div>
              </div>

              <div className="phoneId">
                ID:
                {' '}
                {useMemo(() => getPhoneId(), [phone?.capacity, phone?.color])}
              </div>
            </div>

            <hr className="is-marginless" />

            <div className="capacity">
              <div className="capacity__title">Select capacity</div>
              <div className="capacity__wrapper">
                {phone ? (phone.capacityAvailable.map(memory => (
                  <Link
                    to={`../phones/${handleChangeUrlWithCapacity(memory)}`}
                    className={cn('capacity__item', {
                      activeCapacity: selectedCapacity === memory,
                    })}
                    key={memory}
                    onClick={() => onCapacitySelect(memory)}
                  >
                    <div className="memory">{memory}</div>
                  </Link>
                ))) : <LoaderSimple />}
              </div>
            </div>

            <hr className="is-marginless" />

            <div className="price">
              <div className="price__regular">
                {phone ? phone.priceDiscount : <LoaderSimple />}
              </div>

              <div className="price__discount">
                {phone ? phone.priceRegular : <LoaderSimple />}
              </div>
            </div>

            <div className="action__product">
              {favPhone
                ? (<AddToCartFav phone={favPhone} width="240px" />)
                : <LoaderSimple />}
            </div>

            <div className="short-tech">
              <div className="short-tech__title">
                <div>Screen</div>
                <div>Resolution</div>
                <div>Processor</div>
                <div>RAM</div>
              </div>

              <div className="short-tech__value">
                <div>{phone ? phone.screen : <LoaderSimple />}</div>
                <div>{phone ? phone.resolution : <LoaderSimple />}</div>
                <div>{phone ? phone.processor : <LoaderSimple />}</div>
                <div>{phone ? phone.ram : <LoaderSimple />}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-wrapper">
        <div className="about">
          <div className="about__main-title">About</div>

          <hr className="is-marginless" />

          {phone ? (phone.description.map(paragraph => (
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
          ))) : <LoaderSimple />}
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
              <div>{phone ? phone.screen : <LoaderSimple />}</div>
              <div>{phone ? phone.resolution : <LoaderSimple />}</div>
              <div>{phone ? phone.processor : <LoaderSimple />}</div>
              <div>{phone ? phone.ram : <LoaderSimple />}</div>
              <div>{phone ? phone.capacity : <LoaderSimple />}</div>
              <div>{phone ? phone.camera : <LoaderSimple />}</div>
              <div>{phone ? phone.zoom : <LoaderSimple />}</div>
              <div>{phone ? phone.cell.slice(-3).join(', ') : <LoaderSimple />}</div>
            </div>
          </div>
        </div>
      </div>
      <Recommended selectedPhone={phone} />
    </div>
  );
};
