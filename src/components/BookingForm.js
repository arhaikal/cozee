import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import FrequencySelector from './FrequencySelector'
import { DurationSelector } from './DurationSelector'
import { AreaSelector } from './AreaSelector'
import { AddressInput } from './AddressInput'
import { Client } from './Client'
import { Calendar } from './Calendar'


const BookingForm = () => {
  const [state, dispatch] = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Calendar />
      <AreaSelector />
      <DurationSelector />
      <FrequencySelector />
      <AddressInput />
      <Client />
    </div>
  );
};

export default BookingForm;
