import React from 'react';
import { Lock, CheckCircle, Star } from 'lucide-react';

export const LessonCard = ({ lesson, isCompleted, isLocked, onStart }) => {
  const getDifficultyColor = () => {
    switch (lesson.difficulty) {
      case 'easy':
        return 'text-green-500 bg-green-100';
      case 'medium':
        return 'text-orange-500 bg-orange-100';
      case 'hard':
        return 'text-red-500 bg-red-100';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  const getDifficultyStars = () => {
    const starCount = lesson.difficulty === 'easy' ? 1 : lesson.difficulty === 'medium' ? 2 : 3;
    return Array(starCount).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-current" />
    ));
  };

  if (isLocked) {
    return (
      <div className="bg-gray-100 rounded-2xl shadow-md p-6 opacity-60">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl">{lesson.icon}</div>
          <Lock className="h-6 w-6 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-500 mb-2">{lesson.title}</h3>
        <p className="text-gray-400 mb-4">{lesson.description}</p>
        <div className="flex items-center justify-between">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}>
            <div className="flex items-center space-x-1">
              <span className="capitalize">{lesson.difficulty}</span>
              <div className="flex">{getDifficultyStars()}</div>
            </div>
          </div>
          <span className="text-gray-400 text-sm">Locked</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 cursor-pointer ${
        isCompleted ? 'ring-2 ring-green-200' : ''
      }`}
      onClick={onStart}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{lesson.icon}</div>
        {isCompleted && <CheckCircle className="h-6 w-6 text-green-500" />}
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
      <p className="text-gray-600 mb-4">{lesson.description}</p>
      
      <div className="flex items-center justify-between">
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor()}`}>
          <div className="flex items-center space-x-1">
            <span className="capitalize">{lesson.difficulty}</span>
            <div className="flex">{getDifficultyStars()}</div>
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          {isCompleted ? 'Replay' : 'Start'}
        </button>
      </div>
    </div>
  );
};