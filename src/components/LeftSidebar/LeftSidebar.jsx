import React, { useState, useEffect } from 'react';
import './LeftSidebar.css';

const LeftBlock = ({ onAddProjectClick, onDashboardClick }) => {
  const [activePage, setActivePage] = useState('dashboard'); // default to 'dashboard'
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUsername(user?.username);
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
          <img
            src='https://images.unsplash.com/photo-1603775020644-eb8decd79994?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
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