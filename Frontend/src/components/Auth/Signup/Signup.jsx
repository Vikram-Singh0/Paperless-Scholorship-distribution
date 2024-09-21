import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; 
import { toast } from 'react-toastify';

const Signup = ({isEmailVerified , setIsEmailVerified }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    username: Yup.string()
      .required('Email is Required')
      .email('Invalid email format'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one symbol')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter'),
    role: Yup.string().required('Role is required'),
  });

  const handleSignup = async (values) => {
    if (!isEmailVerified) {
      toast.error('Please verify your email before signing up.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/user/signup', values, {
        withCredentials: true,
      });

      if (res.data && res.data.token) {
        localStorage.setItem('authToken', res.data.token);
        toast.success('Verify Your Identity !!!');
        navigate('/verify-identity');
      } else {
        toast.error('Something Went Wrong !!!');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error signing up. Please try again.';
      console.error('Error signing up:', error);
      toast.error(errorMessage);
    }
  };

  const sendOtp = (email) => {
    if (!email) {
      toast.error('Email field cannot be empty.');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);

    const templateParams = {
      to_email: email,
      verification_code: otp,
    };

    emailjs.send(
      'service_ib70btk',
      'template_z7nna77',
      templateParams,
      'VbozfHDqFraOiUNLP'
    )
      .then((response) => {
        console.log('OTP sent successfully:', response);
        setIsOtpSent(true);
        toast.success('OTP sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending OTP:', error);
        toast.error('Failed to send OTP. Please try again.');
      });
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setIsEmailVerified(true);
      setIsOtpSent(false);
      toast.success('Email verification successful!');
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='container'>
      <div className="signup-container">
        <h2 className="signup-title">Signup</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          {({ values, isSubmitting }) => (
            <Form className="signup-form">
              <div className="signup-name-container">
                <div className="signup-name-input-group">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    className="signup-input signup-name-input"
                    name="firstName"
                    type="text"
                    id="firstName"
                    placeholder="e.g. - Ram"
                  />
                  <ErrorMessage name="firstName" component="div" className="error-message" />
                </div>

                <div className="signup-name-input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    className="signup-input signup-name-input"
                    name="lastName"
                    type="text"
                    id="lastName"
                    placeholder="e.g. - Ji"
                  />
                  <ErrorMessage name="lastName" component="div" className="error-message" />
                </div>
              </div>

              <label htmlFor="username">Email</label>
              <div className="email-input-container">
                <Field
                  className="signup-input email-field"
                  name="username"
                  type="email"
                  id="username"
                  placeholder="e.g. - ram@gmail.com"
                  disabled={isEmailVerified} 
                />
                <button
                  type="button"
                  className="btn"
                  onClick={() => sendOtp(values.username)}
                  disabled={isOtpSent || isEmailVerified}
                >
                  Send
                </button>
              </div>
              <ErrorMessage name="username" component="div" className="error-message" />

              {isOtpSent && !isEmailVerified && (
                <div className="otp-container">
                  <label htmlFor="otp">Enter OTP</label>
                  <Field
                    className="signup-input otp-field"
                    name="otp"
                    type="text"
                    id="otp"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn verify-btn "
                    onClick={verifyOtp}
                  >
                    Verify
                  </button>
                </div>
              )}

              {isEmailVerified && (
                <div className="verification-success">
                  <p>Email verification successful!</p>
                </div>
              )}

              <label htmlFor="password">Password</label>
              <Field
                className="signup-input"
                name="password"
                type="password"
                id="password"
                placeholder="e.g. - Ram@12345"
              />
              <ErrorMessage name="password" component="div" className="error-message" />

              <label htmlFor="role">Role</label>
              <Field as="select" name="role" className="signup-select" id="role">
                <option value="" label="Select Role" />
                <option value="student" label="Student" />
                <option value="sag" label="SAG" />
                <option value="finance" label="Finance" />
              </Field>
              <ErrorMessage name="role" component="div" className="error-message" />

              <button className="signup-button" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
