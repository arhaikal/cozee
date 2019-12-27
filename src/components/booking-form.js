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

  const handleSubmit = (e) => {
    e.preventDefault();
    async function postBooking(data) {
      const response = await cozeeApi.post('', data);
      dispatch(updateBooking(response.data))
    }
    postBooking({ zip_code: zipcode })
  };

  const updateAppartmentSize = (e) => {
    setAppartmentSize(e.target.value);
  };
  const updateZipcode = (e) => {
    setZipcode(e.target.value);
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
          defaultValue={state.booking.zip_code}
        />
      </div>
      <input type="submit" value="add" />
    </form>
  );
};

export default BookingForm;
