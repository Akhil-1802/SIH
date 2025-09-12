import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import App from './App.jsx'
import BusTrackingMap from './pages/GarbageTracking/GarbageTracking.jsx';
import DriverLoginPage from './pages/Driver/DriverLoginPage.jsx';
import Dashboard from './pages/Driver/Dashboard.jsx';
import PublicLoginRegistrationPage from './pages/User/PublicLoginRegistrationPage.jsx';
import UserDashboard from './pages/User/UserDashboard.jsx';
import EcoWastePoints from './components/EcoWastePoints.jsx';
import EcoWasteLearning from './components/EcoWasteLearning.jsx';
import BioPlantEvidence from './components/BioPlantEvidence.jsx';
import RegisterWaste from './components/RegisterWaste.jsx';
import Complaints from './components/Complaints.jsx';
import Notifications from './components/Notifications.jsx';
import Reward from './components/Rewards.jsx';
import Training from './components/Training.jsx';
import DriverLoginRegistrationPage from './pages/Driver/DriverLoginPage.jsx';
import Green from './pages/GreenGaurdian/EcoLearn.jsx';
import AdminDashboard from './pages/Admin/AdminPage.jsx';
import AdminLoginRegistration from './pages/Admin/AdminRegistration.jsx';
import YouTubePlayer from '../../../../../../../AppData/Local/Microsoft/Windows/INetCache/IE/ILC1LNQK/YouTubePlayer[1].jsx';

const DriverLoginWrapper = () => {
  return <DriverLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} isLogin={true} />;
};

const DriverRegisterWrapper = () => {
  return <DriverLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} isLogin={false} />;
};

const LoginPageWrapper = () => {
  return <PublicLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} />;
};

const RegisterPageWrapper = () => {
  return <PublicLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} isLogin={false} />;
};
const AdminLoginWrapper = () => {
  return <AdminLoginRegistration isOpen={true} onClose={() => window.history.back()} isLogin={true} />;
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/tracking',
    element: <BusTrackingMap />
  },
  {
    path : '/admin',
    element : <AdminDashboard />
    
  },{
    path : '/adminlogin',
    element : <AdminLoginWrapper />
    
  },
  {
    path: '/driverlogin',
    element: <DriverLoginWrapper />
  },
  {
    path: '/driverdashboard',
    element: <Dashboard />
  },
  {
    path: '/login',
    element: <LoginPageWrapper />
  },
  {
    path: '/register',
    element: <RegisterPageWrapper />
  },
  ,{
    path : '/driverregister',
    element : <DriverRegisterWrapper/>
  },
  {
    path:'/youtube',
    element :<YouTubePlayer/>
  },
  // NESTED ROUTES FOR USER DASHBOARD
  {
    path: '/userdashboard',
    element: <UserDashboard />,
    children: [
      { index: true, element: <Navigate to="training" replace /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'complaints', element: <Complaints /> },
      { path: 'collectors', element: <EcoWastePoints /> },
      { path: 'bioplants', element: <BioPlantEvidence /> },
      { path: 'register', element: <RegisterWaste /> },
      { path: 'training', element: <EcoWasteLearning /> },
      {path : 'module',element:<Training/>},
      { path: 'rewards', element: <Reward /> },{
        path : 'ecolearn',
        element : <Green/>
      }
      
    ]
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);