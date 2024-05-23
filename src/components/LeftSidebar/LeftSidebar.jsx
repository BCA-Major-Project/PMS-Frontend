import React, { useState, useEffect } from 'react';
import './LeftSidebar.css';

const LeftBlock = ({ onAddProjectClick, onDashboardClick }) => {
  const [activePage, setActivePage] = useState('dashboard'); // default to 'dashboard'
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUsername(user?.username);
  
    if (user?.image) {
      const imageUrl = `data:image/jpeg;base64,${user.image}`;
      setAvatar(imageUrl);
    }
    else{
      const nameParams = user.name.split(" ").join("+");
      const imageUrl= `https://ui-avatars.com/api/?name=${nameParams}&background=random`;
      setAvatar(imageUrl);
    }
  }, []); // This effect runs only once on component mount

  const handleDashboardClick = () => {
    setActivePage('dashboard');
    onDashboardClick();
  };

  const handleAddProjectClick = () => {
    setActivePage('project');
    onAddProjectClick();
  };

  return (
    <div className='left common'>
      <div className='profile'>
      <div className='dp'>
        <img id="user-avatar" src={avatar} alt={`${username}'s avatar`} />
      </div>
        <div className='name'>{username}</div>
      </div>
      <div className='btn'>
        <div className={`dashboard ${activePage === 'dashboard' ? 'active' : ''}`} onClick={handleDashboardClick}>
          Dashboard
        </div>
        <div className={`project ${activePage === 'project' ? 'active' : ''}`} onClick={handleAddProjectClick}>
          Add Project
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default LeftBlock;