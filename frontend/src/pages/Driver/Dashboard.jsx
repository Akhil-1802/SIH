import React, { useState } from "react";
import {
  ToggleLeft,
  Search,
  MessagesSquare,
  HelpCircle,
  User,
  Star,
  LogOut,
  Truck,
  BookOpen,
  AlertTriangle,
  Settings,
  QrCode,
} from "lucide-react";
import ServiceToggle from "../../components/ServiceToggle"; // Adjust path as needed

// Dummy driver data
const driverData = {
  name: "Alex Johnson",
  role: "Professional Courier",
  rating: 4.8,
};

// Dummy training modules
const trainingModules = [
  {
    id: 1,
    title: "Waste Segregation Basics",
    description: "Learn the fundamentals of separating biodegradable and non-biodegradable waste.",
    completed: false,
  },
  {
    id: 2,
    title: "Safe Waste Handling",
    description: "Understand the safety protocols for handling and transporting waste.",
    completed: false,
  },
  {
    id: 3,
    title: "Eco-friendly Practices",
    description: "Discover best practices for minimizing environmental impact.",
    completed: false,
  },
];

// Training component
function Training() {
  const [modules, setModules] = useState(trainingModules);

  const handleComplete = (id) => {
    setModules((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: true } : m))
    );
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center">
        <BookOpen className="mr-2" /> Training Modules
      </h2>
      <ul className="space-y-4">
        {modules.map((module) => (
          <li
            key={module.id}
            className={`p-4 rounded-xl border ${
              module.completed
                ? "bg-green-50 border-green-200"
                : "bg-white border-green-100"
            } flex items-center justify-between`}
          >
            <div>
              <div className="font-semibold text-green-800">{module.title}</div>
              <div className="text-sm text-green-600">{module.description}</div>
            </div>
            <button
              disabled={module.completed}
              onClick={() => handleComplete(module.id)}
              className={`ml-4 px-4 py-2 rounded-lg font-semibold ${
                module.completed
                  ? "bg-green-200 text-green-700 cursor-not-allowed"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {module.completed ? "Completed" : "Mark as Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Complaint component with QR scan simulation
function Complaint() {
  const [qrData, setQrData] = useState("");
  const [complaint, setComplaint] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Simulate QR scan (replace with real QR scanner in production)
  const handleScan = () => {
    // Simulate fetching QR data
    setQrData("QR123456 - Bin Location: Sector 21, Capacity: 80%");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQrData("");
      setComplaint("");
    }, 2000);
  };

  return (
    <div className="max-w-xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center">
        <AlertTriangle className="mr-2" /> Submit Complaint
      </h2>
      <div className="mb-4">
        <button
          onClick={handleScan}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <QrCode className="mr-2" /> Scan QR Code
        </button>
        {qrData && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800">
            <strong>QR Data:</strong> {qrData}
          </div>
        )}
      </div>
      {qrData && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-700 font-medium mb-1">
              Complaint Description
            </label>
            <textarea
              className="w-full border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows={3}
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700"
            disabled={submitted}
          >
            {submitted ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>
      )}
      {submitted && (
        <div className="mt-4 text-green-700 font-semibold">
          Complaint submitted successfully!
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("service");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Sidebar */}
      <aside className="w-64 bg-green-100 border-r border-green-200 flex flex-col">
        <div className="flex items-center px-6 py-6">
          <Truck className="text-green-600 mr-2" size={28} />
          <span className="font-bold text-2xl text-green-700 tracking-wide">
            CleanSweep
          </span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1 mt-2">
            <li>
              <button
                className={`w-full flex items-center px-6 py-3 rounded-lg font-semibold ${
                  activeTab === "service"
                    ? "bg-green-200 text-green-800"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => setActiveTab("service")}
              >
                <ToggleLeft className="mr-3 h-5 w-5" />
                Service Option
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center px-6 py-3 rounded-lg font-semibold ${
                  activeTab === "training"
                    ? "bg-green-200 text-green-800"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => setActiveTab("training")}
              >
                <BookOpen className="mr-3 h-5 w-5" />
                Training
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center px-6 py-3 rounded-lg font-semibold ${
                  activeTab === "complaint"
                    ? "bg-green-200 text-green-800"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => setActiveTab("complaint")}
              >
                <AlertTriangle className="mr-3 h-5 w-5" />
                Complaint
              </button>
            </li>
          </ul>
        </nav>
        <div className="px-6 py-4 border-t border-green-200">
          <button className="flex items-center text-red-600 hover:text-red-800 font-medium">
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-10 px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between w-full max-w-5xl mb-8">
          <div>
            <h1 className="text-3xl font-bold text-green-700">Driver Dashboard</h1>
            <div className="text-green-500 text-sm mt-1">
              Welcome back, <span className="font-semibold">{driverData.name}</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <Search className="w-5 h-5 text-green-400 absolute left-3 top-2.5" />
              <input
                className="border border-green-300 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400"
                type="text"
                placeholder="Search dashboard..."
              />
            </div>
            <button className="bg-green-600 text-white px-3 py-2 rounded-lg flex items-center hover:bg-green-700 transition">
              <MessagesSquare className="h-4 w-4 mr-1" /> Messages
            </button>
            <button className="bg-green-600 text-white px-3 py-2 rounded-lg flex items-center hover:bg-green-700 transition">
              <HelpCircle className="h-4 w-4 mr-1" /> Help
            </button>
            <button className="bg-green-600 text-white px-3 py-2 rounded-lg flex items-center hover:bg-green-700 transition">
              <User className="h-4 w-4 mr-1" /> Profile
            </button>
          </div>
        </div>
        {/* Main Section */}
        <div className="w-full max-w-5xl mb-8">
          {activeTab === "service" && <ServiceToggle driver={driverData} />}
          {activeTab === "training" && <Training />}
          {activeTab === "complaint" && <Complaint />}
        </div>
        {/* Driver Overview */}
        <section className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border border-green-100">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4 shadow">
            <User className="w-10 h-10 text-green-500" />
          </div>
          <div className="text-center mb-3">
            <span className="font-bold text-2xl text-green-800">{driverData.name}</span>
            <div className="text-sm text-green-500">{driverData.role}</div>
          </div>
          <div className="flex items-center justify-center mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" fill="currentColor" />
            ))}
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-green-700 ml-2 font-bold">{driverData.rating}</span>
          </div>
        </section>
      </main>
    </div>
  );
}