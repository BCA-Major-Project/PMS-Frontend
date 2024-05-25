import React, { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
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
    localStorage.setItem("isLoggedIn", "true");
  };

  const verifyPassword = async (hashedPassword, providedPassword) => {
    const isMatch = await bcrypt.compare(providedPassword, hashedPassword);
    return isMatch;
  };
  const handleLogin = async () => {
    try {
      const response = await getLogin(user.email);
      const userData = response.data;

      if (userData && userData.email === user.email && verifyPassword(userData.password, user.password)) {
        // Authentication successful, store user data in localStorage
        setLocalStorage(userData);
        setUserOnline(userData.uid);
        navigate('/home', { replace: true });
      } else {
        // Invalid credentials
        alert('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-text">Login</div>
          <div className="signup-underline"></div>
        </div>
        <div className="signup-inputs">
          <div className="signup-input">
            <img src={email_icon} alt="" />
            <input
              type="text"
              placeholder="Email"
              id="email"
              value={user.email}
              onChange={onValueChange}
            />
          </div>
          <div className="signup-input">
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
        <div className="signup-submit-container">
          <button className="signup-submit" onClick={handleLogin}>
            Submit
          </button>
        </div>
        <div className="signup-forgot-password">
          Forgot Password? <Link to="/Forgotpwd"><span>Click Here</span></Link>
        </div>
        <div className="signup-forgot-password">
          Don't have an account? <Link to="/Signup"><span>Register</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
