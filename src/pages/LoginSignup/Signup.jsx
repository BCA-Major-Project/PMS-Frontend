import React, { useState } from 'react';
import { addUser } from "../../service/api";
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Modal from "../../components/Modal/Modal";

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
  const navigate = useNavigate();
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
        setSignupSuccess(true);
        setUser(initialValues);
        setImagePreviewUrl(defaultAvatar);
        
         
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
      <div className='signup-container'>
        <div className="signup-header">
          <div className="signup-text">Sign up</div>
          <div className="signup-underline"></div>
        </div>
        <div className="signup-inputs">
        <formcontrol className="signup-input">
            <label htmlFor="avatar">Profile Picture:</label>
            <input type="file" id="avatar" accept="image/*" onChange={handleImageChange} />
            {imageError && <div className="signup-signup-error">{imageError}</div>}
            <img src={imagePreviewUrl} alt="Profile Preview" className="signup-profile-preview"/>
          </formcontrol>

          <formcontrol className="signup-input">
            <img src={user_icon} alt="Name"/>
            <input type="text" onChange={(e)=> onValueChange(e)} placeholder='Name' id='name'/>
            <span className="signup-error">{errors['name']}</span>
          </formcontrol>
          
          <formcontrol className="signup-input">
            <img src={email_icon} alt="" />
            <input type="email" onChange={(e)=> onValueChange(e)} placeholder='Email Id' id='email'/>
            <span className="signup-error">{errors['email']}</span>
          </formcontrol>
  
          <formcontrol className="signup-input">
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
            <span className="signup-error">{errors['phno']}</span>
          </formcontrol>
  
          <formcontrol className="signup-input">
            <img src={email_icon} alt="" />
            <input type="text" onChange={(e)=> onValueChange(e)} placeholder='username' id='username'/>
            <span className="signup-error">{errors['username']}</span>
          </formcontrol>
  
          <formcontrol className="signup-input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' id='password' autoComplete='current-password' onChange={(e)=> onValueChange(e)}/>
            <span className="signup-error">{errors['password']}</span>
          </formcontrol>
  
          
        </div>
        <div className="signup-submit-container">
          <button className="signup-submit" onClick={addUserDetails}>Sign Up</button>
        </div>
        <Modal show={signupSuccess} title = "Signup Successful!" onClose={() => {setSignupSuccess(false);  navigate('/login');}}>
          <p>Signup Successful! Proceed to Login</p>
        </Modal>
        <div className="signup-forgot-password">Already got an account? <Link to="/Login"><span>Login</span></Link></div>
      </div>
    </div>
  );
};

export default Signup;
