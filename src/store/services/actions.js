
import { getAllServices } from '../../api/services'

export const FETCH_SERVICES = 'FETCH_SERVICES';
export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const FETCH_SERVICES_FAILURE = 'FETCH_SERVICES_FAILURE';

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

export const getServices = async (state, dispatch) => {
  dispatch({ type: 'FETCH_SERVICES' });

  try {
    const values = await getAllServices();
    dispatch(fetchServicesSuccess(values));
  } catch (error) {
    dispatch(fetchServicesFailure(error));
  }
}
