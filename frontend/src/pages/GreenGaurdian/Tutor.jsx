import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

export const Tutor = ({ expression, message, showMessage, onMessageDismiss }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showMessage) {
      setIsAnimating(true);
    }
  }, [showMessage]);

  const getTutorEmoji = () => {
    switch (expression) {
      case 'happy':
        return '😊';
      case 'encouraging':
        return '🌟';
      case 'excited':
        return '🎉';
      default:
        return '😊';
    }
  };

  const getTutorName = () => {
    return 'Eco the Green Guardian';
  };

  return (
    <div className="flex items-center space-x-4">
      <div className={`relative transform transition-all duration-500 ${isAnimating ? 'scale-110' : 'scale-100'}`}>
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-2xl shadow-lg">
          {getTutorEmoji()}
        </div>
        {expression === 'excited' && (
          <div className="absolute -top-2 -right-2 animate-bounce">
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-bold text-green-700">{getTutorName()}</span>
          <MessageCircle className="h-4 w-4 text-green-500 ml-2" />
        </div>
        
        {showMessage && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 relative animate-fade-in">
            <p className="text-gray-800 leading-relaxed">{message}</p>
            <button
              onClick={onMessageDismiss}
              className="absolute top-2 right-2 text-green-600 hover:text-green-800 text-sm"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};