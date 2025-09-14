import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 w-full max-w-sm sm:max-w-md border-green-200 border-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-green-700">
          Sign In to CleanSweep
        </h2>
        <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
          <input
            className="rounded-xl border border-green-200 bg-green-50 py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            placeholder="Username"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            className="rounded-xl border border-green-200 bg-green-50 py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
            type="email"
            placeholder="Aadhar Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              className="rounded-xl border border-green-200 bg-green-50 py-3 sm:py-4 px-3 sm:px-4 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400 pr-10 sm:pr-12"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
            <button
              type="button"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? (
                <svg
                  height="18"
                  width="18"
                  className="sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 1l22 22" />
                  <path d="M17.94 17.94A10 10 0 0 1 12 19c-5.523 0-10-4.5-10-7s4.477-7 10-7c2.1 0 4.073.72 5.65 1.94M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
                </svg>
              ) : (
                <svg
                  height="18"
                  width="18"
                  className="sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-3 sm:py-4 rounded-md shadow hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600 text-sm sm:text-base">Don't have an account?</span>
          <button
            type="button"
            className="ml-2 text-green-700 font-semibold hover:underline text-sm sm:text-base"
            onClick={() => navigate("/register")}
          >
            Create an account
          </button>
        </div>               
      </div>
    </div>
  );
}
