import React from 'react';
import './Landing.css';
import project_img from '../../assets/project_img.png';

const Landing = () => {
  return (
    <div className="landing">
      <nav className="navbar">
        <ul className="navbar__nav">
          <li className="navbar__nav-item">
            <a href="#"><h3>Admin Login</h3></a>
          </li>
          <li className="navbar__nav-item">
            <a href="#"><h3>User Login/Sign Up</h3></a>
          </li>
        </ul>
      </nav>
      <div className="content-wrapper">
        <div className="intro-container">
          <h1>Project Management System</h1>
          <p>
          A project management system is like a conductor orchestrating a symphony, ensuring all tasks harmonize towards a successful project completion. It's the digital backbone that organizes, tracks, and streamlines every aspect of a project, from inception to delivery.
          </p>
          <button className='big-button'>Explore Now</button>
        </div>
        <div className="image-container">
          <img src={project_img} alt="Project Management System" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
