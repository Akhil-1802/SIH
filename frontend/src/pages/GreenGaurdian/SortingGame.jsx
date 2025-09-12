import React, { useState, useEffect } from 'react';
import { CheckCircle, RotateCcw } from 'lucide-react';

export const SortingGame = ({ exercise, onComplete, onAnswer }) => {
  const [sortedItems, setSortedItems] = useState({});
  const [availableItems, setAvailableItems] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (exercise.items && exercise.categories) {
      setAvailableItems([...exercise.items]);
      const initialSorted = {};
      exercise.categories.forEach(cat => {
        initialSorted[cat] = [];
      });
      setSortedItems(initialSorted);
    }
    setShowResult(false);
  }, [exercise.id]);

  const handleItemDrop = (item, category) => {
    setAvailableItems(prev => prev.filter(i => i !== item));
    setSortedItems(prev => ({
      ...prev,
      [category]: [...prev[category], item]
    }));
  };

  const handleItemReturn = (item, fromCategory) => {
    setSortedItems(prev => ({
      ...prev,
      [fromCategory]: prev[fromCategory].filter(i => i !== item)
    }));
    setAvailableItems(prev => [...prev, item]);
  };

  const checkAnswer = () => {
    if (!exercise.pairs) return;

    let correctCount = 0;
    const totalItems = exercise.pairs.length;

    exercise.pairs.forEach(pair => {
      if (sortedItems[pair.category]?.includes(pair.item)) {
        correctCount++;
      }
    });

    const correct = correctCount === totalItems;
    setIsCorrect(correct);
    setScore(correctCount);
    setShowResult(true);
    onAnswer(correct);
  };

  const resetGame = () => {
    if (exercise.items && exercise.categories) {
      setAvailableItems([...exercise.items]);
      const initialSorted = {};
      exercise.categories.forEach(cat => {
        initialSorted[cat] = [];
      });
      setSortedItems(initialSorted);
    }
    setShowResult(false);
  };

  const handleContinue = () => {
    const earnedXP = Math.floor((score / (exercise.pairs?.length || 1)) * exercise.xpReward);
    onComplete(earnedXP);
  };

  if (!exercise.categories || !exercise.items) {
    return <div>Invalid exercise data</div>;
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{exercise.title}</h3>
        <p className="text-lg text-gray-700 mb-4">{exercise.question}</p>
      </div>

      {!showResult ? (
        <>
          {availableItems.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-700 mb-3">Items to Sort:</h4>
              <div className="flex flex-wrap gap-2">
                {availableItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg shadow-sm border cursor-move select-none hover:shadow-md transition-shadow"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercise.categories.map((category, index) => (
              <div
                key={index}
                className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-4 min-h-[120px]"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const item = e.dataTransfer.getData('text/plain');
                  if (availableItems.includes(item)) {
                    handleItemDrop(item, category);
                  }
                }}
              >
                <h4 className="font-semibold text-blue-700 mb-3 text-center">{category}</h4>
                <div className="space-y-2">
                  {sortedItems[category]?.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white px-3 py-2 rounded-lg shadow-sm border cursor-pointer hover:bg-gray-50"
                      onClick={() => handleItemReturn(item, category)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={checkAnswer}
              disabled={availableItems.length > 0}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              Check My Sorting! ✨
            </button>
            <button
              onClick={resetGame}
              className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${isCorrect ? 'bg-green-100 border-2 border-green-300' : 'bg-yellow-100 border-2 border-yellow-300'}`}>
            <div className="flex items-center mb-3">
              <CheckCircle className={`h-8 w-8 mr-3 ${isCorrect ? 'text-green-600' : 'text-yellow-600'}`} />
              <h4 className={`text-xl font-bold ${isCorrect ? 'text-green-800' : 'text-yellow-800'}`}>
                {isCorrect ? 'Perfect Sorting! 🎉' : `Good effort! ${score}/${exercise.pairs?.length} correct! 💪`}
              </h4>
            </div>
            
            <p className={`${isCorrect ? 'text-green-700' : 'text-yellow-700'} mb-3`}>
              {isCorrect ? 
                `Outstanding! You earned the full ${exercise.xpReward} XP!` : 
                `You earned ${Math.floor((score / (exercise.pairs?.length || 1)) * exercise.xpReward)} XP! Keep practicing!`
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