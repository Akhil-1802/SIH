import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, Phone, Users, X } from 'lucide-react';

const PublicLoginRegistrationPage = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    familyMember: {
      firstName: '',
      lastName: '',
      relationship: '',
      dateOfBirth: '',
      phone: '',
      address: ''
    }
  });

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleFamilyMemberChange = (e) => {
    setRegistrationData({
      ...registrationData,
      familyMember: { ...registrationData.familyMember, [e.target.name]: e.target.value }
    });
  };

  const handleLoginSubmit = () => {
    console.log('Login data:', loginData);
    // Handle login logic here
  };

  const handleRegistrationSubmit = () => {
    if (registrationData.password !== registrationData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registration data:', registrationData);
    // Handle registration logic here
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setLoginData({ email: '', password: '' });
    setRegistrationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      familyMember: {
        firstName: '',
        lastName: '',
        relationship: '',
        dateOfBirth: '',
        phone: '',
        address: ''
      }
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-xl p-6 shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? 'Sign in to your account' : 'Join our community today'}
        </h2>

        {isLogin ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLoginSubmit();
            }}
          >
            <div className="mb-4">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Mail size={16} />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Lock size={16} />
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm pr-10 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Sign In
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button onClick={toggleForm} className="font-medium text-indigo-600 hover:text-indigo-500">
                Register
              </button>
            </p>
          </form>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegistrationSubmit();
            }}
          >
            {/* Personal Info */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User size={16} />
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={registrationData.firstName}
                  onChange={handleRegistrationChange}
                  required
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User size={16} />
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={registrationData.lastName}
                  onChange={handleRegistrationChange}
                  required
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Mail size={16} />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={registrationData.email}
                onChange={handleRegistrationChange}
                required
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Phone size={16} />
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={registrationData.phone}
                onChange={handleRegistrationChange}
                className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Lock size={16} />
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={registrationData.password}
                    onChange={handleRegistrationChange}
                    required
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm pr-10 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Lock size={16} />
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={registrationData.confirmPassword}
                    onChange={handleRegistrationChange}
                    required
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm pr-10 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Family Member Info */}
            <fieldset className="mb-6 border border-gray-300 p-4 rounded-md">
              <legend className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
                <Users size={18} />
                Family Member Information
              </legend>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="familyFirstName" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="familyFirstName"
                    name="firstName"
                    type="text"
                    value={registrationData.familyMember.firstName}
                    onChange={handleFamilyMemberChange}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="familyLastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="familyLastName"
                    name="lastName"
                    type="text"
                    value={registrationData.familyMember.lastName}
                    onChange={handleFamilyMemberChange}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="relationship" className="text-sm font-medium text-gray-700">
                    Relationship
                  </label>
                  <input
                    id="relationship"
                    name="relationship"
                    type="text"
                    value={registrationData.familyMember.relationship}
                    onChange={handleFamilyMemberChange}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="dob" className="text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    name="dateOfBirth"
                    type="date"
                    value={registrationData.familyMember.dateOfBirth}
                    onChange={handleFamilyMemberChange}
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="familyPhone" className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="familyPhone"
                  name="phone"
                  type="tel"
                  value={registrationData.familyMember.phone}
                  onChange={handleFamilyMemberChange}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="familyAddress" className="text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="familyAddress"
                  name="address"
                  rows={2}
                  value={registrationData.familyMember.address}
                  onChange={handleFamilyMemberChange}
                  className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </fieldset>

            <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
              Register
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button onClick={toggleForm} className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign In
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default PublicLoginRegistrationPage;
