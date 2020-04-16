
import { patchBooking } from '../../api/booking'

export const FETCH_CLIENT = 'FETCH_CLIENT';
export const FETCH_CLIENT_SUCCESS = 'FETCH_CLIENT_SUCCESS';
export const FETCH_CLIENT_FAILURE = 'FETCH_CLIENT_FAILURE';

const fetchClientSuccess = (response) => {
  return {
    type: FETCH_CLIENT_SUCCESS,
    payload: response
  }
}

export const updateClient = async (data, state, dispatch) => {
    const values = await patchBooking(state.booking.data.identifier, data);
    dispatch(fetchClientSuccess(values))
}
