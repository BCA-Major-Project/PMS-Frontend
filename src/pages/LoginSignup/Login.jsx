import React, { useState, useEffect } from 'react';
import { getLogin, setUserOnline } from '../../service/api';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onValueChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const setLocalStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // console.log("user",localStorage.getItem("user"))
  const handleLogin = async () => {
    try {
      const response = await getLogin(user.email);
      const userData = response.data;

      if (userData && userData.email === user.email && userData.password === user.password) {
        // Authentication successful, store user data in localStorage
        setLocalStorage(userData);
        setUserOnline(userData.id)
        navigate('/home', { replace: true });
      } else {
        // Invalid credentials, navigate back to login
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  
  useEffect(() => {
    console.log("username from login page", localStorage.getItem("user"));
  }, []);

  return (
    <div className="signup">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={user.email}
              onChange={onValueChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={onValueChange}
            />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleLogin}>
            Submit
          </button>
        </div>
        <div className="forgot-password">
          Forgot Password? <Link to="/Forgotpwd"><span>Click Here</span></Link>
        </div>
        <div className="forgot-password">
          Don't have an account? <Link to="/Signup"><span>Register</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
