import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Login.css'
import email_icon from '../../assets/email_icon.png'
import password_icon from '../../assets/password_icon.png'

export class Login extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <div className="login">
            <div className="container">
                <div className="header">
                    <div className="text">Login</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id' id='email'/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password' id='password'/>
                    </div>
                    <div className="submit-container">
                        <button className='submit' type='submit'>Login</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Login
