import { useState, useEffect } from 'react';
import { getAllPhones } from '../../api/phones';
import { Slider } from '../Slider';
import { Phone } from '../../types/Phone';
import { ProductPhone } from '../../types/ProductPhone';

interface Props {
  selectedPhone: ProductPhone | null;
}

export const Recommended: React.FC<Props> = ({ selectedPhone }) => {
  const [allPhones, setAllPhones] = useState<Phone[]>([]);
  const [phonesPrevYear, setPhonesPrevYear] = useState<Phone[]>([]);
  const [phonesNextYear, setPhonesNextYear] = useState<Phone[]>([]);
  const [phonesCurrentYear, setPhonesCurrentYear] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      setIsLoading(true);

      const phones = await getAllPhones();

      setAllPhones(phones);

      setIsLoading(false);
    };

    fetchPhones();
  }, []);

  const selectPhone = allPhones.find(
    (phone) => phone.phoneId === selectedPhone?.id,
  );

  useEffect(() => {
    if (selectPhone?.year !== undefined) {
      const currentYear = allPhones.filter(
        (phone) => phone.year === selectPhone?.year,
      );
      const prevYear = allPhones.filter(
        (phone) => phone.year === (selectPhone?.year || 0) - 1,
      );
      const nextYear = allPhones.filter(
        (phone) => phone.year === (selectPhone?.year || 0) + 1,
      );

      setPhonesCurrentYear(currentYear.slice(0, 4));
      setPhonesPrevYear(prevYear.slice(0, 4));
      setPhonesNextYear(nextYear.slice(0, 4));
    }
  }, [allPhones, selectedPhone]);

  const recommendedPhones = [
    ...phonesNextYear,
    ...phonesCurrentYear,
    ...phonesPrevYear,
  ];
  const title = 'You may also like';

  return (
    <div className="small__slider">
      <Slider
        selectedPhones={recommendedPhones}
        title={title}
        isLoading={isLoading}
      />
    </div>
  );
};
