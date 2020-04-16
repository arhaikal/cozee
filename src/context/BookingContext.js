import React, { useReducer, createContext } from 'react';
import { booking, bookingState} from '../store/booking/reducer'
import { client, clientState} from '../store/client/reducer'
import { address, addressState } from '../store/address/reducer'
import { services, servicesState } from '../store/services/reducer'
import { availableTimes, availableTimesState } from '../store/available-booking-times/reducer'
import combineReducers from 'react-combine-reducers';

export const BookingContext = createContext();

export const BookingProvider = (props) => {

  const [rootReducerCombined, initialStateCombined] = combineReducers({
    booking: [booking, bookingState],
    client: [client, clientState],
    services: [services, servicesState],
    availableTimes: [availableTimes, availableTimesState],
    address: [address, addressState]
  });

  const [state, dispatch] = useReducer(rootReducerCombined, initialStateCombined);

  return (
    <BookingContext.Provider value={[state, dispatch]}>
      {props.children}
    </BookingContext.Provider>
  );
};
