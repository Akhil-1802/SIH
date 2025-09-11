import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaCog, FaUserShield } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className=" border-b border-green-200 bg-green-100 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-extrabold text-green-700">
        Cleansweep
      </Link>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={16} />
        </div>
        <div className="flex items-center space-x-3">
          <FaBell className="text-green-700 hover:text-green-900 cursor-pointer" size={20} />
          <FaCog className="text-green-700 hover:text-green-900 cursor-pointer" size={20} />
          <FaUserShield className="text-green-700 hover:text-green-900 cursor-pointer" size={20} />
        </div>
      </div>
    </nav>
  );
}