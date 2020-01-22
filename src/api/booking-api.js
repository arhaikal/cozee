import axios from 'axios';

export const cozeeApi = axios.create({
  baseURL: 'https://api.cozee.ee/bookings/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


export async function postBooking(data) {
  const response = await cozeeApi.post('', data);
  return response.data
}

export async function patchBooking(id, data) {
  const response = await cozeeApi.patch(`${id}`, data);
  return response.data
}
