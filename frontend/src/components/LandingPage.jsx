import React from 'react';
import { User, Settings, Truck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">✱ logo</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Login</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Welcome to<br />
                CleanSweep: Smart<br />
                Waste Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Revolutionizing waste management with intelligent solutions for a cleaner, greener future. Discover how you fit into our efficient and sustainable ecosystem.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-pink-200 rounded-2xl h-64 lg:h-80 relative overflow-hidden">
                {/* Abstract wave illustration */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 400 100" className="w-full h-24">
                    <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="#10B981" opacity="0.8"/>
                    <path d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z" fill="#06B6D4" opacity="0.9"/>
                    <path d="M0,70 Q100,40 200,70 T400,70 L400,100 L0,100 Z" fill="#3B82F6" opacity="0.7"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the role that best describes you to access personalized features and contribute to a cleaner environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* User Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User</h3>
              <p className="text-gray-600 mb-6">
                Access personalized waste collection schedules, manage your profile, and receive notifications for optimal service.
              </p>
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
                Join as a User
              </button>
            </div>
            
            {/* Admin Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Admin</h3>
              <p className="text-gray-600 mb-6">
                Oversee operations, manage resources, and analyze data to optimize routes and improve efficiency across the platform.
              </p>
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
                Access Admin Panel
              </button>
            </div>
            
            {/* Driver Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Driver</h3>
              <p className="text-gray-600 mb-6">
                Navigate optimized routes, report collection status, and ensure timely service with our intuitive driver interface.
              </p>
              <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors">
                Start Driving
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Company</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}