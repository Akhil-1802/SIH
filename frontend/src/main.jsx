<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import BusTrackingMap from './pages/BusTracking/BusTracking.jsx';
import DriverLoginPage from './pages/Driver/DriverLoginPage.jsx';
import Dashboard from './pages/Driver/Dashboard.jsx';
import PublicLoginRegistrationPage from './pages/User/PublicLoginRegistrationPage.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>
  }
  ,{
    
    path : '/tracking',
    element:<BusTrackingMap/>
  },{
    path : '/driverlogin',
    element : <DriverLoginPage/>
  },{
    path :'/driverdashboard',
    element :<Dashboard/>
  },
  {
    path :'/userlogin',
    element :<PublicLoginRegistrationPage/>
  }
])

createRoot(document.getElementById('root')).render(
=======
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import LandingPage from "./components/LandingPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";

createRoot(document.getElementById("root")).render(
>>>>>>> a0a60d5467aa39ef1aa3786ebc8361b45518868d
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
