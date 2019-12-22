import React, { useState, createContext } from "react";

export const BookingContext = createContext();

export const BookingProvider = props => {
  const [booking, setBooking] = useState({
    appartmentSize: "2", 
    postcode: "22",
    frequency: "",
    address:"",
    land: true,
    book: false
  });

  return(
    <BookingContext.Provider value={[booking, setBooking]}>
      { props.children }
    </BookingContext.Provider>
  );
}