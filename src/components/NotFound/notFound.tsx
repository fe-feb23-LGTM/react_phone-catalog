import { useEffect, useState } from 'react';
import { awsGetPhoto } from '../../_utils/awsGetPhoto';

export const NotFound: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const p = await awsGetPhoto(
          'img/404.png',
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
    <>
      {photoUrl ? (
        <>
          <div className="image-container">
            <img className="image404" src={photoUrl} alt="logo" />
          </div>
        </>
      ) : (
        <img src="fallback-image.png" alt="placeholder" />
      )}
    </>
  );
};
