import React from 'react';
import './Landing.css';
import  project  from '../assets/addproject.png';
import project_img from '../assets/project_img.png';
import filter from '../assets/filter.png';
import comment from '../assets/comment.png';
import { Link } from 'react-router-dom';
import { addProject } from '../../service/api';

const Landing = () => {
  return (
    <div className='super-landing'>
    <div className='main-landing'>
      <div className="landing">
        <nav className="navbar">
          <ul className="navbar__nav">
            <li className="navbar__nav-item">
             <h3>ProjectPulse</h3>
            </li>
            {/* <li className="navbar__nav-item">
              <Link to="/home"><h3>User Login/Sign Up</h3></Link>
            </li> */}
          </ul>
        </nav>
        <div className="content-wrapper">
          <div className="intro-container">
            <h2>Project Management <br/>Made Easy</h2>
            <p>
              A project management system is like a conductor orchestrating a symphony, ensuring all tasks harmonize towards a successful project completion. It's the digital backbone that organizes, tracks, and streamlines every aspect of a project, from inception to delivery.
            </p>
          </div>
          <div className="image-container">
            <img src={project_img} alt="Project Management System" />
          </div>
        </div>
      </div>
      <div className='button-class'>
        <Link to="/login"><button className='btn1'>User Login</button></Link>
        <Link to="/adminlogin"><button className='btn2'>Admin Login</button></Link>
      </div>
    </div>



   {/* second section */}
    <div className='second-section'>
    <div className="wrapper">
    <div className="center-line">
      
    </div>
    <div className="row row-1">
      <section >
        <img src={project} alt='addproject'/>
      </section>
    </div>
    <div className="row row-2">
      <section>
        <i className="icon fas fa-star"></i>
        <div className="details">
          <span className="title">Create your own project</span>
          
        </div>
        <p>Give your project name and you can assign the project to all user</p>
        <div className="bottom">
          <a href="#">Read more</a>
         
        </div>
      </section>
    </div>
    <div className="row row-1">
      <section>
      <img src={comment} alt='addproject'/>
      </section>
    </div>
    <div className="row row-2">
      <section>
        <i className="icon fas fa-globe"></i>
        <div className="details">
          <span className="title">Comment on projects</span>
        </div>
        <p>Give your opinion on every project and see others</p>
        <div className="bottom">
          <a href="#">Read more</a>
         
        </div>
      </section>
    </div>
    <div className="row row-1">
      <section>
      <img src={filter} alt='addproject'/>
        
      </section>
    </div>
    <div className="row row-2">
      <section>
      <i className="icon fas fa-paper-plane"></i>
        <div className="details">
          <span className="title">Filter your project</span>
          
        </div>
        <p>filter you project as per your requirements.</p>
        <div className="bottom">
          <a >Read more</a>
   
        </div>
      </section>
    </div>
     </div>
    </div>

    <div className='footer1'>
      <div className='tag'>
        <h2>Move Faster, bulid better</h2>
        <button className='fbtn'>Get it free</button>
      </div>
    </div>
    <footer>
    <div className="footerContainer">
        <div className="socialIcons">
        </div>
        <div className="footerNav">
            <ul><li><a href="">Home</a></li>
                <li><a href="">News</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">our Team</a></li>
            </ul>
        </div>
        
    </div>
    <div className="footerBottom">
        <p>Copyright &copy;2024; Designed by <span className="designer">Group 2</span></p>
    </div>
</footer>
    </div>
    
    
  );
};

export default Landing;
