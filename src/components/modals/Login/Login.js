import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import FacebookButton from "../FacebookButton";

// Correct regular expression for Ukrainian mobile phone numbers
const LoginForm = () => {
  const validationSchema = Yup.object({
    login: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          login: "",
          password: "",
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
            <h1>Авторизація</h1>
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
              Увійти
            </button>
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

export default LoginForm;
