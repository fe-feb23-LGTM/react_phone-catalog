import { Phone } from '../types/Phone';

// https://backend-phone-catalog.onrender.com/phones?sortBy=year&sortOrder=DESC&from=13&to=16

const phonesUrl = 'https://backend-phone-catalog.onrender.com/phones';

const sortBySwitch = (sortby: string) => {
  switch (sortby) {
    case 'newest':
      return '?sortBy=year&sortOrder=DESC';
    case 'oldest':
      return '?sortBy=year&sortOrder=ASC';
    case 'low':
      return '?sortBy=price&sortOrder=ASC';
    case 'high':
      return '?sortBy=price&sortOrder=DESC';
    default:
      return '?sortBy=price&sortOrder=DESC';
  }
};

export const getPhones = async (
  sortby: string,
  itemsOnPage: string,
  page: string,
): Promise<Phone[]> => {
  const startItem = (Number(itemsOnPage) * Number(page)).toString();
  const sortByCase = sortBySwitch(sortby);
  const startAndQuantity = `&from=${startItem}&to=${itemsOnPage}`;
  const URL = phonesUrl + sortByCase + startAndQuantity;

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};

export const getAllPhones = async (): Promise<Phone[]> => {
  return fetch(phonesUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};
