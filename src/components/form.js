import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from 'axios';


const LoginSchema = Yup.object().shape({
  appartmentSize: Yup
    .string()
    .required("appartment Size is required"),
  postcode: Yup.string()
    .min(3, "postcode must be 3 characters at minimum")
    .required("postcode is required")
});

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-7">
            <Formik
              initialValues={{ appartmentSize: "", postcode: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="row">
                    <div className="col">
                    <Field
                    component="select"
                    className="form-control"
                    name="appartmentSize"
                    >
                      <option value="" disabled="">Home size</option>
                      <option value="2">&lt; 40m²</option>
                      <option value="2.5">40 - 49m²</option>
                      <option value="3">50 - 59m²</option>
                      <option value="3.5">60 - 69m²</option>
                      <option value="4">70 - 84m²</option>
                      <option value="4.5">85 - 99m²</option>
                      <option value="5">100 - 114m²</option>
                      <option value="5.5">115 - 129m²</option>
                      <option value="6">130 - 144m²</option>
                      <option value="6.5">145 - 159m²</option>
                      <option value="7">160 - 174m²</option>
                      <option value="7.5">175 - 190m²</option>
                      <option value="8">&gt; 190m²</option>
                    </Field>
                  </div>
                  <div className="col">
                    <Field
                      type="postcode"
                      name="postcode"
                      placeholder="Enter postcode"
                      className={`form-control ${
                        touched.postcode && errors.postcode ? "is-invalid" : ""
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block col"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}
