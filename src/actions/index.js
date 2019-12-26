import { UPDATE_BOOKINGS } from './types';

export function updateBookings(data) {
  return {
    type: UPDATE_BOOKINGS,
    payload: data
  };
}