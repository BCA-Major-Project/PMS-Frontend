import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTPGenerate.css';
import email_icon from '../assets/email.png';

const OTPGenerate = () => {
  const [otpInput, setOtpInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setOtpInput(e.target.value);
  };

  const verifyOtp = () => {
    const storedOtp = localStorage.getItem('otp');
    const storedEmail = localStorage.getItem('email');

    if (otpInput === storedOtp) {
      alert('OTP verified successfully.');
      navigate('/newpwd'); // Redirect to NewPwd.jsx page
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="signup">
      <div className='container'>
        <div className="header">
          <div className="text">OTP Verification</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <formcontrol class="input">
            <img src={email_icon} alt="" />
            <input type="number" onChange={onValueChange} placeholder='OTP' id='otp' />
            {error && <div className="error-message">{error}</div>}
          </formcontrol>
        </div>
        <formcontrol>
          <button className="submit" onClick={verifyOtp}>Verify</button>
        </formcontrol>
      </div>
    </div>
  );
};

export default OTPGenerate;
