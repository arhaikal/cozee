
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Card } from 'react-bootstrap';

export const FrequencySelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const handleClick = (key) => {
    dispatch(updateBooking({ "frequency": key }, state, dispatch))
  }
  const hourlyRates = state.booking.hourly_rates

  return (
    <Card className={"card-big"}>
      <Card.Body>
        <Card.Title>How often do you want us to clean?</Card.Title>
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
      </Card.Body>
    </Card>
  );
}