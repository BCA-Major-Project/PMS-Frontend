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
  const onValueChange=(e)=>{
    setUser({...user,[e.target.id]:e.target.value})
    console.log(user)
}

const addUserDetails=async()=>{
  await addUser(user);

}
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
          </formcontrol>
          
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
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' id='password' autoComplete='current-password' onChange={(e)=> onValueChange(e)}/>
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
