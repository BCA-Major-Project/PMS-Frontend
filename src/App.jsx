// import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/LoginSignup/Landing';

import OTPGenerate from './pages/LoginSignup/OTPGenerate';
import Signup from './pages/LoginSignup/Signup';
import Login from './pages/LoginSignup/Login';
import Forgotpwd from './pages/LoginSignup/Forgotpwd';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpwd" element={<Forgotpwd/>} />
          <Route path="/otp" element={<OTPGenerate/>} />


      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Forgotpwd/> */}
      {/* <OTPGenerate/> */}
      {/* <Landing/> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
