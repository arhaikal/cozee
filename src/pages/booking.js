import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import { Redirect } from '@reach/router'
import Layout from "../components/layout"
import LandingForm from "../components/landing_form"
import Image from "../components/image"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FREQUENCIES, TIME_SPACE } from "../components/data" 

const initialValues ={ 
  booking: {
    appartmentSize: "", 
    postcode: "",
    frequency: "",
    address:""
  } 
}

const isChecked = (radioValue, storedValue) =>
    radioValue === storedValue;

const IndexPage = () => (
  <Layout>
    <SEO title="Booking" />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1>Let's get your home cleaned</h1>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({ touched, errors, handleSubmit, values, isSubmitting }) => (
            <div className="col-md-12">
              <Form onSubmit={handleSubmit}>
                  <div className="col-md-12">
                    <h6>1- Cleaning details</h6>
                  </div>
                  <div 
                    className="form-group"
                  >
                    <Field
                    component="select"
                    className="form-control"
                    name="booking.appartmentSize"
                    >
                      
                      {TIME_SPACE.map((obj, key) =>
                        <option value={obj.hours} disabled="">{obj.apprtmentSize}</option>
                      )}
                    </Field>
                  </div>
                 
                  {FREQUENCIES.map((frequency, index) => (
                    <label key={index} className="my-2 mt-8 cursor-pointer">
                      <Field name="booking.frequency">
                        {({ field }) => (
                          <input
                            {...field}
                            type="radio"
                            name={field.name}
                            checked={isChecked(frequency.value, field.value)}
                            onChange={() => field.onChange(field.name)(frequency.value)}
                          />
                        )}
                      </Field>
                      <span className="pl-2">{frequency.label}</span>
                    </label>
                  ))}

                  <div className="col-md-12">
                    <h6>2- Where we will clean your home</h6>
                  </div>

                  <div class="row">                 
                    <div 
                      className="col"
                    >
                      <Field
                        type="text"
                        name="booking.address"
                        placeholder="Enter full address"
                        className={`form-control ${
                          touched.address && errors.address ? "is-invalid" : ""
                        }`}
                      />
                    </div>
                    <div 
                      className="col"
                    >
                      <Field
                        type="text"
                        name="booking.postcode"
                        placeholder="Enter postcode"
                        className={`form-control ${
                          touched.postcode && errors.postcode ? "is-invalid" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                    style={{ marginTop: `20px`, backgroundColor: `#B06AB3`, borderColor: `#B06AB3`}} 
                  >
                    {isSubmitting ? "Please wait..." : "Check Availability"}
                  </button>
                  <pre>{JSON.stringify(values, null,2)}</pre>
              </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
  </Layout>
)

export default IndexPage
