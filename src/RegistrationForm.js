import axios from 'axios';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Typography, Box} from '@mui/material';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const RegistrationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values) => {
      axios.post("https://book-e-sell-node-api.vercel.app/api/user",{
      email : values.email,
      password : values.password,
      firstName : values.firstName,
      lastName : values.lastName,
      roleId : 2
    }).then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (

    <Box     sx={{
      display: "flex",
      bgcolor: "white",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
      width: "50vw",
      margin: "auto",
      flexDirection: "column",
      marginTop: "8vh",
      borderRadius: "10px",
      border: "2px solid black"
    }}>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      
      <Form className = "form" >

      <div className="form-title"><Typography variant="h5" component="h5" sx={{color: "black"}}>Sign Up</Typography></div>
        <div className="form-field">
          <Field
            as={TextField}
            label="First Name"
            name="firstName"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage className='err' name="firstName" component="div" />
        </div>
        <div className="form-field">
          <Field
            as={TextField}
            label="Last Name"
            name="lastName"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage   className='err' name="lastName" component="div" />
        </div>
        <div className="form-field">
          <Field
            as={TextField}
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage  className='err' name="email" component="div" />
        </div>
        <div className="form-field">
          <Field
            as={TextField}
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage className='err' name="password" component="div" />
        </div>
        <div className="form-field">
          <Field
            as={TextField}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage className='err' name="confirmPassword" component="div" />
        </div >
        <Button style = {{margin : 10}} type="submit" variant="contained" color="primary">
          Register
        </Button>
      </Form>
    </Formik>
    </Box>


  );
};

export default RegistrationForm;
