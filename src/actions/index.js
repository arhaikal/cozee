import axios from 'axios';
import {
  FETCH_UPDATED_BOOKING_SUCCESS,
  FETCH_UPDATED_BOOKING_FAILURE,
  FETCH_BOOKING_TIMES,
  FETCH_BOOKING_TIMES_SUCCESS,
  FETCH_BOOKING_TIMES_FAILURE,
  FETCH_SERVICES,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
  FETCH_ADDRESS,
  FETCH_ADDRESS_FAILURE,
  FETCH_UPDATED_BOOKING_ADDRESS_SUCCESS
} from './types';
import { postBooking, patchBooking } from '../api/booking'
import { getAvailableTimes } from '../api/available-times'
import { getAllServices } from '../api/services'

const fetchAddressFailure = (response) => {
  return {
    type: FETCH_ADDRESS_FAILURE,
    payload: response
  }
}

const fetchUpdatedBookingAddressSuccess = (response) => {
  return {
    type: FETCH_UPDATED_BOOKING_ADDRESS_SUCCESS,
    payload: response
  }
}

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

const fetchServicesSuccess = (response) => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: response
  }
}

const fetchServicesFailure = (error) => {
  return {
    type: FETCH_SERVICES_FAILURE,
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

export const getAddress = async (data, state, dispatch) => {
  dispatch({ type: 'FETCH_ADDRESS' });

  try {
    const values = await patchBooking(state.booking.identifier, data);
    dispatch(fetchUpdatedBookingAddressSuccess(values));
  } catch (error) {
    dispatch(fetchAddressFailure(error));
  }
}


export const getBookingTimes = async (data, state, dispatch) => {
  dispatch({ type: 'FETCH_BOOKING_TIMES' });

  try {
    const values = await getAvailableTimes(data);
    setTimeout(() => {
      dispatch(fetchBookingTimesSuccess(values));
    }, 500)
  } catch (error) {
    dispatch(fetchBookingTimesFailure(error));
  }
}

export const getServices = async (state, dispatch) => {
  dispatch({ type: 'FETCH_SERVICES' });

  try {
    const values = await getAllServices();
    dispatch(fetchServicesSuccess(values));
  } catch (error) {
    dispatch(fetchServicesFailure(error));
  }
}