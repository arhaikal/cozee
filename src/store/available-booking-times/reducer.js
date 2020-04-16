import {
  FETCH_BOOKING_TIMES_SUCCESS,
  FETCH_BOOKING_TIMES_FAILURE,
  FETCH_BOOKING_TIMES,
} from './actions';

export const availableTimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKING_TIMES:
      return {
        ...state,
        isFetchingBookingTimes: true
      };
    case FETCH_BOOKING_TIMES_SUCCESS:
      return {
        ...state,
        available_times: action.payload,
        isFetchingBookingTimes: false,
      };
    case FETCH_BOOKING_TIMES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingBookingTimes: false
      };
    default:
      return state;
  }
}

export const initialState = {
  available_times: []
}
