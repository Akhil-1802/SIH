import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBell,
  FaFileAlt,
  FaTruck,
  FaLeaf,
  FaClipboardList,
  FaBook,
  FaMapMarkedAlt,
  FaGift,
  FaBars,
  FaTimes
} from 'react-icons/fa';

export default function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: 'notifications', label: 'Notifications', icon: FaBell },
    { path: 'complaints', label: 'Complaints', icon: FaFileAlt },
    { path: 'collectors', label: 'Find Collectors', icon: FaTruck },
    { path: 'bioplants', label: 'Bio Plants', icon: FaLeaf },
    { path: 'register', label: 'Register Waste', icon: FaClipboardList },
    { path: 'training', label: 'Training', icon: FaBook },
    { path: 'ecolearn', label: 'EcoLearn', icon: FaLeaf },
    { path: 'rewards', label: 'Rewards', icon: FaGift },
    { path: '/tracking', label: 'Garbage Tracking', icon: FaMapMarkedAlt },
  ];

  const activeSegment = location.pathname.split('/')[2] || 'training';

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded-lg shadow-lg"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-green-100 border-r border-green-200 min-h-screen p-3 sm:p-5
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <ul className="space-y-1 sm:space-y-2 mt-12 lg:mt-0">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition text-sm sm:text-base ${
                  activeSegment === item.path.replace('/', '')
                    ? 'bg-green-200 text-green-900 font-semibold'
                    : 'text-green-700 hover:bg-green-200'
                }`}
              >
                <item.icon className="mr-2 sm:mr-3" size={16} />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
