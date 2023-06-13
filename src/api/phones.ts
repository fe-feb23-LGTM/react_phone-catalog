/* eslint-disable no-console */
import { Phone } from '../types/Phone';

const phonesUrl = 'https://backend-phone-catalog.onrender.com/phones';

export const getPhones = async (): Promise<Phone[]> => {
  // const URL = `${phonesUrl}`;

  return fetch(phonesUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};
