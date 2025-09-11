// EcoWasteImageLearning.jsx
import React from "react";

const courses = [
  {
    title: "Waste Segregation 101",
    subtitle: "Learn to basics of proper waste separation",
    duration: "30 minutes",
    level: "Beginner",
    text: "Master the art of separation biodegradable.",
  },
  {
    title: "Composting at Home",
    subtitle: "Become an enviroment advocate",
    duration: "45 minutes",
    level: "Intermediate",
    text: "Learn how to create nutrient-rich compost from you organic waste.",
  },
  {
    title: "recycling Best Practices",
    subtitle: "Maximize your recycling impact",
    duration: "25 minutes",
    level: "Beginner",
    text: "Discover which materials can be recycled and how to perpare them properly.",
  },
  {
    title: "Community Leadership",
    subtitle: "Become an environmental advocate",
    duration: "60 minutes",
    level: "Advanced",
    text: "Learn how to organize community clean-up drives and awareness",
  },
];

const levelColor = {
  Beginner: "bg-green-600",
  Intermediate: "bg-yellow-500",
  Advanced: "bg-red-600",
};

export default function EcoWasteLearning() {
  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-7">Training & Education</h1>
        <div className="grid lg:grid-cols-2 gap-7">
          {courses.map((c, i) => (
            <div key={i} className="bg-green-50 border border-green-100 rounded-2xl px-7 py-5 shadow">
              <div className="flex justify-between items-center mb-1">
                <h2 className="font-bold text-lg text-gray-900">{c.title}</h2>
                <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${levelColor[c.level]}`}>{c.level}</span>
              </div>
              <div className="text-green-800 text-sm mb-1">{c.subtitle}</div>
              <div className="text-xs text-gray-700 mb-3">Duration: {c.duration}</div>
              <div className="text-gray-700 text-[15px] mb-4">{c.text}</div>
              <button className="bg-green-600 hover:bg-green-700 transition text-white py-2 px-5 rounded-lg font-semibold">Start Course</button>
            </div>
          ))}
        </div>
      </main>
  );
}
