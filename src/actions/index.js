import { UPDATE_BOOKING } from './types';

export const updateBooking = (data) => {
  console.log(data)
  return {
    type: UPDATE_BOOKING,
    payload: data
  };
}