import {
  FETCH_UPDATED_USER_SUCCESS,
} from '../actions/types';

export const clientReducer = (state = clientState, action) => {
  switch (action.type) {
    case FETCH_UPDATED_USER_SUCCESS:
      return {
        ...state,
        data: action.payload
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
