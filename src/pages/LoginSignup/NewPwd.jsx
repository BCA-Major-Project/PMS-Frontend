import React from 'react';
import './NewPwd.css';
import email_icon from '../assets/email.png';

const NewPwd = () => {
  return (
    <div className="signup">
      <div className='container'>
        <div className="header">
          <div className="text">Create New Password</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <formcontrol class="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder='New Password' id='new-password' />
          </formcontrol>
          <formcontrol class="input">
            <img src={email_icon} alt="" />
            <input type="text" placeholder='Confirm Password' id='confirm-password' />
          </formcontrol>
        </div>
        <formcontrol>
          <button className="submit">Confirm</button>
        </formcontrol>
      </div>
    </div>
  );
};

export default NewPwd;
