import { useState, useEffect } from 'react';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Slider } from '../Slider';

export const Recommended = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const title = 'You may also like';

  useEffect(() => {
    getPhones('price', '16', '1').then((data) => setPhones(data));
  }, []);

  return (
    <Slider selectedPhones={phones} title={title} />
  );
};
