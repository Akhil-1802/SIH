import React from "react";
import {
  User,
  Settings,
  Truck,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Leaf,
  Recycle,
  Globe,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function LandingPageModern() {
  const navigate = useNavigate();
  const handleJoinUser = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {" "}
      {/* Header */}{" "}
      <header className="backdrop-blur-md bg-white/80 border-b border-white/20 sticky top-0 z-50">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="flex justify-between items-center h-20">
            {" "}
            <div className="flex items-center space-x-3">
              {" "}
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                {" "}
                <Recycle className="w-6 h-6 text-white" />{" "}
              </div>{" "}
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                CleanSweep{" "}
              </span>{" "}
            </div>{" "}
            <nav className="hidden md:flex space-x-8">
              {" "}
              <a
                href="#features"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Features
              </a>{" "}
              <a
                href="#about"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                About
              </a>{" "}
              <a
                href="#contact"
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                Contact
              </a>{" "}
            </nav>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
      {/* Hero Section */}{" "}
      <section className="relative py-20 overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>{" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {" "}
            <div className="space-y-8">
              {" "}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium">
                {" "}
                <Leaf className="w-4 h-4 mr-2" /> Smart Waste Management{" "}
              </div>{" "}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                {" "}
                <span className="text-gray-900">Transform</span> <br />{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {" "}
                  Waste Management{" "}
                </span>{" "}
                <br /> <span className="text-gray-900">for Tomorrow</span>{" "}
              </h1>{" "}
              <p className="text-xl text-gray-600 leading-relaxed">
                {" "}
                Join the revolution in sustainable waste management. Our
                AI-powered platform connects communities, optimizes routes, and
                creates a cleaner future for everyone.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row gap-4">
                {" "}
                <button
                  onClick={handleJoinUser}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  {" "}
                  Get Started{" "}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />{" "}
                </button>{" "}
                <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-colors">
                  {" "}
                  Learn More{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-3xl opacity-20"></div>{" "}
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                {" "}
                <video
                  src="/src/assets/Waste.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Stats Section */}{" "}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="text-center">
              {" "}
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                10K+
              </div>{" "}
              <div className="text-gray-600">Active Users</div>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                95%
              </div>{" "}
              <div className="text-gray-600">Efficiency Rate</div>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                50+
              </div>{" "}
              <div className="text-gray-600">Cities Served</div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Role Selection */}{" "}
      <section className="py-20">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {" "}
              Choose Your Journey{" "}
            </h2>{" "}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {" "}
              Whether you're a resident, administrator, or driver, we have the
              perfect tools to help you contribute to a sustainable future.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {/* User Card */}{" "}
            <div className="group relative">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>{" "}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-emerald-200">
                {" "}
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {" "}
                  <User className="w-8 h-8 text-white" />{" "}
                </div>{" "}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Resident
                </h3>{" "}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {" "}
                  Schedule pickups, track collections, and receive smart
                  notifications for seamless waste management at your doorstep.{" "}
                </p>{" "}
                <button
                  onClick={handleJoinUser}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  {" "}
                  Join as Resident{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            {/* Admin Card */}{" "}
            <div className="group relative">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>{" "}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200">
                {" "}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {" "}
                  <Settings className="w-8 h-8 text-white" />{" "}
                </div>{" "}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Administrator
                </h3>{" "}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {" "}
                  Monitor operations, analyze data, and optimize city-wide waste
                  management with powerful administrative tools.{" "}
                </p>{" "}
                <button onClick={() => {
                    navigate("/adminlogin");
                  }} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  {" "}
                  Access Admin Panel{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            {/* Driver Card */}{" "}
            <div className="group relative">
              {" "}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>{" "}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-orange-200">
                {" "}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {" "}
                  <Truck className="w-8 h-8 text-white" />{" "}
                </div>{" "}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Driver
                </h3>{" "}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {" "}
                  Navigate smart routes, update collection status, and ensure
                  efficient service delivery with our driver-focused interface.{" "}
                </p>{" "}
                <button
                  onClick={() => {
                    navigate("/driverlogin");
                  }}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  {" "}
                  Start Driving{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Features Section */}{" "}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose CleanSweep?
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="text-center">
              {" "}
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {" "}
                <Globe className="w-8 h-8 text-emerald-600" />{" "}
              </div>{" "}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Smart Routing
              </h3>{" "}
              <p className="text-gray-600">
                AI-powered route optimization reduces fuel consumption and
                improves efficiency.
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {" "}
                <Recycle className="w-8 h-8 text-emerald-600" />{" "}
              </div>{" "}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Eco-Friendly
              </h3>{" "}
              <p className="text-gray-600">
                Promote recycling and sustainable practices for a greener
                tomorrow.
              </p>{" "}
            </div>{" "}
            <div className="text-center">
              {" "}
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {" "}
                <Leaf className="w-8 h-8 text-emerald-600" />{" "}
              </div>{" "}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-time Tracking
              </h3>{" "}
              <p className="text-gray-600">
                Monitor collections in real-time with live updates and
                notifications.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Footer */}{" "}
      <footer className="bg-gray-900 text-white">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {" "}
            <div className="col-span-1 md:col-span-2">
              {" "}
              <div className="flex items-center space-x-3 mb-6">
                {" "}
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  {" "}
                  <Recycle className="w-5 h-5 text-white" />{" "}
                </div>{" "}
                <span className="text-xl font-bold">CleanSweep</span>{" "}
              </div>{" "}
              <p className="text-gray-400 mb-6 max-w-md">
                {" "}
                Transforming waste management through intelligent technology and
                sustainable practices.{" "}
              </p>{" "}
              <div className="flex space-x-4">
                {" "}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  {" "}
                  <Facebook className="w-5 h-5" />{" "}
                </a>{" "}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  {" "}
                  <Twitter className="w-5 h-5" />{" "}
                </a>{" "}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  {" "}
                  <Linkedin className="w-5 h-5" />{" "}
                </a>{" "}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  {" "}
                  <Instagram className="w-5 h-5" />{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="font-semibold mb-4">Company</h4>{" "}
              <ul className="space-y-2 text-gray-400">
                {" "}
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            <div>
              {" "}
              <h4 className="font-semibold mb-4">Support</h4>{" "}
              <ul className="space-y-2 text-gray-400">
                {" "}
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            {" "}
            <p>&copy; 2024 CleanSweep. All rights reserved.</p>{" "}
          </div>{" "}
        </div>{" "}
      </footer>{" "}
         
    </div>
  );
}
