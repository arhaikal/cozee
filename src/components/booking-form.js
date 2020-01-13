import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { Form, Button } from 'react-bootstrap';
import { FrequencySelector } from './frequency-selector'
import { DurationSelector } from './duration-selector'
import { AreaSelector } from './area-selector'
import { AddressInput } from './address-input'
import { Client } from './client'


const BookingForm = () => {
  const [state, dispatch] = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <AreaSelector />
      <DurationSelector />
      <FrequencySelector />
      <AddressInput />
      <Client />
    </div>
  );
};

export default BookingForm;
