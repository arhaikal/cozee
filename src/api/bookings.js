import cozeeApi from './apiClient';

export async function getBooking(id) {
  const response = await cozeeApi.get(id);
  return response.data;
}

export async function patchBooking(id) {
  const response = await cozeeApi.get(id);
  return response.data;
}

export async function postBooking(id) {
  const response = await cozeeApi.post(id);
  return response.data;
}