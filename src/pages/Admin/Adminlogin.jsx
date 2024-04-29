import {React, useState} from 'react'
import './Adminlogin.css'
import {addUser} from "../../service/api"
// import { Link } from 'react-router-dom';

// import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const initialValues={
  username: '',
  password: ''
  
}
const Login = () => {
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
        <div className="text">Admin Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
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
            <button className="submit" onClick={()=>addUserDetails()}>Submit</button>
          </formcontrol>
         
      </div>
    </div>
  )
}

export default Login
