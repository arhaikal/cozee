import {
  FETCH_UPDATED_BOOKING_SUCCESS,
  FETCH_UPDATED_BOOKING_FAILURE,
  FETCH_SERVICES,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE,
} from '../actions/types';

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SERVICES:
      return {
        ...state,
        isFetchingServices: true
      };
    case FETCH_UPDATED_BOOKING_SUCCESS:
      return {
        ...state,
        booking: action.payload,
      };
    case FETCH_UPDATED_BOOKING_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
        isFetchingServices: false
      };
    case FETCH_SERVICES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const initialState = {
  booking: {
    "additional_details": "",
    "address_query": "",
    "area": "0-39",
    "currency": "EUR",
    "duration": "0.0",
    "ends_at": null,
    "frequency": "once",
    "hourly_rates": {
      "weekly": "17.0",
      "biweekly": "18.0",
      "monthly": "19.0",
      "once": "20.0"
    },
    "starts_at": null,
    "total_cost": "0.0",
    "zip_code": "",
  }
}

export default bookingReducer