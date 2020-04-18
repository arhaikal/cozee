import {
  FETCH_BOOKING_TIMES_SUCCESS,
  FETCH_BOOKING_TIMES_FAILURE,
  FETCH_BOOKING_TIMES,
} from "./actions"

export const availableTimesState = {
  data: [],
  isLoading: false,
  error: null,
}

export const availableTimes = (state = availableTimesState, action) => {
  switch (action.type) {
    case FETCH_BOOKING_TIMES:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_BOOKING_TIMES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FETCH_BOOKING_TIMES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
