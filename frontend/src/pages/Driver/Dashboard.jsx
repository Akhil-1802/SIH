import React, { useState, useEffect } from "react";
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
  FileText,
  Clock,
  Menu,
  X,
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

// Dummy issued problems data
const issuedProblems = [
  {
    id: 1,
    title: "Overflowing Bin - Sector 15",
    description: "Waste bin at Sector 15, Block A is overflowing and needs immediate attention.",
    status: "Pending",
    priority: "High",
    reportedAt: "2024-01-15 09:30 AM",
  },
  {
    id: 2,
    title: "Damaged Collection Vehicle",
    description: "Vehicle #WM-101 has a damaged hydraulic system affecting waste collection.",
    status: "In Progress",
    priority: "Medium",
    reportedAt: "2024-01-14 02:15 PM",
  },
  {
    id: 3,
    title: "Missed Collection - Residential Area",
    description: "Waste collection was missed in Green Valley residential complex yesterday.",
    status: "Resolved",
    priority: "Low",
    reportedAt: "2024-01-13 11:45 AM",
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
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-700 flex items-center">
        <BookOpen className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Training Modules
      </h2>
      <ul className="space-y-3 sm:space-y-4">
        {modules.map((module) => (
          <li
            key={module.id}
            className={`p-3 sm:p-4 rounded-xl border ${
              module.completed
                ? "bg-green-50 border-green-200"
                : "bg-white border-green-100"
            } flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4`}
          >
            <div className="flex-1">
              <div className="font-semibold text-green-800 text-sm sm:text-base">{module.title}</div>
              <div className="text-xs sm:text-sm text-green-600 mt-1">{module.description}</div>
            </div>
            <button
              disabled={module.completed}
              onClick={() => handleComplete(module.id)}
              className={`px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm sm:text-base whitespace-nowrap ${
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

// Issued Problems component
function IssuedProblems() {
  const [problems] = useState(issuedProblems);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending": return "bg-red-50 border-red-200 text-red-800";
      case "In Progress": return "bg-yellow-50 border-yellow-200 text-yellow-800";
      case "Resolved": return "bg-green-50 border-green-200 text-green-800";
      default: return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "text-red-600";
      case "Medium": return "text-yellow-600";
      case "Low": return "text-green-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-700 flex items-center">
        <FileText className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Issued Problems
      </h2>
      <div className="space-y-3 sm:space-y-4">
        {complaint.length == 0 ? (
          <div className="text-center py-8 text-gray-500">
            No problems assigned yet
          </div>
        ) : (
          complaint.map((problem) => (
            <div
              key={problem._id}
              className={`p-3 sm:p-4 rounded-xl border ${getStatusColor(problem.status)} transition-all hover:shadow-md`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <h3 className="font-semibold text-base sm:text-lg">{problem.title}</h3>
                    <span className={`text-xs sm:text-sm font-medium ${getPriorityColor(problem.priority)} self-start`}>
                      {problem.priority} Priority
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm mb-3 opacity-80">{problem.description}</p>
                  <div className="flex items-center text-xs opacity-70">
                    <Clock className="w-3 h-3 mr-1" />
                    Reported: {problem.reportedAt}
                  </div>
                </div>
                <div className="self-start sm:ml-4">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(problem.status)}`}>
                    {problem.status}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
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
    <div className="max-w-2xl mx-auto w-full">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-green-700 flex items-center">
        <AlertTriangle className="mr-2 w-5 h-5 sm:w-6 sm:h-6" /> Submit Complaint
      </h2>
      <div className="mb-4 sm:mb-6">
        <button
          onClick={handleScan}
          className="flex items-center px-4 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          <QrCode className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Scan QR Code
        </button>
        {qrData && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm sm:text-base">
            <strong>QR Data:</strong> {qrData}
          </div>
        )}
      </div>
      {qrData && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-green-700 font-medium mb-2 text-sm sm:text-base">
              Complaint Description
            </label>
            <textarea
              className="w-full border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm sm:text-base"
              rows={4}
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              placeholder="Describe the issue in detail..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-600 text-white px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-700 text-sm sm:text-base"
            disabled={submitted}
          >
            {submitted ? "Submitting..." : "Submit Complaint"}
          </button>
        </form>
      )}
      {submitted && (
        <div className="mt-4 text-green-700 font-semibold text-sm sm:text-base">
          Complaint submitted successfully!
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [complaint, setComplaint] = useState([]);
    const getComplaints = async () => {
      try {
        const respone = await fetch("http://localhost:3000/admin/complaintsAssigned");
        const data = await respone.json();
        console.log(data);
        setComplaint(data);
      } catch (error) {}
    };
    useEffect(() => {
      getComplaints();
    }, []);
  const [activeTab, setActiveTab] = useState("service");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded-lg shadow-lg"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-green-100 border-r border-green-200 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center px-4 sm:px-6 py-4 sm:py-6">
          <Truck className="text-green-600 mr-2" size={24} />
          <span className="font-bold text-xl sm:text-2xl text-green-700 tracking-wide">
            CleanSweep
          </span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1 mt-2 px-2">
            <li>
              <button
                className={`w-full flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base ${
                  activeTab === "service"
                    ? "bg-green-200 text-green-800"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => {
                  setActiveTab("service");
                  setSidebarOpen(false);
                }}
              >
                <ToggleLeft className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="truncate">Service Option</span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base ${
                  activeTab === "training"
                    ? "bg-green-200 text-green-800"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => {
                  setActiveTab("training");
                  setSidebarOpen(false);
                }}
              >
                <BookOpen className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="truncate">Training</span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base ${
                  activeTab === "complaint"
                    ? "bg-green-200 text-green-800"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => {
                  setActiveTab("complaint");
                  setSidebarOpen(false);
                }}
              >
                <AlertTriangle className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="truncate">Complaint</span>
              </button>
            </li>
            <li>
              <button
                className={`w-full flex items-center px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base ${
                  activeTab === "problems"
                    ? "bg-green-200 text-green-800"
                    : "text-green-700 hover:bg-green-50"
                }`}
                onClick={() => {
                  setActiveTab("problems");
                  setSidebarOpen(false);
                }}
              >
                <FileText className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="truncate">Issued Problems</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="px-4 sm:px-6 py-4 border-t border-green-200">
          <button className="flex items-center text-red-600 hover:text-red-800 font-medium text-sm sm:text-base">
            <LogOut className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Logout
          </button>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-4 sm:pt-10 px-4 sm:px-8 ml-0 lg:ml-0">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full max-w-5xl mb-6 sm:mb-8 gap-4">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-green-700">Driver Dashboard</h1>
            <div className="text-green-500 text-sm mt-1">
              Welcome back, <span className="font-semibold">{driverData.name}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center w-full sm:w-auto">
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 absolute left-3 top-2.5" />
              <input
                className="border border-green-300 rounded-full pl-8 sm:pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-auto"
                type="text"
                placeholder="Search..."
              />
            </div>
            <button className="bg-green-600 text-white px-2 sm:px-3 py-2 rounded-lg flex items-center hover:bg-green-700 transition text-sm">
              <MessagesSquare className="h-4 w-4 sm:mr-1" /> <span className="hidden sm:inline">Messages</span>
            </button>
            <button className="bg-green-600 text-white px-2 sm:px-3 py-2 rounded-lg flex items-center hover:bg-green-700 transition text-sm">
              <HelpCircle className="h-4 w-4 sm:mr-1" /> <span className="hidden sm:inline">Help</span>
            </button>
            <button className="bg-green-600 text-white px-2 sm:px-3 py-2 rounded-lg flex items-center hover:bg-green-700 transition text-sm">
              <User className="h-4 w-4 sm:mr-1" /> <span className="hidden sm:inline">Profile</span>
            </button>
          </div>
        </div>
        {/* Main Section */}
        <div className="w-full max-w-5xl mb-6 sm:mb-8">
          {activeTab === "service" && <ServiceToggle driver={driverData} />}
          {activeTab === "training" && <Training />}
          {activeTab === "complaint" && <Complaint />}
          {activeTab === "problems" && <IssuedProblems />}
        </div>
        {/* Driver Overview */}
        <section className="w-full max-w-sm sm:max-w-md bg-white rounded-xl shadow-lg p-4 sm:p-8 flex flex-col items-center border border-green-100">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 flex items-center justify-center mb-4 shadow">
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
          </div>
          <div className="text-center mb-3">
            <span className="font-bold text-xl sm:text-2xl text-green-800">{driverData.name}</span>
            <div className="text-sm text-green-500">{driverData.role}</div>
          </div>
          <div className="flex items-center justify-center mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400" fill="currentColor" />
            ))}
            <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            <span className="text-green-700 ml-2 font-bold text-sm sm:text-base">{driverData.rating}</span>
          </div>
        </section>
      </main>
    </div>
  );
}