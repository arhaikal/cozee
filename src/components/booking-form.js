import axios from 'axios';
import { navigate } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, AREA } from './data';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { cozeeApi } from '../api/bookingApi'

const BookingForm = () => {
  const [state, dispatch] = useContext(BookingContext);


  const postBooking = async (data) => {
    if (state.booking.identifier) {
      console.log(state.booking.identifier)
      const response = await cozeeApi.patch('' + state.booking.identifier, data);
      dispatch(updateBooking(response.data))
    } else {
      console.log("nop")
      const response = await cozeeApi.post('', data);
      dispatch(updateBooking(response.data))
    }
  };

  const updateArea = (e) => {
    console.log(e.target.value)
    postBooking({ "area": e.target.value })
    navigate("/")
  };

  const updateZipcode = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="col"
        style={{ paddingLeft: '0px' }}
      >
        <input
          type="zipcode"
          name="zipcode"
          placeholder="Enter zipcode"
          onChange={updateZipcode}
          defaultValue={state.booking.zip_code}
        />
      </div>

      <div
        className="col"
        style={{ paddingLeft: '0px' }}
      >
        <select
          component="select"
          className="form-control"
          name="area"
          onChange={updateArea}
          value={state.booking.area}
        >
          {AREA.map((obj, key) => <option value={obj.size} disabled="" key={key}>{obj.size}</option>)}
        </select>
      </div>
      <input type="submit" value="add" />
    </form >
  );
};

export default BookingForm;
