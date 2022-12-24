import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schimas";
import { addUser } from "../../service/api";
import "../Ragistration/ragistration.css";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Ragistrations() {
  const navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      await addUser(values);
      navigate("/showlist");

      action.resetForm();
      // alert(`you are signup Successfully`);
    },
  });
  return (
    <>
      <h1 style={{ marginLeft: "35rem", marginTop: "3rem" }}>
        PLEASE REGISTER
      </h1>
      <Form
        onSubmit={handleSubmit}
        style={{
          marginLeft: "30rem",
          marginRight: "30rem",
          marginTop: "3rem",
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="name"
            autoComplete="off"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="off"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm_Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm_Password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginLeft: "10rem" }}>
          Registration
        </Button>
      </Form>
      <p style={{ marginLeft: "35rem" }}>
        Already have an account?{" "}
        <a href="http://localhost:3000/login">Sign In now</a>
      </p>
    </>
  );
}

export default Ragistrations;
