import axios from 'axios';
import { getItemFromStorage } from './localStorage';

export default async (method, url, data, config) => {
  axios.defaults.baseURL = process.env.API_URL;
  axios.defaults.headers.common.Authorization = getItemFromStorage('token');
  const response = await axios({
    method,
    url,
    data,
    config
  });
  return response;
};
