import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-2">
      <form
        className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 sm:p-10 border-2 border-green-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6 text-green-700 border-b-2 border-green-200 pb-2 text-center">
          Registration
        </h2>
        {/* Grid layout for fields */}
        <div
          className={`grid ${
            isSmallScreen ? "grid-cols-1" : "grid-cols-2"
          } gap-5`}
        >
          <div>
            <label className="block font-semibold mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="username">
              Username
            </label>
            <input
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="Aadhar number">
              Aadhar number
            </label>
            <input
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
              type="Aadhar number"
              name="Aadhar number"
              id="Aadhar number"
              placeholder="Enter your Aadhar number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block font-semibold mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full border border-green-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        {/* Gender Radios */}
        <div className="mt-6">
          <label className="font-semibold mb-2 block text-green-700">
            Gender
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                className="accent-green-500"
              />
              <span className="text-green-700">Male</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                className="accent-green-500"
              />
              <span className="text-green-700">Female</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="na"
                checked={gender === "na"}
                onChange={(e) => setGender(e.target.value)}
                className="accent-green-500"
              />
              <span className="text-green-700">Prefer not to say</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mt-8 w-full py-3 rounded-md font-semibold bg-gradient-to-r bg-green-600 text-white text-lg shadow-md hover:opacity-90 transition"
        >
          Register
        </button>
        {showSuccess && (
          <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl px-8 py-10 flex flex-col items-center border-2 border-green-400">
              <svg
                className="mb-4 text-green-600"
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path
                  d="M8 12l2 2 4-4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Registration Successful!
              </h3>
              <p className="text-green-600 text-center">
                Redirecting to login...
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
