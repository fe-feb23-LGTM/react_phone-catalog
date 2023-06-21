import { useEffect, useState } from 'react';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';
import { Loader } from '../Loader';

interface Props {
  name: string;
  telegram: string;
  github: string;
  mail: string;
  linkedin: string;
}

export const Contact: React.FC<Props> = ({
  name, telegram, github, mail, linkedin,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const p = await awsGetPhoto(
          `contacts/${name.split(' ')[1]}.jpg`,
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
    <div className="contact">
      {photoUrl
        ? <img src={photoUrl} alt="name" className="contact__img" />
        : <Loader />}

      <div className="contact__info">
        <h1 className="contact__name">{name}</h1>
        <ul className="contact__socials">
          <li>
            <a href={telegram}>
              <i className="fa fa-telegram" />
            </a>
          </li>
          <li>
            <a href={`mailto:${mail}`} aria-label="mail">
              <i className="fa fa-envelope" />
            </a>
          </li>
          <li>
            <a href={linkedin} aria-label="linkedin">
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a href={github} aria-label="github">
              <i className="fa fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
