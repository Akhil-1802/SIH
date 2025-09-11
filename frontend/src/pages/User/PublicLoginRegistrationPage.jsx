"use client";

import { useState } from "react";
import { X, User, Users, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PublicLoginRegistrationPage = ({
  isOpen,
  onClose,
  isLogin: initialIsLogin = true,
}) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [loginMethod, setLoginMethod] = useState("aadhaar");
  const [registrationMethod, setRegistrationMethod] = useState("aadhaar");

  const [loginData, setLoginData] = useState({
    aadhaar: "",
    familyId: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    aadhaar: "",
    familyId: "",
    phone: "",
    address: "",
  });

  const [familyMembers, setFamilyMembers] = useState([
    { name: "", age: "", relation: "", aadhaar: "" },
  ]);

  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    if(loginMethod == "aadhaar"){
      console.log(loginData)
      const response = await fetch(
          `http://localhost:3000/user/loginAadhaar`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );
        if(response.ok){
          navigate("/userdashboard")
        }
        else{
          const data = await response.json()
          console.log(data.message)
        }
    }
    else {
      
      const response = await fetch(
          `http://localhost:3000/user/loginFamilyID`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
          }
        );
        if(response.ok){
          navigate("/userdashboard")
        }
        else{
          const data = await response.json()
          console.log(data.message)
        }
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      if (registrationMethod == "aadhaar") {
        const newData = { ...formData, familyMembers };
        const response = await fetch(
          `http://localhost:3000/user/registerAadhar`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          }
        );
        if (response.ok) {
          alert("Registered!")
          setIsLogin(true)
        } else {
          const data = await response.json();
          alert(data.message);
        }
      } else {
        const newData = { ...formData, familyMembers };
        const response = await fetch(
          `http://localhost:3000/user/registerFamilyID`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          }
        );
        if (response.ok) {
        alert("Registered!")
          setIsLogin(true)
        } else {
          const data = await response.json();
          alert(data.message);
        }
      }
    } catch (error) {}
  };

  const handleLoginInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][field] = value;
    setFamilyMembers(updatedMembers);
  };

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      { name: "", age: "", relation: "", aadhaar: "" },
    ]);
  };

  const removeFamilyMember = (index) => {
    if (familyMembers.length > 1) {
      const updatedMembers = familyMembers.filter((_, i) => i !== index);
      setFamilyMembers(updatedMembers);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 pb-0">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                isLogin
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                !isLogin
                  ? "bg-white text-green-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Register
            </button>
          </div>
        </div>

        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="p-6 space-y-4">
            <div className="flex bg-green-50 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setLoginMethod("aadhaar")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  loginMethod === "aadhaar"
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-green-700 hover:text-green-900"
                }`}
              >
                Aadhaar Login
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod("family")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  loginMethod === "family"
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-green-700 hover:text-green-900"
                }`}
              >
                Family ID Login
              </button>
            </div>

            {loginMethod === "aadhaar" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  name="aadhaar"
                  value={loginData.aadhaar}
                  onChange={handleLoginInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your 12-digit Aadhaar number"
                  maxLength="12"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Family ID
                </label>
                <input
                  type="text"
                  name="familyId"
                  value={loginData.familyId}
                  onChange={handleLoginInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your Family ID"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-md hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-lg"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegistrationSubmit} className="p-6 space-y-4">
            <div className="flex bg-green-50 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setRegistrationMethod("aadhaar")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  registrationMethod === "aadhaar"
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-green-700 hover:text-green-900"
                }`}
              >
                Aadhaar Registration
              </button>
              <button
                type="button"
                onClick={() => setRegistrationMethod("family")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  registrationMethod === "family"
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-green-700 hover:text-green-900"
                }`}
              >
                Family ID Registration
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {registrationMethod === "aadhaar" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Aadhaar Number
                </label>
                <input
                  type="text"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  maxLength="12"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Family ID
                </label>
                <input
                  type="text"
                  name="familyId"
                  value={formData.familyId}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              />
            </div>

            {/* Family Members Section */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-medium text-gray-900">
                    Family Members
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={addFamilyMember}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  Add Member
                </button>
              </div>

              {familyMembers.map((member, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 mb-3 bg-gray-50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-700">
                      Member {index + 1}
                    </h4>
                    {familyMembers.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFamilyMember(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) =>
                          handleFamilyMemberChange(
                            index,
                            "name",
                            e.target.value
                          )
                        }
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Age
                      </label>
                      <input
                        type="number"
                        value={member.age}
                        onChange={(e) =>
                          handleFamilyMemberChange(index, "age", e.target.value)
                        }
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="Age"
                        min="0"
                        max="120"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Relation
                      </label>
                      <select
                        value={member.relation}
                        onChange={(e) =>
                          handleFamilyMemberChange(
                            index,
                            "relation",
                            e.target.value
                          )
                        }
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                      >
                        <option value="">Select relation</option>
                        <option value="spouse">Spouse</option>
                        <option value="child">Child</option>
                        <option value="parent">Parent</option>
                        <option value="sibling">Sibling</option>
                        <option value="grandparent">Grandparent</option>
                        <option value="grandchild">Grandchild</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Aadhaar Number
                      </label>
                      <input
                        type="text"
                        value={member.aadhaar}
                        onChange={(e) =>
                          handleFamilyMemberChange(
                            index,
                            "aadhaar",
                            e.target.value
                          )
                        }
                        className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                        placeholder="12-digit Aadhaar"
                        maxLength="12"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PublicLoginRegistrationPage;
