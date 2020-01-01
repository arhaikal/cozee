import axios from 'axios';
import { UPDATE_BOOKING, FETCH_UPDATED_BOOKING_SUCCESS, FETCH_UPDATED_BOOKING_FAILURE } from './types';
import { postBooking, patchBooking } from '../api/bookingApi'

const fetchUpdatedBookingSuccess = (response) => {
  return {
    type: FETCH_UPDATED_BOOKING_SUCCESS,
    payload: response
  }
}

const fetchUpdatedBookingFailure = (error) => {
  return {
    type: FETCH_UPDATED_BOOKING_FAILURE,
    payload: error
  }
}

export const updateBooking = async (data, state, dispatch) => {
  try {
    if (state.booking.identifier) {
      const values = await patchBooking(state.booking.identifier, data);
      dispatch(fetchUpdatedBookingSuccess(values));
    } else {
      const values = await postBooking(data);
      dispatch(fetchUpdatedBookingSuccess(values));
    }
  } catch (error) {
    dispatch(fetchUpdatedBookingFailure(error));
  }
}