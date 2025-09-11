import React from "react";
import {
  ToggleLeft,
  Search,
  MessagesSquare,
  HelpCircle,
  User,
  Star,
  LogOut,
  Truck,
} from "lucide-react";
import ServiceToggle from "../../components/ServiceToggle"; // Adjust path as needed

const driverData = {
  name: "Alex Johnson",
  role: "Professional Courier",
  rating: 4.8,
};

export default function Dashboard() {
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
              <button className="w-full flex items-center px-6 py-3 text-green-800 bg-green-200 rounded-lg font-semibold">
                <ToggleLeft className="mr-3 h-5 w-5" />
                Dashboard
              </button>
            </li>
            {/* Add more sidebar links here if needed */}
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
        {/* Status Card */}
        <div className="w-full max-w-5xl mb-8">
          <ServiceToggle driver={driverData} />
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