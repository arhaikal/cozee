import axios from 'axios';
import { Redirect } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, TIME_SPACE } from './data';
import { BookingContext } from '../context/BookingContext';


const BookingForm = () => {
  const [appartmentSize, setAppartmentSize] = useState('');
  const [postcode, setPostcode] = useState('');
  const [booking, setBooking] = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooking((prevBooking) => ({
      ...prevBooking.booking,
      appartmentSize,
      postcode,
      land: true,
      book: false,
    }));
  };

  const updateAppartmentSize = (e) => {
    setAppartmentSize(e.target.value);
  };
  const updatePostcode = (e) => {
    setPostcode(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Appartment Size:</label>
      <select
        onChange={updateAppartmentSize}
      >
        {TIME_SPACE.map((obj, key) => <option value="5" disabled="" key={key}>{obj.appartmentSize}</option>)}
      </select>
      <div
        className="col"
        style={{ paddingRight: '0px' }}
      >
        <input
          type="postcode"
          name="postcode"
          placeholder="Enter postcode"
          onChange={updatePostcode}
          value={booking.postcode}
        />
      </div>
      <input type="submit" value="add" />
    </form>
  );
};

export default BookingForm;
