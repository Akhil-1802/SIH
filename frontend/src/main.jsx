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
import Complaint from './components/Complaint.jsx';
import EcoWastePoints from './components/EcoWastePoints.jsx';
import EcoWasteLearning from './components/EcoWasteLearning.jsx';
import BioPlantEvidence from './components/BioPlantEvidence.jsx';
import RegisterWaste from './components/RegisterWaste.jsx';
import Complaints from './components/Complaints.jsx';
import Notifications from './components/Notifications.jsx';
import Reward from './components/Rewards.jsx';

const LoginPageWrapper = () => {
  return <PublicLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} />;
};

const RegisterPageWrapper = () => {
  return <PublicLoginRegistrationPage isOpen={true} onClose={() => window.history.back()} isLogin={false} />;
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
    path: '/driverlogin',
    element: <DriverLoginPage />
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
      { path: 'rewards', element: <Reward /> }
      
    ]
  },
  // If you want to keep these as standalone pages outside dashboard, keep them here as well
  {
    path: '/complaint',
    element: <Complaint />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);