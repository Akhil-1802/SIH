import React, { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Trash2,
  Truck,
  FileText,
  MessageSquare,
  Shield,
  Menu,
  X,
  Bell,
  Search,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  MapPin,
  Calendar,
  Building2,
  UserPlus
} from 'lucide-react';

export default function AdminDashboard() {
    const [complaint , setComplaint] = useState([])
    const getComplaints = async() =>{
        try {
            const respone = await fetch('http://localhost:3000/admin/complaints')
            const data = await respone.json()
            console.log(data)
            setComplaint(data.Complaints)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
getComplaints()
    },[])
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [selectedUserStatus, setSelectedUserStatus] = useState('All');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'waste', name: 'Waste Monitoring', icon: Trash2 },
    { id: 'vehicles', name: 'Vehicles & Equipment', icon: Truck },
    { id: 'complaints', name: 'Complaints', icon: MessageSquare },
    { id: 'partners', name: 'Partner Registration', icon: Building2 },
    { id: 'newusers', name: 'Biodegradable waste registration', icon: UserPlus },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-3xl font-bold text-green-600">1,247</p>
                    <p className="text-sm text-green-500">+12% this month</p>
                  </div>
                  <Users className="w-12 h-12 text-green-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Vehicles</p>
                    <p className="text-3xl font-bold text-blue-600">89/95</p>
                    <p className="text-sm text-blue-500">94% operational</p>
                  </div>
                  <Truck className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Waste Collected</p>
                    <p className="text-3xl font-bold text-purple-600">2.4T</p>
                    <p className="text-sm text-purple-500">Today</p>
                  </div>
                  <Trash2 className="w-12 h-12 text-purple-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Pending Complaints</p>
                    <p className="text-3xl font-bold text-red-600">23</p>
                    <p className="text-sm text-red-500">Needs attention</p>
                  </div>
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
              </div>
            </div>

            {/* Create Activity - Full Width */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create Activity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Activity title..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Type Of Activity</option>
                  <option>Call</option>
                  <option>Video Call</option>
                  <option>Seminar</option>
                  <option>Message</option>
                </select>
                <textarea
                  placeholder="Activity description..."
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 md:col-span-1"
                ></textarea>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Assign to</option>
                  <option>All Drivers</option>
                  <option>Driver John (V-001)</option>
                  <option>Driver Mike (V-002)</option>
                  <option>Driver Sarah (V-003)</option>
                </select>
              </div>
              <div className="mt-4">
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Create Activity
                </button>
              </div>
            </div>
          </div>
        );
      

      
      case 'waste':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Waste Monitoring</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Collection Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed</span>
                    <span className="font-semibold text-green-600">156/180</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Waste Types</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Organic</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recyclable</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">General</span>
                    <span className="font-semibold">20%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Collection</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2.4 Tons</div>
                  <div className="text-sm text-gray-500">+8% from yesterday</div>
                </div>
              </div>
            </div>
            

          </div>
        );
      
      case 'vehicles':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Vehicles & Equipment</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Add Vehicle
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'V-001', status: 'Active', location: 'Route A', fuel: '85%', maintenance: 'Good' },
                { id: 'V-002', status: 'Active', location: 'Route B', fuel: '62%', maintenance: 'Due' },
                { id: 'V-003', status: 'Maintenance', location: 'Depot', fuel: '100%', maintenance: 'In Progress' },
              ].map((vehicle, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.id}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      vehicle.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {vehicle.status}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium">{vehicle.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fuel Level</span>
                      <span className="font-medium">{vehicle.fuel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maintenance</span>
                      <span className={`font-medium ${
                        vehicle.maintenance === 'Good' ? 'text-green-600' : 
                        vehicle.maintenance === 'Due' ? 'text-yellow-600' : 'text-blue-600'
                      }`}>
                        {vehicle.maintenance}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Track
                    </button>
                    <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                      Maintain
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      

      
      case 'complaints':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Complaint Management</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div 
                onClick={() => setSelectedStatus('All Status')}
                className={`rounded-xl p-4 shadow-sm border text-center cursor-pointer transition-all ${
                  selectedStatus === 'All Status' ? 'border-blue-300 bg-blue-50' : 'border-green-100 bg-white hover:bg-gray-50'
                }`}
              >
                
                <div className=" text-gray-600 text-base">All Complaints</div>
              </div>
              <div 
                onClick={() => setSelectedStatus('Pending')}
                className={`rounded-xl p-4 shadow-sm border text-center cursor-pointer transition-all ${
                  selectedStatus === 'Pending' ? 'border-red-300 bg-red-50' : 'border-green-100 bg-white hover:bg-gray-50'
                }`}
              >
                
                <div className="text-base text-gray-600">Pending</div>
              </div>
              <div 
                onClick={() => setSelectedStatus('In Progress')}
                className={`rounded-xl p-4 shadow-sm border text-center cursor-pointer transition-all ${
                  selectedStatus === 'In Progress' ? 'border-yellow-300 bg-yellow-50' : 'border-green-100 bg-white hover:bg-gray-50'
                }`}
              >
                
                <div className="text-base text-gray-600">In Progress</div>
              </div>
              <div 
                onClick={() => setSelectedStatus('Resolved')}
                className={`rounded-xl p-4 shadow-sm border text-center cursor-pointer transition-all ${
                  selectedStatus === 'Resolved' ? 'border-green-300 bg-green-50' : 'border-green-100 bg-white hover:bg-gray-50'
                }`}
              >
                
                <div className="text-base text-gray-600">Resolved</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-green-100">
              
              <div className="divide-y divide-gray-200">
                {[
                  { 
                    id: 'C-001', 
                    user: 'John Doe', 
                    issue: 'Missed collection', 
                    description: 'Garbage truck did not arrive at scheduled time. Bins are overflowing and causing hygiene issues in the neighborhood.',
                    status: 'Pending', 
                    date: '2024-01-15', 
                    priority: 'High',
                    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop&crop=center'
                  },
                  { 
                    id: 'C-002', 
                    user: 'Jane Smith', 
                    issue: 'Damaged bin', 
                    description: 'Waste bin has been cracked during collection. Requesting replacement as it cannot hold waste properly.',
                    status: 'In Progress', 
                    date: '2024-01-14', 
                    priority: 'Medium',
                    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=150&h=150&fit=crop&crop=center'
                  },
                  { 
                    id: 'C-003', 
                    user: 'Mike Johnson', 
                    issue: 'Late pickup', 
                    description: 'Collection was 3 hours late from scheduled time. This has been happening frequently in our area.',
                    status: 'Resolved', 
                    date: '2024-01-13', 
                    priority: 'Low',
                    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=150&h=150&fit=crop&crop=center'
                  },
                ].filter(complaint => selectedStatus === 'All Status' || complaint.status === selectedStatus).map((complaint, index) => (
                  <div key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Complaint Image */}
                      <div className="flex-shrink-0">
                        <img 
                          src={complaint.image} 
                          alt={complaint.issue}
                          className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                        />
                      </div>
                      
                      {/* Complaint Details */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="font-medium text-gray-900">{complaint.id}</span>
                          <span className="text-gray-600">{complaint.user}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            complaint.priority === 'High' ? 'bg-red-100 text-red-800' :
                            complaint.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {complaint.priority}
                          </span>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-1">{complaint.issue}</h4>
                        <p className="text-gray-600 text-sm mb-2">{complaint.description}</p>
                        <p className="text-sm text-gray-500">{complaint.date}</p>
                      </div>
                      
                      {/* Status and Actions */}
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-3 py-1 text-sm rounded-full ${
                          complaint.status === 'Pending' ? 'bg-red-100 text-red-800' :
                          complaint.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {complaint.status}
                        </span>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900 text-sm">View</button>
                          <button className="text-green-600 hover:text-green-900 text-sm">Resolve</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'partners':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Partner Registration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 text-center">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-gray-600">Active Partners</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 text-center">
                <div className="text-2xl font-bold text-yellow-600">5</div>
                <div className="text-sm text-gray-600">Pending Approval</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-green-100 text-center">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-sm text-gray-600">New Applications</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-green-100">
              <div className="divide-y divide-gray-200">
                {[
                  {
                    id: 'P-001',
                    company: 'EcoWaste Solutions',
                    type: 'Biodegradable Processing',
                    contact: 'John Smith',
                    email: 'john@ecowaste.com',
                    phone: '+91 98765 43210',
                    status: 'Active',
                    capacity: '500 tons/month',
                    location: 'Mumbai, Maharashtra'
                  },
                  {
                    id: 'P-002',
                    company: 'GreenTech Recycling',
                    type: 'Plastic & Metal Recycling',
                    contact: 'Sarah Johnson',
                    email: 'sarah@greentech.com',
                    phone: '+91 98765 43211',
                    status: 'Pending',
                    capacity: '300 tons/month',
                    location: 'Delhi, NCR'
                  },
                  {
                    id: 'P-003',
                    company: 'BioCompost Industries',
                    type: 'Organic Waste Composting',
                    contact: 'Mike Wilson',
                    email: 'mike@biocompost.com',
                    phone: '+91 98765 43212',
                    status: 'New Application',
                    capacity: '200 tons/month',
                    location: 'Bangalore, Karnataka'
                  },
                ].map((partner, index) => (
                  <div key={index} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="font-medium text-gray-900">{partner.id}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            partner.status === 'Active' ? 'bg-green-100 text-green-800' :
                            partner.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {partner.status}
                          </span>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-1">{partner.company}</h4>
                        <p className="text-sm text-gray-600 mb-2">{partner.type}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Contact: {partner.contact}</p>
                            <p className="text-gray-500">Email: {partner.email}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Phone: {partner.phone}</p>
                            <p className="text-gray-500">Location: {partner.location}</p>
                          </div>
                        </div>
                        
                        <div className="mt-2">
                          <span className="text-sm font-medium text-green-600">Capacity: {partner.capacity}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        {partner.status === 'New Application' && (
                          <>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                              Approve
                            </button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                              Reject
                            </button>
                          </>
                        )}
                        {partner.status === 'Pending' && (
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Review
                          </button>
                        )}
                        {partner.status === 'Active' && (
                          <>
                            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                              View Details
                            </button>
                            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm">
                              Suspend
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'newusers':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">User Registration Requests for biodegradable Waste</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div 
                onClick={() => setSelectedUserStatus('New Request')}
                className={`rounded-xl p-4 shadow-sm border text-center cursor-pointer transition-all ${
                  selectedUserStatus === 'New Request' ? 'border-blue-300 bg-blue-50' : 'border-green-100 bg-white hover:bg-gray-50'
                }`}
              >                
                <div className="text-base text-gray-600">New Requests</div>
              </div>
              <div 
                onClick={() => setSelectedUserStatus('Approved')}
                className={`rounded-xl p-4 shadow-sm border text-center cursor-pointer transition-all ${
                  selectedUserStatus === 'Approved' ? 'border-green-300 bg-green-50' : 'border-green-100 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="text-base text-gray-600">Approved Today</div>
              </div>
              <div 
                onClick={() => setSelectedUserStatus('Pending Assignment')}
                className={`rounded-xl p-4 shadow-sm border text-center cursor-pointer transition-all ${
                  selectedUserStatus === 'Pending Assignment' ? 'border-yellow-300 bg-yellow-50' : 'border-green-100 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="text-base text-gray-600">Pending Assignment</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-green-100">
              <div className="divide-y divide-gray-200">
                {[
                  {
                    id: 'U-001',
                    name: 'Rajesh Kumar',
                    email: 'rajesh@email.com',
                    phone: '+91 98765 43210',
                    address: '123 MG Road, Sector 15, Gurgaon',
                    houseType: 'Apartment',
                    familySize: '4 members',
                    wasteType: 'Mixed (Organic + Recyclable)',
                    requestDate: '2024-01-15',
                    status: 'New Request'
                  },
                  {
                    id: 'U-002',
                    name: 'Priya Sharma',
                    email: 'priya@email.com',
                    phone: '+91 98765 43211',
                    address: '456 Park Street, Sector 22, Noida',
                    houseType: 'Independent House',
                    familySize: '6 members',
                    wasteType: 'Organic + Garden Waste',
                    requestDate: '2024-01-14',
                    status: 'Approved'
                  },
                  {
                    id: 'U-003',
                    name: 'Amit Patel',
                    email: 'amit@email.com',
                    phone: '+91 98765 43212',
                    address: '789 Green Avenue, Sector 8, Delhi',
                    houseType: 'Villa',
                    familySize: '3 members',
                    wasteType: 'Recyclable Only',
                    requestDate: '2024-01-13',
                    status: 'Pending Assignment'
                  },
                ].filter(user => selectedUserStatus === 'All' || user.status === selectedUserStatus).map((user, index) => (
                  <div key={index} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="font-medium text-gray-900">{user.id}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            user.status === 'New Request' ? 'bg-blue-100 text-blue-800' :
                            user.status === 'Approved' ? 'bg-green-100 text-green-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {user.status}
                          </span>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-1">{user.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{user.address}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Email: {user.email}</p>
                            <p className="text-gray-500">Phone: {user.phone}</p>
                            <p className="text-gray-500">House Type: {user.houseType}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Family Size: {user.familySize}</p>
                            <p className="text-gray-500">Waste Type: {user.wasteType}</p>
                            <p className="text-gray-500">Request Date: {user.requestDate}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        {user.status === 'New Request' && (
                          <>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                              Approve & Assign Driver
                            </button>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                              Reject
                            </button>
                          </>
                        )}
                        {user.status === 'Approved' && (
                          <div className="text-center">
                            <p className="text-sm text-green-600 font-medium mb-2">Assigned to Driver John (V-001)</p>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                              Change Driver
                            </button>
                          </div>
                        )}
                        {user.status === 'Pending Assignment' && (
                          <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm">
                            Assign Driver
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-green-100`}>
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-green-100 bg-gradient-to-r from-green-50 to-teal-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">CleanSweep</span>
              <p className="text-xs text-green-600">Admin Panel</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-green-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Quick Stats in Sidebar */}
        {/* <div className="mt-8 px-4">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-xl">
            <h4 className="font-semibold mb-3">System Status</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Active Users</span>
                <span>1,247</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Active Vehicles</span>
                <span>89/95</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>System Health</span>
                <span className="flex items-center">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Good
                </span>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-green-100">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-green-100 transition-colors"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              
              <h1 className="text-xl font-bold text-gray-900">
                {menuItems.find(item => item.id === activeTab)?.name || 'Dashboard'}
              </h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 rounded-lg hover:bg-green-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Admin Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
