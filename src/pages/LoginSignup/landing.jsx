import React from 'react';
import './landing.css'; // Assuming you have a CSS file for styling

function Landing() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to ProjectHub</h1>
        <h2>Simplify Your Project Management</h2>
      </header>
      <img src="placeholder.jpg" alt="ProjectHub" />
      <section>
        <h3>Features:</h3>
        <ul>
          <li>Task Tracking</li>
          <li>Team Collaboration</li>
          <li>File Sharing</li>
          <li>Progress Monitoring</li>
        </ul>
        <button>Sign Up</button>
        <button>Learn More</button>
        <div className="links">
          <a href="/admin">Admin</a>
          <a href="/user">User</a>
        </div>
      </section>
      <footer>
        <nav>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Landing;
