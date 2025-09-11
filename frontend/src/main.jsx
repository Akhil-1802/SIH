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
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
