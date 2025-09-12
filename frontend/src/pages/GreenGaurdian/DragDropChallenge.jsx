import React, { useState, useEffect } from 'react';
import { CheckCircle, Target } from 'lucide-react';

export const DragDropChallenge = ({ exercise, onComplete, onAnswer }) => {
  const [droppedItems, setDroppedItems] = useState({});
  const [availableItems, setAvailableItems] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (exercise.items) {
      setAvailableItems([...exercise.items]);
      setDroppedItems({});
    }
    setShowResult(false);
  }, [exercise.id]);

  const handleDrop = (item, dropZone) => {
    setDroppedItems(prev => ({ ...prev, [dropZone]: item }));
    setAvailableItems(prev => prev.filter(i => i !== item));
  };

  const handleRemoveFromDropZone = (dropZone) => {
    const item = droppedItems[dropZone];
    if (item) {
      setAvailableItems(prev => [...prev, item]);
      setDroppedItems(prev => {
        const newDropped = { ...prev };
        delete newDropped[dropZone];
        return newDropped;
      });
    }
  };

  const checkAnswer = () => {
    if (!exercise.pairs) return;

    let correctCount = 0;
    exercise.pairs.forEach(pair => {
      if (droppedItems[pair.category] === pair.item) {
        correctCount++;
      }
    });

    const correct = correctCount === exercise.pairs.length;
    setIsCorrect(correct);
    setScore(correctCount);
    setShowResult(true);
    onAnswer(correct);
  };

  const handleContinue = () => {
    const earnedXP = Math.floor((score / (exercise.pairs?.length || 1)) * exercise.xpReward);
    onComplete(earnedXP);
  };

  if (!exercise.pairs || !exercise.items) {
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
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Drag these items to the correct bins:
              </h4>
              <div className="flex flex-wrap gap-2">
                {availableItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white px-4 py-2 rounded-lg shadow-md border-2 border-blue-200 cursor-move select-none hover:shadow-lg transition-all duration-200 hover:scale-105"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('text/plain', item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercise.pairs.map((pair, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 border-3 border-dashed border-green-300 rounded-xl p-6 min-h-[140px] flex flex-col items-center justify-center transition-all duration-200 hover:border-green-400"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const item = e.dataTransfer.getData('text/plain');
                  if (availableItems.includes(item)) {
                    handleDrop(item, pair.category);
                  }
                }}
              >
                <h4 className="font-bold text-green-700 mb-3 text-center text-lg">{pair.category}</h4>
                {droppedItems[pair.category] ? (
                  <div
                    className="bg-white px-4 py-2 rounded-lg shadow-md border-2 border-green-400 cursor-pointer hover:bg-green-50 transition-colors"
                    onClick={() => handleRemoveFromDropZone(pair.category)}
                  >
                    {droppedItems[pair.category]}
                  </div>
                ) : (
                  <div className="text-green-600 text-sm italic opacity-70">
                    Drop item here
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={checkAnswer}
              disabled={Object.keys(droppedItems).length !== exercise.pairs.length}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white px-8 py-3 rounded-xl font-medium transition-colors text-lg"
            >
              Check My Matches! ✨
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <div className={`p-6 rounded-xl ${isCorrect ? 'bg-green-100 border-2 border-green-300' : 'bg-yellow-100 border-2 border-yellow-300'}`}>
            <div className="flex items-center mb-3">
              <CheckCircle className={`h-8 w-8 mr-3 ${isCorrect ? 'text-green-600' : 'text-yellow-600'}`} />
              <h4 className={`text-xl font-bold ${isCorrect ? 'text-green-800' : 'text-yellow-800'}`}>
                {isCorrect ? 'Perfect Match! 🎉' : `Great try! ${score}/${exercise.pairs.length} correct! 💪`}
              </h4>
            </div>
            
            <p className={`${isCorrect ? 'text-green-700' : 'text-yellow-700'} mb-3`}>
              {isCorrect ? 
                `Excellent matching skills! You earned the full ${exercise.xpReward} XP!` : 
                `You earned ${Math.floor((score / exercise.pairs.length) * exercise.xpReward)} XP! Keep practicing!`
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