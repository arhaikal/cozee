import axios from 'axios';
import React, { useState, useContext } from 'react';
import { FREQUENCIES, AREA } from './data';
import { BookingContext } from '../context/BookingContext';
import { Redirect } from 'react-router-dom';

const LandingForm = () => {
  const [state, dispatch] = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateArea = (e) => {
    console.log(e.target.value)
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
            onChange={updateArea}
            value={state.booking.area}
          >
            {AREA.map((obj, key) => <option value={obj.size} disabled="" key={key}>{obj.size}</option>)}
          </select>
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
