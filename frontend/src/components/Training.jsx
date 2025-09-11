import React, { useRef, useState } from "react";
import { FaPlayCircle, FaCheckCircle } from "react-icons/fa";

const trainingModules = [
  {
    id: 1,
    title: "Introduction to EcoWaste",
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    duration: 60, // seconds
    points: 10,
  },
  {
    id: 2,
    title: "Waste Segregation Basics",
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    duration: 90,
    points: 15,
  },
  {
    id: 3,
    title: "Quiz: Test Your Knowledge",
    type: "quiz",
    points: 15,
  },
];

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

export default function Training() {
  const [current, setCurrent] = useState(0);
  const [watched, setWatched] = useState(Array(trainingModules.length).fill(false));
  const [videoProgress, setVideoProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const videoRef = useRef(null);

  // Prevent skipping ahead
  const [maxPlayed, setMaxPlayed] = useState(0);

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    // Prevent seeking ahead
    if (video.currentTime > maxPlayed + 1) {
      video.currentTime = maxPlayed;
    } else {
      setMaxPlayed(video.currentTime);
    }
    const percent = (video.currentTime / video.duration) * 100;
    setVideoProgress(percent);
    if (video.currentTime >= video.duration - 1) {
      markAsWatched(current);
    }
  };

  const handleVideoSeeking = () => {
    const video = videoRef.current;
    if (video.currentTime > maxPlayed) {
      video.currentTime = maxPlayed;
    }
  };

  const markAsWatched = (idx) => {
    if (!watched[idx]) {
      const updated = [...watched];
      updated[idx] = true;
      setWatched(updated);
      setVideoProgress(100);
      // If last module, mark as completed
      if (idx === trainingModules.length - 1) setCompleted(true);
    }
  };

  const handleNext = () => {
    if (current < trainingModules.length - 1 && watched[current]) {
      setCurrent(current + 1);
      setVideoProgress(0);
      setMaxPlayed(0);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setVideoProgress(0);
      setMaxPlayed(0);
    }
  };

  // Only allow going to a module if all previous are watched
  const canGoToModule = (idx) => {
    if (idx === 0) return true;
    return watched.slice(0, idx).every(Boolean);
  };

  // Calculate progress
  const progress =
    (watched.filter(Boolean).length / trainingModules.length) * 100;

  return (
    <div className="max-w-3xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-green-700">
            Training Progress
          </h2>
          <span className="text-green-600 font-semibold">
            {watched.filter(Boolean).length}/{trainingModules.length} Completed
          </span>
        </div>
        <div className="w-full bg-green-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar: Chapters */}
        <aside className="w-1/3">
          <ul className="space-y-3">
            {trainingModules.map((mod, idx) => (
              <li
                key={mod.id}
                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition ${
                  idx === current
                    ? "bg-green-100 font-semibold"
                    : canGoToModule(idx)
                    ? "hover:bg-green-50"
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() => canGoToModule(idx) && setCurrent(idx)}
              >
                {watched[idx] ? (
                  <FaCheckCircle className="text-green-500 mr-2" />
                ) : (
                  <FaPlayCircle className="text-green-400 mr-2" />
                )}
                <span>{mod.title}</span>
                {mod.type === "video" && (
                  <span className="ml-auto text-xs text-green-600">
                    {formatTime(mod.duration)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Content */}
        <section className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {trainingModules[current].title}
            </h3>
            {trainingModules[current].type === "video" ? (
              <div>
                <div className="relative rounded-lg overflow-hidden mb-2">
                  <video
                    ref={videoRef}
                    width="100%"
                    controls
                    controlsList="nodownload noplaybackrate"
                    disablePictureInPicture
                    onTimeUpdate={handleVideoTimeUpdate}
                    onSeeking={handleVideoSeeking}
                    onEnded={() => markAsWatched(current)}
                    className="rounded-lg border border-green-200"
                  >
                    <source
                      src={trainingModules[current].src}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <span className="absolute top-2 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {formatTime(trainingModules[current].duration)}
                  </span>
                </div>
                <div className="w-full bg-green-100 rounded-full h-2 mb-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${videoProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    disabled={current === 0}
                    className={`px-4 py-2 rounded bg-green-200 text-green-700 font-semibold mr-2 ${
                      current === 0 ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={
                      !watched[current] ||
                      current === trainingModules.length - 1
                    }
                    className={`px-4 py-2 rounded bg-green-500 text-white font-semibold ${
                      !watched[current] ||
                      current === trainingModules.length - 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-green-600"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-green-800">
                <p>
                  {/* Placeholder for quiz or other module types */}
                  Complete the quiz to test your knowledge!
                </p>
                <button
                  onClick={() => {
                    markAsWatched(current);
                    handleNext();
                  }}
                  className="mt-4 px-4 py-2 rounded bg-green-500 text-white font-semibold hover:bg-green-600"
                  disabled={watched[current]}
                >
                  {watched[current] ? "Completed" : "Complete Quiz"}
                </button>
              </div>
            )}
          </div>
          {completed && (
            <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4 flex items-center">
              <FaCheckCircle className="text-yellow-500 mr-3" size={28} />
              <div>
                <span className="font-bold text-yellow-700 text-lg">
                  Congratulations! Training Completed.
                </span>
                <div className="text-yellow-700">
                  You have earned{" "}
                  <span className="font-bold">
                    {trainingModules.reduce((sum, m) => sum + m.points, 0)}
                  </span>{" "}
                  reward points!
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}