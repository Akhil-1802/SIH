import React from 'react';
import { Star, Trophy, Zap } from 'lucide-react';

export const GameStats = ({ progress }) => {
  return (
    <div className="flex items-center space-x-6 bg-white rounded-full px-6 py-3 shadow-md">
      <div className="flex items-center space-x-2">
        <div className="bg-blue-100 p-2 rounded-full">
          <Star className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Level</p>
          <p className="text-lg font-bold text-gray-800">{progress.level}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="bg-yellow-100 p-2 rounded-full">
          <Zap className="h-5 w-5 text-yellow-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">XP</p>
          <p className="text-lg font-bold text-gray-800">{progress.xp}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="bg-green-100 p-2 rounded-full">
          <Trophy className="h-5 w-5 text-green-600" />
        </div>
        <div>
          <p className="text-sm text-gray-600">Streak</p>
          <p className="text-lg font-bold text-gray-800">{progress.streak}</p>
        </div>
      </div>
    </div>
  );
};