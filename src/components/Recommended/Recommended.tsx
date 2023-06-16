import { useState, useEffect } from 'react';
import { getAllPhones, getPhoneById } from '../../api/phones';
import { Slider } from '../Slider';
import { Phone } from '../../types/Phone';

export const Recommended = () => {
  const [allPhones, setAllPhones] = useState<Phone[]>([]);
  const [selectedPhone, setSelectedPhone] = useState<Phone>({} as Phone);
  const [phonesPrevYear, setPhonesPrevYear] = useState<Phone[]>([]);
  const [phonesNextYear, setPhonesNextYear] = useState<Phone[]>([]);
  const [phonesCurrentYear, setPhonesCurrentYear] = useState<Phone[]>([]);

  useEffect(() => {
    const fetchPhones = async () => {
      const phones = await getAllPhones();

      setAllPhones(phones);
    };

    const fetchPhone = async () => {
      const phone = await getPhoneById('32');

      setSelectedPhone(phone);
    };

    fetchPhones();
    fetchPhone();
  }, []);

  useEffect(() => {
    if (selectedPhone.year !== undefined) {
      const currentYear = allPhones.filter(
        (phone) => phone.year === selectedPhone.year,
      );
      const prevYear = allPhones.filter(
        (phone) => phone.year === (selectedPhone.year || 0) - 1,
      );
      const nextYear = allPhones.filter(
        (phone) => phone.year === (selectedPhone.year || 0) + 1,
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

  return <Slider selectedPhones={recommendedPhones} title={title} />;
};
