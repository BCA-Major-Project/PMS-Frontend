import React from 'react';
import './LeftSidebar.css';

const username = localStorage.getItem('uname');

function LeftBlock({ onAddProjectClick, onDashboardClick }) {
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
        <div className='dashboard' onClick={onDashboardClick}>
          Dashboard
        </div>
        <div className='project' onClick={onAddProjectClick}>
          Add Project
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default LeftBlock;
