import React, { useReducer, createContext } from 'react';
import { initialState, availableTimesReducer } from '../reducers/available-booking-times'

export const AvailableBookingTimesContext = createContext();

export const AvailableBookingTimesProvider = (props) => {
  const [state, dispatch] = useReducer(
    availableTimesReducer, initialState
  );

  return (
    <AvailableBookingTimesContext.Provider value={[state, dispatch]}>
      {props.children}
    </AvailableBookingTimesContext.Provider>
  );
};
