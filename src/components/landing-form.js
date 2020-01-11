import React, { useContext, useState } from 'react';
import { AREA } from './data';
import { BookingContext } from '../context/BookingContext';
import { updateBooking } from '../actions/index'
import { navigate } from "gatsby"

const LandingForm = () => {
  const [state, dispatch] = useContext(BookingContext);
  const [area, setArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBooking({ "area": area }, state, dispatch))
    navigate("/booking/")
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
            onChange={(e) => setArea(e.target.value)}
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
