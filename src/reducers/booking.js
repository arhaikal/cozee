import { UPDATE_BOOKING } from '../actions/types';

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKING:
      console.log("reducer")
      return {
        ...state,
        booking: action.payload,
      };
    default:
      return state;
  }
}

export const initialState = {}

export default bookingReducer