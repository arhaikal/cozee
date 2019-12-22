import axios from 'axios';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, TIME_SPACE } from './data';
import { BookingContext } from '../context/BookingContext';

const instance = axios.create({
  baseURL: 'https://api.cozee.ee/bookings',
  headers: { 'Content-Type': 'application/json' },
});

const LandingForm = () => {
  const [appartmentSize, setAppartmentSize] = useState('');
  const [booking, setBooking] = useContext(BookingContext);
  const [postcode, setPostcode] = useState('');

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
        ...response.data,
      }));
    });
  };

  const updateAppartmentSize = (e) => {
    setAppartmentSize(e.target.value);
    console.log(e.target.value[0]);
  };
  const updatePostcode = (e) => {
    setPostcode(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div
          className="col"
          style={{ paddingLeft: '0px' }}
        >
          <select
            component="select"
            className="form-control"
            name="appartmentSize"
            onChange={updateAppartmentSize}
          >
            {TIME_SPACE.map((obj, key) => <option value={[obj.size, obj.hours]} disabled="" key={key}>{obj.size}</option>)}
          </select>
        </div>
        <div
          className="col"
          style={{ paddingRight: '0px' }}
        >
          <input
            type="postcode"
            name="postcode"
            placeholder="Enter postcode"
            onChange={updatePostcode}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          style={{ marginTop: '20px', backgroundColor: '#B06AB3', borderColor: '#B06AB3' }}
        >
          Check Availability
        </button>

      </div>
    </form>
  );
};

export default LandingForm;
