import React, { useReducer, createContext } from 'react';
import { initialState, bookingReducer } from '../store/booking/reducer'
import { clientState, clientReducer } from '../store/client/reducer'
import combineReducers from 'react-combine-reducers';

export const BookingContext = createContext();

export const BookingProvider = (props) => {

  const [rootReducerCombined, initialStateCombined] = combineReducers({
    booking: [bookingReducer, initialState],
    client: [clientReducer, clientState]
  });

  const [state, dispatch] = useReducer(rootReducerCombined, initialStateCombined);

  return (
    <BookingContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookingContext.Provider>
  );
};
