import { User, Lock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function WorkerLogin() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side Image (hidden on mobile) */}
      <div className="hidden md:block w-full my-4 mx-10 ">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Right Side: Login Box */}
      <div className="flex flex-col justify-center items-center md:items-end h-screen w-full bg-white relative">
        <div className="bg-white rounded-xl shadow-2xl px-5 py-10 md:px-10 md:py-14 max-w-md w-full flex flex-col items-center md:mr-24">
          <h2 className="text-3xl font-semibold mb-3 text-center">Worker Login</h2>
          <p className="mb-8 text-gray-500 text-center text-base">
            Access your CleanSweep worker dashboard.
          </p>
          <form className="w-full flex flex-col gap-6">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter your Worker ID"
                className="pl-11 pr-3 py-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Enter your password"
                className="pl-11 pr-3 py-3 w-full rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2.5 rounded hover:bg-green-700 transition font-bold text-lg shadow"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between w-full mt-6 text-sm">
            <a href="#" className="text-green-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mt-4 text-sm">
            <span>Don't have an account? </span>
            <a href="#" className="text-green-600 hover:underline">
              Register here.
            </a>
          </div>
        </div>
        {/* Responsive footer: inside card for mobile, at bottom for desktop */}
        <footer className="mt-5 md:mt-0 absolute md:static bottom-0 left-0 right-0 w-full py-5 flex flex-col items-center bg-transparent">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-3 text-gray-600 text-base">
            <a href="#">About</a>
            <a href="#">Resources</a>
            <a href="#">Legal</a>
          </div>
          <div className="flex gap-4 md:gap-6">
            <a href="#"><Facebook className="h-5 w-5 text-gray-700 hover:text-green-600" /></a>
            <a href="#"><Twitter className="h-5 w-5 text-gray-700 hover:text-green-600" /></a>
            <a href="#"><Instagram className="h-5 w-5 text-gray-700 hover:text-green-600" /></a>
            <a href="#"><Linkedin className="h-5 w-5 text-gray-700 hover:text-green-600" /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}
