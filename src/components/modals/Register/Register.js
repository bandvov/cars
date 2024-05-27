import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Register.css";
import FacebookButton from "../FacebookButton";

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
    <div className="form-container">
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
          <Form>
            <h1>Зареєструйтесь зараз!</h1>
            <div className="form-group">
              <label htmlFor="first_name">Імя</label>
              <Field type="text" name="first_name" />
              <ErrorMessage
                name="first_name"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="last_name">Прізвище</label>
              <Field type="text" name="last_name" />
              <ErrorMessage
                name="last_name"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Пошта</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="phone_number">Номер телефону</label>
              <Field name="phone_number" type="number" />
              <ErrorMessage
                name="phone_number"
                component="div"
                className="error"
              />
            </div>
            <div className="form-group">
              <label htmlFor="login">Логін</label>
              <Field name="login" type="text" />
              <ErrorMessage name="login" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Зареєструватись
            </button>
            <FacebookButton />
          </Form>
        )}
      </Formik>
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: 1,
            borderBottom: "1px solid",
            margin: "0 8px 8px 0",
          }}
        ></div>
        <span>Або увійти через</span>
        <div
          style={{
            flex: 1,
            borderBottom: "1px solid",
            margin: "0 0 8px 8px",
          }}
        ></div>
      </div>
      <FacebookButton />
    </div>
  );
};

export default RegistrationForm;
