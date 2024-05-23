import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../components/Modal/Modal'; // Adjust the path as necessary
import './OTPGenerate.css';
import email_icon from '../../assets/email.png';

const OTPGenerate = ({ onComplete }) => {
  const [otpInput, setOtpInput] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setOtpInput(e.target.value);
  };

  const verifyOtp = () => {
    const storedOtp = localStorage.getItem('otp');
    const storedEmail = localStorage.getItem('email');

    if (otpInput === storedOtp) {
      setShowSuccessModal(true); // Show modal instead of alert
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
        <button className="submitOtp" onClick={verifyOtp}>Verify</button>
      </formcontrol>
      <Modal show={showSuccessModal} title = 'OTP Verified' onClose={() => {
          setShowSuccessModal(false);
          onComplete(); // Proceed after closing the modal
      }}>
          <div>OTP verified successfully.</div>
      </Modal>
    </div>
  </div>
);
};

export default OTPGenerate;
