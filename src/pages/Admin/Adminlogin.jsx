import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser, getAdminLogin } from '../../service/api'; // assuming you have these API functions
import './Adminlogin.css';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
  const [admin, setAdmin] = useState({ admid: '', password: '' });
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setAdmin({...admin,[e.target.id]:e.target.value})
  };

  const addUserDetails = async () => {
    try {
      await addUser(admin); // Assuming addUser sends the admin object to the backend for authentication
      navigate('/userdetails', { replace: true });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const checkAdminCredentials = async () => {
    try {
      const response = await getAdminLogin(admin.admid);
      console.log(response);
      const authData = response.data;
      if (authData && authData.admid !== "") {
        localStorage.setItem("data", authData.admid);
        localStorage.setItem("isAdminLoggedIn", "true");
        navigate('/userDetails', { replace: true });
      } else {
        console.log("Invalid credentials");
      }
    }


   catch (error) {
      console.error('Error fetching admin credentials:', error);
    }
  };

  return (
    <div className="signup">
      <div className='container'>
        <div className="header">
          <div className="text">Admin Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="text" onChange={(e)=>onValueChange(e)} placeholder='id' id='admid' />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' id='password' autoComplete='current-password' onChange={(e)=>onValueChange(e)} />
          </div>
        </div>
        <div className="form-control">
          <button className="submit" onClick={()=>checkAdminCredentials(admin.admid)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
