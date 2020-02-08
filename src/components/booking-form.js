import React, { useState, useContext } from 'react';
import { BookingStepProvider } from '../context/BookingStepContext'
import BookingStep1 from './booking-step-1';
import BookingStep2 from './booking-step-2';
import BookingStep3 from './booking-step-3';
import BookingSummary from './booking-summary'


const BookingForm = () => {
  return (
    <div>
      <BookingStepProvider>
        <BookingStep1 />
        <BookingStep2 />
        <BookingStep3 />
      </BookingStepProvider>
    </div >
  );
};

export default BookingForm;
