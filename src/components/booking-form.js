import axios from 'axios';
import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, TIME_SPACE } from './data';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { cozeeApi } from '../api/bookingApi'

const BookingForm = () => {
  const [appartmentSize, setAppartmentSize] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, dispatch] = useContext(BookingContext);


  const postBooking = async (data) => {
    if (state.booking) {
      console.log(state.booking.identifier)
      const response = await cozeeApi.patch('' + state.booking.identifier, data);
      dispatch(updateBooking(response.data))
    } else {
      console.log("nop")
      const response = await cozeeApi.post('', data);
      dispatch(updateBooking(response.data))
    }
  };

  const updateAppartmentSize = (e) => {
    setAppartmentSize(e.target.value);
  };
  const updateZipcode = (e) => {
    setZipcode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBooking({ zip_code: zipcode })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="col"
        style={{ paddingRight: '0px' }}
      >
        <input
          type="zipcode"
          name="zipcode"
          placeholder="Enter zipcode"
          onChange={updateZipcode}
        />
      </div>
      <input type="submit" value="add" />
    </form>
  );
};

export default BookingForm;
