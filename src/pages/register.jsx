import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import '../scss/loginRegister.scss';
import { useHistory } from "react-router";
import user from '../services/user';
const userobject = new user();

const Signup = ({ handleChange }) => {
    const history = useHistory();
    const avatarStyle = { backgroundColor: '#1bbd7e' }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2).required("Required"),
        lastName: Yup.string().min(1).required("Required"),
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required").min(8),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })

    const onSubmit = (values, props) => {
        if (values) {
            const userData = {
                "firstName": values.firstName,
                "lastName": values.lastName,
                "emailId": values.email,
                "password": values.password
            }
            userobject.SignUpData(userData)
                .then(res => {
                    if (res.data.success === true) {
                        alert(res.data.message)
                        history.push('/login');
                    }
                    else {
                        alert("Something went wrong")
                    }
                }).catch(error => {
                    alert("Something went wrong " + error.message)
                })
            props.resetForm()
            props.setSubmitting(false)
        }
    }

    return (
        <Grid className='formStyle'>
            <Paper className='paperStyle'>
                <h1 align='center' className='header'>EMPLOYEE PAYROLL</h1>
                <Grid align='center'>
                    <Avatar data-testid="avatar" style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>REGISTRATION</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form data-testid="form">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field as={TextField} data-testid="firstName" label='First Name' name="firstName"
                                        placeholder='Enter First Name' fullWidth required
                                        helperText={<ErrorMessage name="firstName" />}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field as={TextField} data-testid="lastName" label='Last Name' name="lastName"
                                        placeholder='Enter Last Name' fullWidth required
                                        helperText={<ErrorMessage name="lastName" />}
                                    />
                                </Grid>
                            </Grid>
                            <Field as={TextField} data-testid="email" label='Email Address' name="email"
                                placeholder='Enter Email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Field as={TextField} data-testid="password" label='Password' name="password"
                                        placeholder='Enter password' type='password' fullWidth required
                                        helperText={<ErrorMessage name="password" />} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field as={TextField} data-testid="confirmPassword" label='Confirm Password' name="confirmPassword"
                                        placeholder='Enter password' type='password' fullWidth required
                                        helperText={<ErrorMessage name="confirmPassword" />} />
                                </Grid>
                            </Grid>
                            <Button type='submit' data-testid="submitButton" color='primary' variant="contained" disabled={props.isSubmitting}
                                className='btnstyle' fullWidth>{props.isSubmitting ? "Loading" : "Register"}</Button>
                        </Form>
                    )}
                </Formik>
                <Typography align='center'> Already have an account ?
                    <Link to="/login" >
                        Login
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup;