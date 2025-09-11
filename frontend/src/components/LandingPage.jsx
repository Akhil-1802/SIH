import React, { useState } from 'react';
import { User, Settings, Truck, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import PublicLoginRegistrationPage from '../pages/User/PublicLoginRegistrationPage';

export default function LandingPage() {
  const [login,setLogin] = useState(false)
  const onclose = () =>{
      setLogin(false)
  }
  return (
  
    <div className="min-h-screen bg-gray-50">
      {
        login &&
        <PublicLoginRegistrationPage onClose={onclose} />
      }
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">✱ logo</span>
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
                Welcome to<br/>
                CleanSweep: Smart<br/>
                Waste Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Revolutionizing waste management with intelligent solutions for a cleaner, greener future. Discover how you fit into our efficient and sustainable ecosystem.
              </p>
            </div>

            
            <div className="relative">
              <div className="rounded-2xl h-64 lg:h-80 relative overflow-hidden shadow-lg border-4 border-white">
                <video
                  src="/src/assets/Waste.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                ></video>
                
                {/* Simple subtle overlay */}
                <div className="absolute inset-0 ring-2 ring-green-500/20 rounded-2xl"></div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* User Card */}
            <div className="bg-white rounded-lg p-12 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">User</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Access personalized waste collection schedules, manage your profile, and receive notifications for optimal service.
              </p>
              <button onClick={() => {setLogin(true)}}  className="w-full bg-green-600 text-white py-4 rounded-md hover:bg-green-700 transition-colors text-lg">
                Join as a User
              </button>
            </div>
            
            {/* Admin Card */}
            <div className="bg-white rounded-lg p-12 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Admin</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Oversee operations, manage resources, and analyze data to optimize routes and improve efficiency across the platform.
              </p>
              <button className="w-full bg-green-600 text-white py-4 rounded-md hover:bg-green-700 transition-colors text-lg">
                Access Admin Panel
              </button>
            </div>
            
            {/* Driver Card */}
            <div className="bg-white rounded-lg p-12 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Driver</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Navigate optimized routes, report collection status, and ensure timely service with our intuitive driver interface.
              </p>
              <button className="w-full bg-green-600 text-white py-4 rounded-md hover:bg-green-700 transition-colors text-lg">
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