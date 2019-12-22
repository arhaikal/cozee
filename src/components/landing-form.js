import axios from 'axios';
import { FREQUENCIES, TIME_SPACE } from "../components/data" 
import { BookingContext } from "../context/BookingContext"
import React, { useState, useContext } from "react"



const instance = axios.create({
  baseURL: 'https://api.cozee.ee',
  headers: {'Content-Type': 'application/json'}
});

const LandingForm = () => {
    const [appartmentSize, setAppartmentSize] = useState('');
    const [booking, setBooking] = useContext(BookingContext);
    const [postcode, setPostcode] = useState('');
  
    console.log(booking)
    const handleSubmit = (e) => {
      e.preventDefault();
      setBooking(prevBooking => ({
          ...prevBooking.booking,   
          appartmentSize: appartmentSize, 
          postcode: postcode,
          land: false,
          book: true     
        })
      )
  }

  const updateAppartmentSize = (e) => {
    setAppartmentSize(e.target.value)
  }
  const updatePostcode = (e) => {
    setPostcode(e.target.value)
  }
    return (
      <form onSubmit={handleSubmit}>
    <div className="row">
      <div 
        className="col"
        style={{ paddingLeft: `0px`}}
      >
        <select
        component="select"
        className="form-control"
        name="appartmentSize"
        onChange={updateAppartmentSize}
        >
          {TIME_SPACE.map((obj, key) =>
            <option value={obj.hours} disabled="" key={key}>{obj.appartmentSize}</option>
          )}
        </select>
      </div>
      <div 
        className="col"
        style={{ paddingRight: `0px`}}
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
        style={{ marginTop: `20px`, backgroundColor: `#B06AB3`, borderColor: `#B06AB3`}} 
      >
        Check Availability
      </button>

    </div>
    </form>
    );
}

export default LandingForm
