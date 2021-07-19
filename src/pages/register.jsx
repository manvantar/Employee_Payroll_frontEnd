import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../scss/loginRegister.scss";
import { useHistory } from "react-router";
import user from "../services/user";
import Notification from "../components/employeeForm/Notification";
const userobject = new user();

/**
 * @description Registration functional component to return Registration Page
 * @param handlechange when the values changes in the form
 * @return Registration page component
 */
const Signup = ({ handleChange }) => {
  const history = useHistory();
  const avatarStyle = { backgroundColor: "red" };
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  /**
   * @description Validation Schema using YUP
   * @return Error if validation fails
   */
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2).required("Required"),
    lastName: Yup.string().min(1).required("Required"),
    email: Yup.string().email("please enter valid email").required("Required"),
    password: Yup.string().required("Required").min(8),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  /**
   * @description Handle Onsubmit-> Intigrates the data object with backemd when Services API is called
   * @params takes input as values and props
   */
  const onSubmit = (values, props) => {
    if (values) {
      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        emailId: values.email,
        password: values.password,
      };
      userobject
        .SignUpData(userData)
        .then((res) => {
          if (res.data.success === true) {
            setNotify({
              isOpen: true,
              message: "Something went wrong",
              type: "error",
            });
            history.push("/login");
          } else {
            setNotify({
              isOpen: true,
              message: "Something went wrong",
              type: "error",
            });
          }
        })
        .catch((error) => {
          setNotify({
            isOpen: true,
            message: "Something went wrong " + error.message,
            type: "error",
          });
        });
      props.resetForm();
      props.setSubmitting(false);
    }
  };

  return (
    <Grid className="formStyle">
      <Paper className="paperStyle">
        <h1 align="center" className="header">
          EMPLOYEE PAYROLL
        </h1>
        <Grid align="center">
          <Avatar data-testid="avatar" style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>REGISTRATION</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form data-testid="form">
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    className="btnstyle"
                    data-testid="firstName"
                    label="First Name"
                    name="firstName"
                    placeholder="Enter First Name"
                    variant="outlined"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="firstName" />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    className="btnstyle"
                    data-testid="lastName"
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="lastName" />}
                  />
                </Grid>
              </Grid>
              <Field
                className="btnstyle"
                spacing={2}
                as={TextField}
                data-testid="email"
                label="Email Address"
                name="email"
                placeholder="Enter Email"
                variant="outlined"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Field
                    className="btnstyle"
                    as={TextField}
                    data-testid="password"
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="password" />}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    className="btnstyle"
                    as={TextField}
                    data-testid="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    placeholder="Enter password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="confirmPassword" />}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                data-testid="submitButton"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                className="btnstyle"
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Register"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography align="center">
          {" "}
          Already have an account ?<Link to="/login">Login</Link>
        </Typography>
      </Paper>
      <Notification notify={notify} setNotify={setNotify} />
    </Grid>
  );
};

export default Signup;
