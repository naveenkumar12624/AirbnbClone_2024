// src/components/Header/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
`;

const ButtonStyled = styled(Button)`
  margin-top: 10px;
`;

const Login = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleLogin = () => {
    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error('Invalid phone number. Please enter a 10-digit number.');
      return;
    }
    toast.success('OTP sent successfully.');
    setOtpSent(true);
  };

  const handleOtpSubmit = () => {
    if (otp === '123456') {
      toast.success('Login successful.');
      setLoggedInUser(`User-${phoneNumber}`); // Set logged-in username
      navigate('/');
    } else {
      toast.error('Invalid OTP. Please try again.');
    }
  };

  return (
    <Container className="login-container">
      <ToastContainer />
      <h2>Log in or sign up</h2>
      <p>Welcome to Airbnb</p>
      <TextField
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      {otpSent && (
        <TextField
          label="OTP"
          variant="outlined"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}
      {!otpSent ? (
        <ButtonStyled variant="contained" color="primary" onClick={handleLogin}>
          Generate OTP
        </ButtonStyled>
      ) : (
        <ButtonStyled variant="contained" color="primary" onClick={handleOtpSubmit}>
          Submit
        </ButtonStyled>
      )}
    </Container>
  );
};

export default Login;
