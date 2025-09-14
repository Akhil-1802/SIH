import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaCog, FaUserShield, FaGift } from 'react-icons/fa';
import { Recycle } from 'lucide-react';

export default function Navbar() {
  const navigation = useNavigate()
  return (
    <nav className="border-b border-green-200 bg-green-100 px-4 sm:px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
        <div onClick={()=>{navigation('/userdashboard')}} className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
          <Recycle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          CleanSweep
        </span>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Reward Box - Hidden on mobile */}
        <div className="hidden md:flex items-center bg-yellow-100 border border-yellow-300 rounded-lg px-3 sm:px-4 py-2 mr-2 shadow-sm">
          <FaGift className="text-yellow-500 mr-2" size={20} />
          <span className="font-semibold text-yellow-700 text-sm sm:text-base">Rewards: 120</span>
        </div>
        {/* Search - Hidden on small screens */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-32 sm:w-auto border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={16} />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <FaBell className="text-green-700 hover:text-green-900 cursor-pointer" size={18} />
          <FaCog className="text-green-700 hover:text-green-900 cursor-pointer" size={18} />
          <FaUserShield className="text-green-700 hover:text-green-900 cursor-pointer" size={18} />
        </div>
      </div>
    </nav>
  );
}