import { FETCH_BOOKING_TIMES_SUCCESS, FETCH_BOOKING_TIMES_FAILURE } from '../actions/types';

export const availableTimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKING_TIMES_SUCCESS:
      return {
        ...state,
        available_times: action.payload,
      };
    case FETCH_BOOKING_TIMES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const initialState = {
  available_times: {
  }
}