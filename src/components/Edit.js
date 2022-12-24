import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addUser, getuser, editUserData } from "../service/api";
import { signUpSchema } from "./schimas";
import {
  Link,
  Navigate,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Edit() {
  // const [edit, setEdit] = useState();
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValues);
  const { id } = useParams();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    // handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      await addUser(values);

      action.resetForm();
      // alert(`you are signup Successfully`);
    },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const editUser = async () => {
    const response = await getuser(id);
    setUser(response.data[0]);
  };
  useEffect(() => {
    editUser();
  }, []);

  const userDe = async () => {
    // e.preventDefault();
    await editUserData(user, id);
    navigate("/showList");
    // console.log("responce", user);
  };

  return (
    <div>
      <h1 style={{ marginLeft: "35rem", marginTop: "3rem" }}>PLEASE EDIT</h1>
      <Form
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
            value={user.name}
            onChange={(e) => handleChange(e)}
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
            value={user.email}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="off"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => handleChange(e)}
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
            value={user.confirm_password}
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </Form.Group> */}
        <Button
          variant="primary"
          style={{ marginLeft: "10rem" }}
          onClick={() => userDe()}
        >
          save
        </Button>
      </Form>
    </div>
  );
}
