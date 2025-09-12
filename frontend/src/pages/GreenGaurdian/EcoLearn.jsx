import React, { useState, useEffect } from 'react';
import { Tutor } from './Tutor';
import { LessonCard } from './LessonCard';
import { QuizExercise } from './QuizExercise';
import { SortingGame } from './SortingGame';
import { DragDropChallenge } from './DragDropChallenge';
import { ProgressBar } from './ProgressBar';
import { GameStats } from './GameStats';
import { Badge, Star, Recycle, Trophy } from 'lucide-react';
import { lessonsData } from './data/lessons';

function Green() {
  const [currentLesson, setCurrentLesson] = useState(null);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userProgress, setUserProgress] = useState({
    xp: 0,
    streak: 0,
    badges: [],
    completedLessons: [],
    level: 1
  });
  const [showTutorMessage, setShowTutorMessage] = useState(true);
  const [tutorExpression, setTutorExpression] = useState('happy');

  useEffect(() => {
    const saved = localStorage.getItem('wasteManagementProgress');
    if (saved) {
      setUserProgress(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wasteManagementProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const handleLessonStart = (lessonId) => {
    setCurrentLesson(lessonId);
    setCurrentExercise(0);
    setShowTutorMessage(true);
    setTutorExpression('excited');
  };

  const handleExerciseComplete = (earnedXP) => {
    setUserProgress(prev => ({
      ...prev,
      xp: prev.xp + earnedXP,
      level: Math.floor((prev.xp + earnedXP) / 100) + 1
    }));
    
    setTutorExpression('happy');
    
    const currentLessonData = lessonsData.find(l => l.id === currentLesson);
    if (currentLessonData && currentExercise < currentLessonData.exercises.length - 1) {
      setTimeout(() => {
        setCurrentExercise(prev => prev + 1);
        setShowTutorMessage(true);
      }, 2000);
    } else {
      // Lesson completed
      handleLessonComplete();
    }
  };

  const handleLessonComplete = () => {
    if (currentLesson && !userProgress.completedLessons.includes(currentLesson)) {
      const bonusXP = 50;
      const newBadge = `lesson-${currentLesson}`;
      
      setUserProgress(prev => ({
        ...prev,
        xp: prev.xp + bonusXP,
        streak: prev.streak + 1,
        badges: [...prev.badges, newBadge],
        completedLessons: [...prev.completedLessons, currentLesson],
        level: Math.floor((prev.xp + bonusXP) / 100) + 1
      }));
    }
    
    setTimeout(() => {
      setCurrentLesson(null);
      setCurrentExercise(0);
    }, 3000);
  };

  const handleBackToLessons = () => {
    setCurrentLesson(null);
    setCurrentExercise(0);
  };

  if (currentLesson !== null) {
    const lesson = lessonsData.find(l => l.id === currentLesson);
    if (!lesson) return null;

    const exercise = lesson.exercises[currentExercise];
    const isFirstExercise = currentExercise === 0;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={handleBackToLessons}
              className="px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              ← Back to Lessons
            </button>
            <GameStats progress={userProgress} />
          </div>

          <ProgressBar 
            current={currentExercise + 1} 
            total={lesson.exercises.length}
            title={lesson.title}
          />

          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <Tutor
              expression={tutorExpression}
              message={isFirstExercise ? lesson.introduction : exercise.tutorHint}
              showMessage={showTutorMessage}
              onMessageDismiss={() => setShowTutorMessage(false)}
            />
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6">
            {exercise.type === 'quiz' && (
              <QuizExercise
                exercise={exercise}
                onComplete={handleExerciseComplete}
                onAnswer={(isCorrect) => {
                  setTutorExpression(isCorrect ? 'happy' : 'encouraging');
                  setShowTutorMessage(true);
                }}
              />
            )}
            {exercise.type === 'sorting' && (
              <SortingGame
                exercise={exercise}
                onComplete={handleExerciseComplete}
                onAnswer={(isCorrect) => {
                  setTutorExpression(isCorrect ? 'happy' : 'encouraging');
                  setShowTutorMessage(true);
                }}
              />
            )}
            {exercise.type === 'dragdrop' && (
              <DragDropChallenge
                exercise={exercise}
                onComplete={handleExerciseComplete}
                onAnswer={(isCorrect) => {
                  setTutorExpression(isCorrect ? 'happy' : 'encouraging');
                  setShowTutorMessage(true);
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-3 rounded-full">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">EcoLearn</h1>
                <p className="text-gray-600">Master Waste Management</p>
              </div>
            </div>
            <GameStats progress={userProgress} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Tutor
            expression="happy"
            message="Welcome back, eco-warrior! Ready to learn more about protecting our planet? Let's dive into today's waste management lessons! 🌱"
            showMessage={true}
            onMessageDismiss={() => {}}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessonsData.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isCompleted={userProgress.completedLessons.includes(lesson.id)}
              isLocked={lesson.id > Math.max(...userProgress.completedLessons, 0) + 1}
              onStart={() => handleLessonStart(lesson.id)}
            />
          ))}
        </div>

        {userProgress.badges.length > 0 && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center mb-4">
              <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Your Badges</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {userProgress.badges.map((badge, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg text-center">
                  <Badge className="h-8 w-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm font-medium">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Green;