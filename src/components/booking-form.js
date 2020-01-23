import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import FrequencySelector from './frequency-selector'
import { DurationSelector } from './duration-selector'
import { AreaSelector } from './area-selector'
import { AddressInput } from './address-input'
import { Client } from './client'
import { Calendar } from './calendar'


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
      <Calendar />
      <Client />
    </div>
  );
};

export default BookingForm;
