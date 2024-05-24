import React, { useState } from 'react';
import { addUser } from "../../service/api";
import './Signup.css';

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import defaultAvatar from '../assets/defaultProfile.png'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const initialValues = {
  name: '',
  email: '',
  phno: '',
  username: '',
  password: '',
  image: ''
};

const Signup = () => {
  const [user, setUser] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(defaultAvatar); // Initialize with default image
  const [imageError, setImageError] = useState('');

  const onValueChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };
  
  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(imageFile);
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 102400) { // 100KB
        const base64Image = await convertImageToBase64(file);
        setUser({ ...user, image: base64Image.split(",")[1] });
        setImagePreviewUrl(base64Image); // Update the image preview URL
      } else {
        setImageError('File size should be under 100KB');
      }
    }
  };
  const addUserDetails = async () => {
    if (validateForm()) {
      try {
        const response = await addUser(user);
        console.log('Response:', response);
        alert('Signup successful');
        setUser(initialValues);
        setImagePreviewUrl(defaultAvatar); // Reset to default image after signup
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};
    console.log("validating form");
  
    for (const key in user) {
      console.log("Checking key:", key); // Log each key being checked
      if (key !== 'image' && !user[key]) {
        newErrors[key] = `${key} is required`;
        formIsValid = false;
        console.log("Error found in key:", key); // Log if an error is found
      }
    }
  
    console.log("Errors after loop:", newErrors); // Log all errors found
    setErrors(newErrors);
    console.log("Form is valid:", formIsValid); // Final validity status
    return formIsValid;
  };

  return (
    <div className="signup">
      <div className='container'>
        <div className="header">
          <div className="text">Sign up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
        <formcontrol className="input">
            <label htmlFor="avatar">Profile Picture:</label>
            <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} />
            {imageError && <div className="error">{imageError}</div>}
            <img src={imagePreviewUrl} alt="Profile Preview" className="profile-preview"/>
          </formcontrol>

          <formcontrol className="input">
            <img src={user_icon} alt="Name"/>
            <input type="text" onChange={(e)=> onValueChange(e)} placeholder='Name' id='name'/>
            <span className="error">{errors['name']}</span>
          </formcontrol>
          
          <formcontrol className="input">
            <img src={email_icon} alt="" />
            <input type="email" onChange={(e)=> onValueChange(e)} placeholder='Email Id' id='email'/>
            <span className="error">{errors['email']}</span>
          </formcontrol>
  
          <formcontrol className="input">
            <img src={email_icon} alt="" />
            <input
              type="tel"
              onChange={(e) => {
                const inputValue = e.target.value;
                if (inputValue.length > 10) {
                  e.target.value = inputValue.slice(0, 10); // Limit input to first 10 characters
                }
                onValueChange(e);
              }}
              placeholder="Phone no"
              id="phno"
            />
            <span className="error">{errors['phno']}</span>
          </formcontrol>
  
          <formcontrol className="input">
            <img src={email_icon} alt="" />
            <input type="text" onChange={(e)=> onValueChange(e)} placeholder='username' id='username'/>
            <span className="error">{errors['username']}</span>
          </formcontrol>
  
          <formcontrol className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' id='password' autoComplete='current-password' onChange={(e)=> onValueChange(e)}/>
            <span className="error">{errors['password']}</span>
          </formcontrol>
  
          
        </div>
        <div className="submit-container">
          <button className="submit" onClick={addUserDetails}>Sign Up</button>
        </div>
        {signupSuccess && <div className="signup-success">Signup Successful!</div>}
        <div className="forgot-password">Already got an account? <Link to="/Login"><span>Login</span></Link></div>
      </div>
    </div>
  );
};

export default Signup;
