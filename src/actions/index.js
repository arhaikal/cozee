import axios from 'axios';
import {
  FETCH_UPDATED_BOOKING_SUCCESS,
  FETCH_UPDATED_BOOKING_FAILURE,
  FETCH_BOOKING_TIMES_SUCCESS,
  FETCH_BOOKING_TIMES_FAILURE
} from './types';
import { postBooking, patchBooking } from '../api/booking'
import { getAvailableTimes } from '../api/available-times'

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

const fetchBookingTimesSuccess = (response) => {
  return {
    type: FETCH_BOOKING_TIMES_SUCCESS,
    payload: response
  }
}

const fetchBookingTimesFailure = (error) => {
  return {
    type: FETCH_BOOKING_TIMES_FAILURE,
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

export const getBookingTimes = async (data, state, dispatch) => {
  try {
    const values = await getAvailableTimes(data);
    dispatch(fetchBookingTimesSuccess(values));
  } catch (error) {
    dispatch(fetchBookingTimesFailure(error));
  }
}