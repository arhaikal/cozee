import * as Yup from "yup";
import axios from 'axios';
import { Redirect } from '@reach/router'
import Layout from "../components/layout"
import LandingForm from "../components/landing_form"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FREQUENCIES, TIME_SPACE } from "../components/data" 
import { BookingContext } from "../context/BookingContext"
import React, { useState, useContext } from "react"



const BookingPage = () => {
  const [appartmentSize, setAppartmentSize] = useState('');
  const [postcode, setPostcode] = useState('');
  const [booking, setBooking] = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooking(prevBooking => ({
      booking: {                   
          ...prevBooking.booking,   
          appartmentSize: appartmentSize,
          postcode: postcode     
      }
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
    <Layout>
      <SEO title="Booking" />
        <form onSubmit={handleSubmit}>
          <label>Appartment Size:</label>
            <select
            onChange={updateAppartmentSize}
            >
              {TIME_SPACE.map((obj, key) =>
                <option value={obj.hours} disabled="">{obj.apprtmentSize}</option>
              )}
            </select>
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
          <input type='submit' value='add' />
        </form>
    </Layout>
  )
}

export default BookingPage
