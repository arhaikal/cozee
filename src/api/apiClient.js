import axios from 'axios';

export const cozeeApi = axios.create({
  baseURL: 'https://api.cozee.ee/bookings/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


const errorHandler = (error) => {
  if (error.response && 401 === error.response.status) {
    window.location.assign('/');
  } else {
    return Promise.reject(error);
  }
};

cozeeApi.interceptors.response.use(undefined, errorHandler);