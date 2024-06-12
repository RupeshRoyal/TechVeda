import { Route,Routes } from 'react-router-dom';
import React from "react";
import "./App.css";

import Home from "./pages/Home.jsx";
import Navbar from './components/common/Navbar.jsx';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {ForgotPassword }from './pages/ForgotPassword.jsx';
import UpdatePassword from './pages/UpdatePassword.jsx';
import VerifyEmail from './pages/VerifyEmail.jsx';

const App = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="login"
          element={
            // <OpenRoute>
              <Login />
            // </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            // <OpenRoute>
              <Signup />
            // </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            // <OpenRoute>
              <ForgotPassword />
            // </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            // <OpenRoute>
              <UpdatePassword />
            // </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            // <OpenRoute>
              <VerifyEmail />
            // </OpenRoute>
          }
        />
    </Routes>
    
    
    </div>
  )
}

export default App