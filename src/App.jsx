// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/LoginSignup/Landing';
import Adminlogin from './pages/Admin/Adminlogin';

import Signup from './pages/LoginSignup/Signup';
import Login from './pages/LoginSignup/Login';
import Forgotpwd from './pages/ForgotPassword/ForgotPassword';
import Userdetails from './pages/Admin/Userdetails';
import ProjectDetails from './pages/Admin/ProjectDetails';
import EditUser from './pages/Admin/EditUser';
import Home from './pages/Home/Home';
import EditProject from './pages/Admin/EditProject';
import Protected from './components/Protected/Protected'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpwd" element={<Forgotpwd/>} />
          <Route path="/userdetails" element={<Userdetails/>} />
          <Route path="/projectdetails/:uid" element={<ProjectDetails/>} />
          <Route path="/adminlogin" element={<Adminlogin/>} />
          <Route path="/edit/:id" element={<EditUser/>} />
          <Route path="/editproject/:id" element={<EditProject/>} />
          <Route path="/home" element={<Protected Component={Home}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
