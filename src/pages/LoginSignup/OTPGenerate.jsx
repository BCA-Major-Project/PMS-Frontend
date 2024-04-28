import {React, useState} from 'react'
import {addUser} from "../../service/api"
import './OTPGenerate.css'

// import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
// import password_icon from '../assets/password.png'

const initialValues={
    email: ''
  
}
const OTPGenerate = () => {
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
                <div className="text">OTPVerification</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <formcontrol class="input">
                    <img src={email_icon} alt="" />
                    <input type="number" onChange={(e)=> onValueChange(e)} placeholder='OTP' id='email'/>
                </formcontrol>
            </div>
            <formcontrol>
                <button className="submit" onClick={()=>addUserDetails()}>Verify</button>
            </formcontrol>
        </div>
    </div>
  )
}

export default OTPGenerate
