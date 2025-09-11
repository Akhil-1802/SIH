import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import BusTrackingMap from './pages/GarbageTracking/GarbageTracking.jsx';
import DriverLoginPage from './pages/Driver/DriverLoginPage.jsx';
import Dashboard from './pages/Driver/Dashboard.jsx';
import PublicLoginRegistrationPage from './pages/User/PublicLoginRegistrationPage.jsx';
import UserDashboard from './pages/User/UserDashboard.jsx';
import Complaint from './components/Complaint.jsx';

const LoginPageWrapper = () => {
  return <PublicLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} />;
};

const RegisterPageWrapper = () => {
  return <PublicLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} isLogin={false} />;
};
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
    path :'/login',
    element :<LoginPageWrapper/>
  },
  {
    path : '/register',
    element : <RegisterPageWrapper/>
  },{
    path : '/userdashboard',
    element : <UserDashboard/>
  },{
    path : '/complaint',
    element : <Complaint/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
