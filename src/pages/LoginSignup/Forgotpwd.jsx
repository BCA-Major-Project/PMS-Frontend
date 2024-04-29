import {React, useState} from 'react'
import {addUser} from "../../service/api"
import './Forgotpwd.css'

// import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
// import password_icon from '../assets/password.png'

const initialValues={
    email: ''
  
}
const Forgotpwd = () => {
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
                <div className="text">Forgot Password</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <formcontrol class="input">
                    <img src={email_icon} alt="" />
                    <input type="email" onChange={(e)=> onValueChange(e)} placeholder='Email Id' id='email'/>
                </formcontrol>
            </div>
            <formcontrol>
                <button className="submit" onClick={()=>addUserDetails()}>Send OTP</button>
            </formcontrol>
        </div>
    </div>
  )
}

export default Forgotpwd