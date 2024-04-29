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
import AdminHome from './pages/Admin/AdminHome';
import EditUser from './pages/Admin/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpwd" element={<Forgotpwd/>} />
          <Route path="/otp" element={<OTPGenerate/>} />
          <Route path="/userdetails" element={<Userdetails/>} />
          <Route path="/adminlogin" element={<Adminlogin/>} />
          <Route path="/adminhome" element={<AdminHome/>} />
          <Route path="/edit/:id" element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
