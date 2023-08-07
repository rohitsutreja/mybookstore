import axios from "axios";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Typography, Box } from "@mui/material";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://book-e-sell-node-api.vercel.app/api/user/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      const userData = response.data.result;
      console.log(userData);
      login(userData);
      // localStorage.setItem("user", JSON.stringify(userData));
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Box
        sx={{
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
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <div className="form-title">
              <Typography variant="h5" component="h5" sx={{ color: "black" , }}>
                Sign In
              </Typography>
            </div>

            <div className="form-field">
              <Field
                as={TextField}
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage className="err" name="email" component="div" />
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
              <ErrorMessage className="err" name="password" component="div" />
            </div>

            <Button
              style={{ margin: 10 }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Form>
        </Formik>

        <Box sx={{ margin: 2 }}>
          <Typography variant="p" component="p" sx={{ color: "black" }}>
            New user?
          </Typography>
          <Link to="/signup">
            <Typography variant="p" component="p">
              Create new account
            </Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default LoginForm;
