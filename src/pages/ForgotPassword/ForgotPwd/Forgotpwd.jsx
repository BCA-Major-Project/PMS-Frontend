import React, { useState } from 'react';
import { getLogin, sendEmailOTP } from "../../../service/api";
import Modal from '../../../components/Modal/Modal';
import './Forgotpwd.css';
import email_icon from '../../assets/email.png';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  otp: ''
};

const Forgotpwd = ({ onComplete }) => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(initialValues);
  const [error, setError] = useState('');

  const navigate = useNavigate(); 

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const getUserDetails = async () => {
    try {
      const response = await getLogin(user.email);
      if (!response || !response.data) {
        setError('No user found with that email or error occurred.');
      } else {
        handleForgotPassword();
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleForgotPassword = async () => {
    setLoading(true);
    const otp = Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem('otp', otp);
    localStorage.setItem('email', user.email);
    setUser({ ...user, otp });

    try {
      await sendEmailOTP({ email: user.email, otp });
      setShowModal(true);
      // onComplete();
    } catch (error) {
      alert('Failed to send OTP. Please try again.');
    }
    setLoading(false);
  };

  const handleSubmit = () => {
    getUserDetails();
  };

  return (
    <div className="signup">
      <div className='container'>
        <div className="header">
          <div className="text">Forgot Password</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <formcontrol className="input">
            <img src={email_icon} alt="" />
            <input type="email" onChange={onValueChange} placeholder='Email Id' id='email' />
            {error && <div className="error-message">{error}</div>}
          </formcontrol>
        </div>
        <formcontrol style={{ display: 'flex', alignItems: 'center' }}>
          <button className="submitForgot" onClick={handleSubmit} disabled={loading}>
            Send OTP
          </button>
          {loading && <div className="loader"></div>}
        </formcontrol>
        <Modal show={showModal} title='OTP Sent' onClose={() => {
            setShowModal(false);
            onComplete();  // Invoke onComplete when the modal is closed
        }}>
          <div>OTP has been sent to your email.</div>
        </Modal>
      </div>
    </div>
  );
};

export default Forgotpwd;