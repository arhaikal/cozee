import {
  FETCH_ADDRESS,
  FETCH_ADDRESS_FAILURE,
  FETCH_ADDRESS_SUCCESS
} from './actions';
import { NavLink } from 'react-router-dom';

export const addressState = {
  data: null,
  isLoading: false,
  error: null,
}

export const address = (state = addressState, action) => {
  switch (action.type) {
    case FETCH_ADDRESS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ADDRESS_SUCCESS:
      return {
        ...state,
        data: action.payload.address,
        error: null,
        isLoading: false
      };
    case FETCH_ADDRESS_FAILURE:
      return {
        ...state,
        error: action.payload,
        data: null,
        isLoading: false,
      };
    default:
      return state;
  }
}
