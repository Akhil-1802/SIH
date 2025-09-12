import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBell,
  FaFileAlt,
  FaTruck,
  FaLeaf,
  FaClipboardList,
  FaBook,
  FaMapMarkedAlt,
  FaGift
} from 'react-icons/fa';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: 'notifications', label: 'Notifications', icon: FaBell },
    { path: 'complaints', label: 'Complaints', icon: FaFileAlt },
    { path: 'collectors', label: 'Find Collectors', icon: FaTruck },
    { path: 'bioplants', label: 'Bio Plants', icon: FaLeaf },
    { path: 'register', label: 'Register Waste', icon: FaClipboardList },
    { path: 'training', label: 'Training', icon: FaBook },
    { path: 'ecolearn', label: 'EcoLearn', icon: FaLeaf }, // ✅ Added EcoLearn here
    { path: 'rewards', label: 'Rewards', icon: FaGift },
    { path: '/tracking', label: 'Garbage Tracking', icon: FaMapMarkedAlt },
  ];

  const activeSegment = location.pathname.split('/')[2] || 'training';

  return (
    <aside className="w-64 bg-green-100 border-r border-green-200 min-h-screen p-5">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`w-full flex items-center px-4 py-2 rounded-lg font-medium transition ${
                activeSegment === item.path.replace('/', '')
                  ? 'bg-green-200 text-green-900 font-semibold'
                  : 'text-green-700 hover:bg-green-200'
              }`}
            >
              <item.icon className="mr-2" size={18} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
