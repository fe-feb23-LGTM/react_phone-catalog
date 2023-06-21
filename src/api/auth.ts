import axios from 'axios';

const backendUrl = 'https://backend-phone-catalog.onrender.com';
const reg = '/registration';
const log = '/login';

export async function register(email: string, password: string) {
  try {
    const response = await axios.post(backendUrl + reg, { email, password });

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(backendUrl + log, { email, password });

    return response.data;
  } catch (error) {
    return error;
  }
}
