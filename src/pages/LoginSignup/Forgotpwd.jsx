import {React, useState, useEffect} from 'react'
import {getLogin, sendEmailOTP} from "../../service/api"
import './Forgotpwd.css'

import email_icon from '../assets/email.png'

const initialValues = {
    email: '',
    otp: ''
}

const Forgotpwd = () => {
  const [user, setUser] = useState(initialValues);
  const [userdata, setUserdata] = useState();
  const [error, setError] = useState(''); // State to hold the error message

  const onValueChange = (e) => {
    setUser({...user, [e.target.id]: e.target.value});
    console.log(user);
  };

  const getUserDetails = async () => {
    try {
      const response = await getLogin(user.email);
      setUserdata(response.data);

      if (!response.data) {
        console.log('Not found');
        setError('No user found with that email.'); // Set error message
      } else {
        console.log('user found');
        setError(''); // Clear error message
        handleForgotPassword();
      }
    } catch (error) {
      console.error('Error occurred:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleForgotPassword = async () => {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
  
    // Update the user state with the OTP
    setUser({ ...user, otp });
  }
  
  // Effect to run when the user state changes
  useEffect(() => {
    if (user.otp) {
      const sendOTP = async () => {
        try {
          const response = await sendEmailOTP(user);
          console.log('OTP sent:', response);
          console.log(user.otp)
          console.log("userobj", user)
          alert('OTP has been sent to your email.');
        } catch (error) {
          console.error('Error sending OTP:', error);
          alert('Failed to send OTP. Please try again.');
        }
      };
  
      sendOTP();
    }
  }, [user.otp]); 

  return (
    <div className="signup">
      <div className='container'>
        <div className="header">
          <div className="text">Forgot Password</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <formcontrol class="input">
            <img src={email_icon} alt="" />
            <input type="email" onChange={onValueChange} placeholder='Email Id' id='email'/>
            {error && <div className="error-message">{error}</div>}
          </formcontrol>
        </div>
        <formcontrol>
          <button className="submit" onClick={getUserDetails}>Send OTP</button>
        </formcontrol>
      </div>
    </div>
  );
};

export default Forgotpwd;