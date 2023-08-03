

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Typography} from '@mui/material';
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
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      
      <Form className = "form" >

      <div className="form-title"><Typography variant="h5" component="h5">Sign Up</Typography></div>
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
          <ErrorMessage name="password" component="div" />
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
          <ErrorMessage name="confirmPassword" component="div" />
        </div >
        <Button style = {{margin : 10}} type="submit" variant="contained" color="primary">
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
