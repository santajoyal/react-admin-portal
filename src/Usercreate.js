import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function Usercreate() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};
      console.log(values);
      if (!values.name) {
        error.name = "please enter a value";
      }
      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = "username must be between 3 to 15 characters";
      }

      if (!values.email) {
        error.email = "please enter a email";
      }

      //regular expression
      //regx

      if (
        values.email &&
        !/^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,4}$/i.test(values.email)
      ) {
        error.email = "please enter a valid email";
      }

      if (values.phone.toString().length !== 10) {
        error.phone = "please enter a valid phonenumber";
      }

      console.log(values.dob);
      console.log(values.dob.split("-"));
      console.log(new Date().getFullYear());
      let age = new Date().getFullYear() -parseInt(values.dob.split("-"));
      console.log(age);

      if(age < 18){
      error.dob = "you must be above 18"
      }
      return error;
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const userdata = await axios.post(
          "https://6346c13f9eb7f8c0f884b683.mockapi.io/users",
          values
        );
        alert("success");
      } catch (error) {
        alert("error");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>Username *</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.touched.name && formik.errors.name ? "error-box" : ""
                } ${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email *</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"email"}
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
                } ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="form-control"
              >
                <option value={""}>---Select Country---</option>
                <option value={"IN"}>India</option>
                <option value={"US"}>America</option>
                <option value={"CH"}>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                min={'1990-01-01'}
                max={'2010-01-01'}
                className={`form-control ${
                  formik.errors.dob ? "error-box" : ""
                } ${
                  formik.touched.dob && !formik.errors.dob
                    ? "success-box"
                    : ""
                }`}
              />
               {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-control"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;
