import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css";

// Correct regular expression for Ukrainian mobile phone numbers
const ukrainePhoneRegExp = /^\d{7}$/;
const RegistrationForm = () => {
  const validationSchema = Yup.object({
    first_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    last_name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    login: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone_number: Yup.string()
      .matches(ukrainePhoneRegExp, "Phone number is not valid")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        login: "",
        email: "",
        password: "",
        phone_number: "",
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <h1>Зареєструйтесь зараз!</h1>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <Field type="text" name="first_name" />
            <ErrorMessage name="first_name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <Field type="text" name="last_name" />
            <ErrorMessage name="last_name" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <Field name="phone_number" type="number" />
            <ErrorMessage
              name="phone_number"
              component="div"
              className="error"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Зареєструватись
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
