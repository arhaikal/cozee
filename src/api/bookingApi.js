import axios from 'axios';

export const cozeeApi = axios.create({
  baseURL: 'https://api.cozee.ee/bookings/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});


export async function postBooking(data, dispatch) {
  console.log('api call')
  const response = await cozeeApi.post('', data);
  dispatch(response);
}