import React from 'react';
import { setUserOffline } from '../../service/api';
import './Navbar.css';

function TopNav() {
  const handleLogout = () => {
    setUserOffline(localStorage.getItem('id'))
    localStorage.removeItem('uname'); 
    window.location.href = '/';
  };

  return (
    <div className='top'>
      <div className='logo'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/024/553/853/non_2x/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.png'
          alt=''
        />
      </div>
      <div className='logout' onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default TopNav;
