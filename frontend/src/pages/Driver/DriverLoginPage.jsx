import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Truck, 
  IdCard,
  UserPlus,
  CheckCircle,
  AlertCircle,
  Fingerprint,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DriverLoginRegistrationPage({ isOpen, onClose, isLogin = true }) {
  const [isLoginMode, setIsLoginMode] = useState(isLogin);
  const [loginMethod, setLoginMethod] = useState('credentials');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    driverId: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    username: '',
    govId: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.driverId.trim()) newErrors.driverId = 'Driver ID is required';
    if (!loginData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!registerData.name.trim()) newErrors.name = 'Name is required';
    if (!registerData.username.trim()) newErrors.username = 'Username is required';
    if (!registerData.govId.trim()) newErrors.govId = 'Government ID is required';
    if (registerData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLoginMode && !validateLogin()) return;
    if (!isLoginMode && !validateRegister()) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/driverdashboard');
    }, 2000);
  };

  const handleBiometricLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/driverdashboard');
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black/60 via-green-900/20 to-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-green-100/50 max-w-md w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green-100/50 bg-gradient-to-r from-green-50/80 to-teal-50/80">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">CleanSweep</span>
              <p className="text-sm text-green-600 font-medium">Driver Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-green-100 rounded-xl transition-all duration-200 group"
          >
            <X className="w-5 h-5 text-gray-500 group-hover:text-green-600" />
          </button>
        </div>

        <div className="p-6">
          {/* Mode Toggle */}
          <div className="flex space-x-1 mb-6 bg-gradient-to-r from-green-50 to-teal-50 p-1 rounded-xl border border-green-100">
            <button
              onClick={() => setIsLoginMode(true)}
              className={`flex-1 py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-200 ${
                isLoginMode
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg transform scale-105'
                  : 'text-green-600 hover:text-green-700 hover:bg-white/50'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              className={`flex-1 py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-200 ${
                !isLoginMode
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg transform scale-105'
                  : 'text-green-600 hover:text-green-700 hover:bg-white/50'
              }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {isLoginMode ? (
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">Welcome Back!</h2>
                <p className="text-green-600">Sign in to start your route</p>
              </div>

              {/* Login Method Selector */}
              <div className="flex space-x-2 mb-6 bg-gradient-to-r from-green-50 to-teal-50 p-1 rounded-xl border border-green-100">
                <button
                  onClick={() => setLoginMethod('credentials')}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    loginMethod === 'credentials'
                      ? 'bg-white text-green-700 shadow-md border border-green-200'
                      : 'text-green-600 hover:text-green-700 hover:bg-white/50'
                  }`}
                >
                  Password
                </button>
                <button
                  onClick={() => setLoginMethod('biometric')}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    loginMethod === 'biometric'
                      ? 'bg-white text-green-700 shadow-md border border-green-200'
                      : 'text-green-600 hover:text-green-700 hover:bg-white/50'
                  }`}
                >
                  Biometric
                </button>
              </div>

              {loginMethod === 'credentials' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* ...existing login fields... */}
                  {/* ...no changes here... */}
                  {/* ...keep your login form code as is... */}
                  {/* ... */}
                  <div>
                    <label className="block text-sm font-semibold text-green-700 mb-2">Driver ID</label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-green-600" />
                      </div>
                      <input
                        type="text"
                        name="driverId"
                        value={loginData.driverId}
                        onChange={handleLoginChange}
                        placeholder="Enter your Driver ID"
                        className={`pl-12 pr-4 py-3 w-full rounded-xl border-2 bg-white/80 backdrop-blur-sm ${
                          errors.driverId ? 'border-red-300 bg-red-50/50' : 'border-green-200 hover:border-green-300'
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200`}
                        required
                      />
                    </div>
                    {errors.driverId && (
                      <p className="mt-2 text-sm text-red-600 flex items-center bg-red-50 p-2 rounded-lg">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.driverId}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-green-700 mb-2">Password</label>
                    <div className="relative">
                      <div className="absolute left-3 top-3 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                        <Lock className="w-3 h-3 text-green-600" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        placeholder="Enter your password"
                        className={`pl-12 pr-12 py-3 w-full rounded-xl border-2 bg-white/80 backdrop-blur-sm ${
                          errors.password ? 'border-red-300 bg-red-50/50' : 'border-green-200 hover:border-green-300'
                        } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200`}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 p-1 text-green-600 hover:text-green-700 hover:bg-green-100 rounded-full transition-all duration-200"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600 flex items-center bg-red-50 p-2 rounded-lg">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/25 hover:from-green-700 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Sign In</span>
                      </div>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <Fingerprint className="w-12 h-12 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Biometric Authentication</h3>
                    <p className="text-green-600 text-sm">Use your fingerprint or face ID to sign in securely</p>
                  </div>
                  <button
                    onClick={handleBiometricLogin}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Authenticating...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Fingerprint className="w-5 h-5" />
                        <span>Authenticate</span>
                      </div>
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Registration Form */
            <>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">Join Our Team</h2>
                <p className="text-green-600">Register as a CleanSweep driver</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ...existing registration fields... */}
                {/* ...no changes here... */}
                {/* ...keep your registration form code as is... */}
                {/* ... */}
                <div>
                  <label className="block text-sm font-semibold text-green-700 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-green-600" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={registerData.name}
                      onChange={handleRegisterChange}
                      placeholder="Enter your full name"
                      className={`pl-12 pr-4 py-3 w-full rounded-xl border-2 bg-white/80 backdrop-blur-sm ${
                        errors.name ? 'border-red-300 bg-red-50/50' : 'border-green-200 hover:border-green-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200`}
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center bg-red-50 p-2 rounded-lg">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-green-700 mb-2">Username</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-green-600" />
                    </div>
                    <input
                      type="text"
                      name="username"
                      value={registerData.username}
                      onChange={handleRegisterChange}
                      placeholder="Choose a username"
                      className={`pl-12 pr-4 py-3 w-full rounded-xl border-2 bg-white/80 backdrop-blur-sm ${
                        errors.username ? 'border-red-300 bg-red-50/50' : 'border-green-200 hover:border-green-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200`}
                      required
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-600 flex items-center bg-red-50 p-2 rounded-lg">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.username}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-green-700 mb-2">Government ID</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <IdCard className="w-3 h-3 text-green-600" />
                    </div>
                    <input
                      type="text"
                      name="govId"
                      value={registerData.govId}
                      onChange={handleRegisterChange}
                      placeholder="Enter your Aadhaar/License number"
                      className={`pl-12 pr-4 py-3 w-full rounded-xl border-2 bg-white/80 backdrop-blur-sm ${
                        errors.govId ? 'border-red-300 bg-red-50/50' : 'border-green-200 hover:border-green-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200`}
                      required
                    />
                  </div>
                  {errors.govId && (
                    <p className="mt-2 text-sm text-red-600 flex items-center bg-red-50 p-2 rounded-lg">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.govId}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-green-700 mb-2">Password</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Lock className="w-3 h-3 text-green-600" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={registerData.password}
                      onChange={handleRegisterChange}
                      placeholder="Create a password"
                      className={`pl-12 pr-12 py-3 w-full rounded-xl border-2 bg-white/80 backdrop-blur-sm ${
                        errors.password ? 'border-red-300 bg-red-50/50' : 'border-green-200 hover:border-green-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 p-1 text-green-600 hover:text-green-700 hover:bg-green-100 rounded-full transition-all duration-200"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 flex items-center bg-red-50 p-2 rounded-lg">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-green-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Lock className="w-3 h-3 text-green-600" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={registerData.confirmPassword}
                      onChange={handleRegisterChange}
                      placeholder="Confirm your password"
                      className={`pl-12 pr-12 py-3 w-full rounded-xl border-2 bg-white/80 backdrop-blur-sm ${
                        errors.confirmPassword ? 'border-red-300 bg-red-50/50' : 'border-green-200 hover:border-green-300'
                      } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 p-1 text-green-600 hover:text-green-700 hover:bg-green-100 rounded-full transition-all duration-200"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600 flex items-center bg-red-50 p-2 rounded-lg">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/25 hover:from-green-700 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Creating Account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <UserPlus className="w-5 h-5" />
                      <span>Register</span>
                    </div>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

