import {
  FETCH_CLIENT,
  FETCH_CLIENT_SUCCESS,
  FETCH_CLIENT_FAILURE,
} from './actions';

export const clientReducer = (state = clientState, action) => {
  switch (action.type) {
    case FETCH_CLIENT_SUCCESS:
      return {
        ...state,
        data: {
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,
          phone: action.payload.phone,
          email: action.payload.email
        }
      };
    default:
      return state;
  }
}

export const clientState = {
  data: {},
  isLoading: false,
  error: null,
}

export default clientReducer
