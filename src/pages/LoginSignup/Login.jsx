import {React, useState} from 'react'
import {getLogin} from "../../service/api"
import './Signup.css'
import { Link, useNavigate, useParams } from 'react-router-dom';

// import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const initialValues={
  username: '',
  password: ''
  
}

const Login=()=>{
  const [user,setUser]=useState(initialValues)
  const {email}=useParams();
  const onValueChange=(e)=>{
  
      setUser({...user,[e.target.id]:e.target.value})
      console.log(user)
  }
  const [auth,setAuth]=useState(initialValues)
  const navigate = useNavigate();
  const usegetUserRecord=async(email)=>{
      let response=await getLogin(email);
    
      console.log(response);
      setAuth(response.data);
      var uemail=auth.email;
      if(uemail!="")
      {
      localStorage.setItem("data",uemail)
      
      navigate('/home', { replace: true });
    
      }
      else
      {
          navigate('/login', { replace: true });
      }
      
}


  return (
    <div className="signup">
    <div className='container'>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
          <formcontrol class="input">
              <img src={email_icon} alt="" />
              <input type="text" onChange={(e)=> onValueChange(e)} placeholder='email' id='email'/>
          </formcontrol >
          <formcontrol class="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password' id='password' autoComplete='current-password' onChange={(e)=> onValueChange(e)}/>
          </formcontrol>
      </div>
          <formcontrol>
            <button className="submit" onClick={()=>usegetUserRecord(user.email)}>Submit</button>
          </formcontrol>
          <div className="forgot-password">Forgot Password? <Link to="/Forgotpwd"><span>Click Here</span></Link></div>
          <div className="forgot-password">Don't have an account? <Link to="/Signup"><span>Register</span></Link></div>
      </div>
    </div>
  )
}

export default Login
