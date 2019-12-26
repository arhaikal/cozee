import axios from 'axios';
import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, TIME_SPACE } from './data';
import { BookingContext } from '../context/BookingContext';

const instance = axios.create({
  baseURL: 'https://api.cozee.ee/bookings',
  headers: { 'Content-Type': 'application/json' },
});

const BookingForm = () => {
  const [appartmentSize, setAppartmentSize] = useState('');
  const [postcode, setPostcode] = useState('');
  const [booking, setBooking] = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiResponse = instance.post('', {
      booking: {
        duration: appartmentSize.hours,
        area: appartmentSize.size,
        zip_code: postcode,
      },
    });
    const zip = apiResponse.then((response) => {
      console.log(response.data.zip_code);
      setBooking((prevBooking) => ({
        ...prevBooking,
        ...response.data,
      }));
    });
    navigate("/")
  };

  const updateAppartmentSize = (e) => {
    setAppartmentSize(e.target.value);
  };
  const updatePostcode = (e) => {
    setPostcode(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className="col"
        style={{ paddingRight: '0px' }}
      >
        <input
          type="postcode"
          name="postcode"
          placeholder="Enter postcode"
          onChange={updatePostcode}
          defaultValue="222"
        />
      </div>
      <input type="submit" value="add" />
    </form>
  );
};

export default BookingForm;
