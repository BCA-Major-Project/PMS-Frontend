import React, { act, useState } from 'react'
import './Signup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
const Signup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="sign">
    
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="Name"/>
            <input type="text" placeholder='Name' id='name'/>
        </div>}
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id' id='email'/>
        </div>
        {action==="Login"?<div></div>:<div className="input">
            <img src={email_icon} alt="" />
            <input type="number" placeholder='Phone no' id='phno'/>
        </div>}
        
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' id='password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password? <span>Click here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
  )
}

export default Signup
