import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaCog, FaUserShield, FaGift } from 'react-icons/fa';
import { Recycle } from 'lucide-react';

export default function Navbar() {
  const navigation = useNavigate()
  return (
    <nav className=" border-b border-green-200 bg-green-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-3 cursor-pointer">
        <div onClick={()=>{navigation('/userdashboard')}} className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
          <Recycle className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          CleanSweep
        </span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Reward Box */}
        <div className="flex items-center bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2 mr-2 shadow-sm">
          <FaGift className="text-yellow-500 mr-2" size={20} />
          <span className="font-semibold text-yellow-700">Rewards: 120</span>
        </div>
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