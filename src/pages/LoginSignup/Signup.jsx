import {React, useState} from 'react'
import {addUser} from "../../service/api"
import './Signup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import { Link } from 'react-router-dom'

const initialValues={
  name: '',
  email: '',
  phno: '',
  username: '',
  password: ''
  
}
const Signup = () => {
  const [user,setUser]=useState(initialValues)
  const [errors,setErrors]=useState({});

  const onValueChange = (e) => {
    const { id, value } = e.target;
    if (id === 'phno' && value.length !== 10) {
      setErrors({ ...errors, [id]: 'Phone number must be 10 digits' });
    } else if (id === 'email' && !value.includes('@')) {
      setErrors({ ...errors, [id]: 'Email must contain @ symbol' });
    } else {
      setErrors({ ...errors, [id]: '' });
      setUser({ ...user, [id]: value }); // Only update user if input is valid
    }
  };
  

  const addUserDetails=async()=>{
    if(validateForm()) {
      await addUser(user);
    }
  }

  const validateForm = () => {
    let formIsValid = true;
    for (const key in user) {
      if (!user[key]) {
        setErrors({...errors, [key]: `${key} is required`});
        formIsValid = false;
      }
    }
    return formIsValid;
  };

  return (
    <div className="signup">
    <div className='container'>
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
          <formcontrol class="input">
              <img src={user_icon} alt="Name"/>
              <input type="text" onChange={(e)=> onValueChange(e)} placeholder='Name' id='name'/>
              <span className="error">{errors['name']}</span>
          </formcontrol>
          
          <formcontrol class="input">
              <img src={email_icon} alt="" />
              <input type="email" onChange={(e)=> onValueChange(e)} placeholder='Email Id' id='email'/>
              <span className="error">{errors['email']}</span>
          </formcontrol>
          <formcontrol class="input">
              <img src={email_icon} alt="" />
              <input type="number" onChange={(e)=> onValueChange(e)} placeholder='Phone no' id='phno'/>
              <span className="error">{errors['phno']}</span>
          </formcontrol >
          <formcontrol class="input">
              <img src={email_icon} alt="" />
              <input type="text" onChange={(e)=> onValueChange(e)} placeholder='username' id='username'/>
              <span className="error">{errors['username']}</span>
          </formcontrol >
          <formcontrol class="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' id='password' autoComplete='current-password' onChange={(e)=> onValueChange(e)}/>
              <span className="error">{errors['password']}</span>
          </formcontrol>
      </div>
          <formcontrol>
            <button className="submit" onClick={()=>addUserDetails()}>Sign Up</button>
          </formcontrol>
          <div className="forgot-password">Already got an account? <Link to="/Login"><span>Login</span></Link></div>
      </div>
    </div>
  )
}

export default Signup
