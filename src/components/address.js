
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Address = () => {
  const [state, dispatch] = useContext(BookingContext);
  const handleClick = (key) => {
    console.log(key)
    dispatch(updateBooking({ "frequency": key }))
  }

  return (
    <div>
      {Object.keys(hourlyRates).map((key, index) => {
        const selected = state.booking.frequency === key
        const border = selected ? 'primary' : 'light-border'
        return (
          <Card
            className={`card-list`}
            border={border}
            onClick={() => handleClick(key)}
            key={index}
          >
            <Card.Body>{key}</Card.Body>
          </Card>
        );
      })}
    </div>
  );
}