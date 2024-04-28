<<<<<<< HEAD
import React, { act, useState } from 'react'
=======
import {React, useState} from 'react'
>>>>>>> 9066a758efe6e5085adb173c6b845bcb18151ef8
import './Signup.css'
import {addUser} from "../../service/api"

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const initialValues={
  name: '',
  email: '',
  phno: '',
  username: '',
  password: ''
  
}
const Signup = () => {
<<<<<<< HEAD
  const [action, setAction] = useState("Sign Up");
=======
  const [user,setUser]=useState(initialValues)
  const onValueChange=(e)=>{
    setUser({...user,[e.target.id]:e.target.value})
    console.log(user)
}

const addUserDetails=async()=>{
  await addUser(user);

}
>>>>>>> 9066a758efe6e5085adb173c6b845bcb18151ef8
  return (
    <div className="sign">
    
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
<<<<<<< HEAD
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
=======
        <formcontrol class="input">
            <img src={user_icon} alt="Name"/>
            <input type="text" onChange={(e)=> onValueChange(e)} placeholder='Name' id='name'/>
        </formcontrol>
        </div>
        <formcontrol class="input">
            <img src={email_icon} alt="" />
            <input type="email" onChange={(e)=> onValueChange(e)} placeholder='Email Id' id='email'/>
        </formcontrol>
        <formcontrol class="input">
            <img src={email_icon} alt="" />
            <input type="number" onChange={(e)=> onValueChange(e)} placeholder='Phone no' id='phno'/>
        </formcontrol >
        <formcontrol class="input">
            <img src={email_icon} alt="" />
            <input type="text" onChange={(e)=> onValueChange(e)} placeholder='username' id='username'/>
        </formcontrol >
        <formcontrol class="input">
>>>>>>> 9066a758efe6e5085adb173c6b845bcb18151ef8
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' id='password' autoComplete='current-password' onChange={(e)=> onValueChange(e)}/>
        </formcontrol>
        <formcontrol>
          <button className="submit" onClick={()=>addUserDetails()}>Sign Up</button>
        </formcontrol>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password? <span>Click here</span></div>}
      
      <div className="submit-container">
<<<<<<< HEAD
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Signup</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
=======
        {/* <input className='submit' type='submit' placeholder='Submit'></input> */}
>>>>>>> 9066a758efe6e5085adb173c6b845bcb18151ef8
      </div>
    </div>
  )
}

export default Signup
