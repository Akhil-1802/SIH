import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const QuizExercise = ({ exercise, onComplete, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === exercise.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    onAnswer(correct);
  };

  const handleContinue = () => {
    onComplete(isCorrect ? exercise.xpReward : Math.floor(exercise.xpReward / 2));
  };

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
  }, [exercise.id]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{exercise.title}</h3>
        <p className="text-lg text-gray-700">{exercise.question}</p>
      </div>

      {!showResult ? (
        <div className="space-y-3">
          {exercise.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200 text-gray-800 font-medium"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${isCorrect ? 'bg-green-100 border-2 border-green-300' : 'bg-red-100 border-2 border-red-300'}`}>
            <div className="flex items-center mb-3">
              {isCorrect ? (
                <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600 mr-3" />
              )}
              <h4 className={`text-xl font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? 'Excellent! 🎉' : 'Not quite right! 💪'}
              </h4>
            </div>
            
            <p className={`${isCorrect ? 'text-green-700' : 'text-red-700'} mb-3`}>
              {isCorrect ? 
                `Amazing work! You earned ${exercise.xpReward} XP!` : 
                `The correct answer is: ${exercise.correctAnswer}. You still earned ${Math.floor(exercise.xpReward / 2)} XP for trying!`
              }
            </p>
            
            {exercise.tutorHint && (
              <p className="text-gray-700 text-sm italic">
                💡 {exercise.tutorHint}
              </p>
            )}
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all duration-200"
          >
            Continue Learning! ✨
          </button>
        </div>
      )}
    </div>
  );
};