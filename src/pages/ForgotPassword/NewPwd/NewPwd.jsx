import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPwd.css';
import email_icon from '../../assets/email.png';
import Modal from '../../../components/Modal/Modal'; // Adjust the path as necessary

import { editUser, getLogin } from '../../../service/api';

const NewPwd = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for modal visibility

  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    try {
      const userEmail = localStorage.getItem("user_email");
      const result = await getLogin(userEmail);
      const user = result.data;
      const updatedUser = { ...user, password: newPassword };
      
      await editUser(updatedUser, 1);
      setShowSuccessModal(true); // Show success modal instead of setting success message
  
    } catch (error) {
      console.log("Error updating password:", error);
      setError('Failed to update password');
    }
  };

  return (
    <div className="signup">
      <div className='container'>
        <div className="header">
          <div className="text">Create New Password</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input 
              type="password" 
              placeholder='New Password' 
              id='new-password' 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="email icon" />
            <input 
              type="password" 
              placeholder='Confirm Password' 
              id='confirm-password' 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
        </div>
        <div className="formcontrol">
          <button className="submitNewPwd" onClick={handleSubmit}>Confirm</button>
        </div>
        {error && <div className="error">{error}</div>}
        <Modal show={showSuccessModal} title='Password Updated' onClose={() => {
            setShowSuccessModal(false);
            navigate('/login'); // Navigate to login after closing the modal
        }}>
            <div>Password updated successfully.</div>
        </Modal>
      </div>
    </div>
  );
          }

export default NewPwd;
