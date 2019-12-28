
import axios from 'axios';
import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { cozeeApi } from '../api/bookingApi'
import { Card } from 'react-bootstrap';

export const FrequencySelector = () => {
  const [state, dispatch] = useContext(BookingContext);
  const hourlyRates = state.booking.hourly_rates
  const handleClick = (key) => {
    console.log(key)
    postBooking({ "frequency": key })
  }

  const postBooking = async (data) => {
    if (state.booking.identifier) {
      console.log(state.booking.identifier)
      const response = await cozeeApi.patch(`${state.booking.identifier}`, data);
      dispatch(updateBooking(response.data))
    } else {
      console.log("nop")
      const response = await cozeeApi.post('', data);
      dispatch(updateBooking(response.data))
    }
  };

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