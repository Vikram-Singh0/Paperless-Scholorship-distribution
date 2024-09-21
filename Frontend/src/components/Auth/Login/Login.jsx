import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required')
      .email('Invalid email format'),
    password: Yup.string()
      .required('Password is required'),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/user/login', values, {
        withCredentials: true,
      });

      if (res.data && res.data.token) {
        localStorage.setItem('authToken', res.data.token);
        setIsLoggedIn(true);
        navigate('/dashboard');
        toast.success('Redirecting To Dashboard');
      } else {
        toast.error('User Not Found !!!');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Log In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form className="login-form">
            <div className="login-input-group">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                name="username"
                id="username"
                className="login-input"
                placeholder="e.g. - ram123@gmail.com"
              />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>

            <div className="login-input-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                className="login-input"
                placeholder="e.g. - Ram@12345"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" className="login-button" disabled={isSubmitting}>
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </button>

            <p className="signup-prompt">
              Not have an account? <Link className="link" to="/signup"> Sign Up </Link> Here
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
