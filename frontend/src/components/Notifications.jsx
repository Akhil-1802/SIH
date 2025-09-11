import React, { useState } from 'react';
import { FaBell, FaCheck, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const notifications = [
  {
    id: 1,
    title: 'Collection Scheduled',
    message: 'Your waste collection is scheduled for tomorrow at 10 AM',
    type: 'info',
    time: '2 hours ago',
    read: false
  },
  {
    id: 2,
    title: 'Collection Completed',
    message: 'Your biodegradable waste has been successfully collected',
    type: 'success',
    time: '1 day ago',
    read: true
  },
  {
    id: 3,
    title: 'Missed Collection',
    message: 'Collection was missed due to inaccessible location',
    type: 'warning',
    time: '2 days ago',
    read: false
  },
  {
    id: 4,
    title: 'New Bio Plant Available',
    message: 'A new bio-methanization plant opened near your area',
    type: 'info',
    time: '3 days ago',
    read: true
  }
];

export default function Notifications() {
  const [notificationList, setNotificationList] = useState(notifications);

  const markAsRead = (id) => {
    setNotificationList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationList(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getIcon = (type) => {
    switch(type) {
      case 'success': return <FaCheck className="text-green-600" />;
      case 'warning': return <FaExclamationTriangle className="text-yellow-600" />;
      default: return <FaInfoCircle className="text-blue-600" />;
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'success': return 'border-l-green-500';
      case 'warning': return 'border-l-yellow-500';
      default: return 'border-l-blue-500';
    }
  };

  const unreadCount = notificationList.filter(n => !n.read).length;

  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
      <div className="flex justify-between items-center mb-7">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-900 mr-3">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Mark All as Read
          </button>
        )}
      </div>

      <div className="space-y-4">
        {notificationList.map((notification) => (
          <div 
            key={notification.id} 
            className={`bg-green-50 border border-green-100 rounded-xl p-4 border-l-4 ${getTypeColor(notification.type)} ${
              !notification.read ? 'bg-green-100' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-700 text-sm mt-1">{notification.message}</p>
                  <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
                </div>
              </div>
              {!notification.read && (
                <button 
                  onClick={() => markAsRead(notification.id)}
                  className="text-green-600 hover:text-green-800 text-sm font-medium"
                >
                  Mark as Read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}