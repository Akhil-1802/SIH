import React from 'react';

export const ProgressBar = ({ current, total, title }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <span className="text-lg font-medium text-gray-600">
          {current}/{total}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div 
          className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <p className="text-gray-600 text-sm">
        Keep going! You're doing great! 🌟
      </p>
    </div>
  );
};