// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/LoginSignup/Landing';
import Adminlogin from './pages/Admin/Adminlogin';

import OTPGenerate from './pages/LoginSignup/OTPGenerate';
import Signup from './pages/LoginSignup/Signup';
import Login from './pages/LoginSignup/Login';
import Forgotpwd from './pages/LoginSignup/Forgotpwd';
import Userdetails from './pages/Admin/Userdetails';
import ProjectDetails from './pages/Admin/ProjectDetails';
import AdminHome from './pages/Admin/AdminHome';
import EditUser from './pages/Admin/EditUser';
import Home from './pages/Home/Home';
import EditProject from './pages/Admin/EditProject';
// import Project from './pages/Project/Project';
import Protected from './components/Protected/Protected'
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Protected Component={Signup}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpwd" element={<Protected Component={Forgotpwd}/>} />
          <Route path="/otp" element={<Protected Component={OTPGenerate}/>} />
          <Route path="/userdetails" element={<Protected Component={Userdetails}/>} />
          <Route path="/projectdetails/:uid" element={<Protected Component={ProjectDetails}/>} />
          <Route path="/adminlogin" element={<Protected Component={Adminlogin}/>} />
          <Route path="/adminhome" element={<Protected Component={AdminHome}/>} />
          <Route path="/edit/:id" element={<Protected Component={EditUser}/>} />
          <Route path="/editproject/:id" element={<Protected Component={EditProject}/>} />
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="/project" element={<Project/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
