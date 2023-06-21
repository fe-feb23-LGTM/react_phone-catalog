/* eslint-disable max-len */
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

const wait = (delay: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
};

export const getPhones = async (
  sortby: string,
  itemsOnPage: string,
  page: string,
  query: string,
): Promise<Phone[]> => {
  const startItem = page === '1'
    ? '1'
    : ((Number(itemsOnPage) * Number(page)) - Number(itemsOnPage)).toString();

  const newQuery = query.trim().toLocaleLowerCase().split(' ').join('-');

  const sortByCase = sortBySwitch(sortby);
  const startAndQuantity = `&from=${startItem}&to=${itemsOnPage}`;
  const queryParam = query ? `&query=${encodeURIComponent(newQuery)}` : '';
  const URL = phonesUrl + sortByCase + startAndQuantity + queryParam;

  return wait(100)
    .then(() => fetch(URL))
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

export const getPhoneById = async (id: string): Promise<Phone> => {
  return fetch(`${phonesUrl}/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};

export const getPhoneAboutById = async (id: string) => {
  const phonesAboutUrl = 'https://backend-phone-catalog.onrender.com/products';

  return fetch(`${phonesAboutUrl}/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};
