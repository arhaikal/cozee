
import { postBooking, patchBooking } from '../../api/booking'
import { getAllServices } from '../../api/services'

export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

export const FETCH_ADDRESS = 'FETCH_ADDRESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';
export const FETCH_UPDATED_BOOKING_ADDRESS_SUCCESS = 'FETCH_UPDATED_BOOKING_ADDRESS_SUCCESS';

export const FETCH_UPDATED_BOOKING_SUCCESS = 'FETCH_UPDATED_BOOKING_SUCCESS';
export const FETCH_UPDATED_BOOKING_FAILURE = 'FETCH_UPDATED_BOOKING_FAILURE';

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

export const getServices = async (state, dispatch) => {
  dispatch({ type: 'FETCH_SERVICES' });

  try {
    const values = await getAllServices();
    dispatch(fetchServicesSuccess(values));
  } catch (error) {
    dispatch(fetchServicesFailure(error));
  }
}
