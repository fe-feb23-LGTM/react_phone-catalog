import axios from 'axios';

const backendUrl = 'http://localhost:3000/registration';

export async function register(email: string, password: string) {
  try {
    const response = await axios.post(backendUrl, { email, password });

    return response.data;
  } catch (error) {
    return error;
  }
}
