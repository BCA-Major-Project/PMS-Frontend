import React from 'react'
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
const LoginSignup = () => {
  return (
    <div className="sign">
    <div className='linkPage'>
        <div className="link">sign up</div>
        <div className="link">login</div>
    </div>
    <div className='container'>
      <div className="header">
        <div className="text">Sign up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
            <img src={user_icon} alt="Name"/>
            <input type="text" placeholder='Name' id='name'/>
        </div>
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' id='email'/>
        </div>
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="number" placeholder='Phone no' id='phno'/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' id='password'/>
        </div>
      </div>
      <div className="forgot-password">Lost password? <span>Click here</span></div>
      <div className="submit-container">
        {/* <input className='submit' type='submit' placeholder='Submit'></input> */}
        <button className='submit' type='submit'>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default LoginSignup
