import React, { useState } from 'react';

const complaints = [
  {
    id: 'C001',
    title: 'Missed Collection',
    description: 'Waste not collected for 3 days',
    status: 'Open',
    date: '2024-01-15',
    priority: 'High'
  },
  {
    id: 'C002',
    title: 'Overflowing Bin',
    description: 'Collection point bin is overflowing',
    status: 'In Progress',
    date: '2024-01-14',
    priority: 'Medium'
  },
  {
    id: 'C003',
    title: 'Wrong Waste Type',
    description: 'Non-biodegradable waste mixed with organic',
    status: 'Resolved',
    date: '2024-01-12',
    priority: 'Low'
  }
];

export default function Complaints() {
  const [newComplaint, setNewComplaint] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    picture: null,
    picturePreview: null,
  });

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewComplaint((prev) => ({
        ...prev,
        picture: file,
        picturePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Complaint submitted successfully!');
    setNewComplaint({ title: '', description: '', priority: 'Medium', picture: null, picturePreview: null });
  };

  const statusColor = {
    'Open': 'bg-red-100 text-red-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    'Resolved': 'bg-green-100 text-green-800'
  };

  const priorityColor = {
    'High': 'bg-red-600',
    'Medium': 'bg-yellow-500',
    'Low': 'bg-green-600'
  };

  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-7">Complaints</h1>
      
      <div className="grid lg:grid-cols-2 gap-7">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Submit New Complaint</h2>
          <form onSubmit={handleSubmit} className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Title</label>
              <input
                type="text"
                value={newComplaint.title}
                onChange={(e) => setNewComplaint({...newComplaint, title: e.target.value})}
                className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Priority</label>
              <select
                value={newComplaint.priority}
                onChange={(e) => setNewComplaint({...newComplaint, priority: e.target.value})}
                className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Description</label>
              <textarea
                value={newComplaint.description}
                onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
                className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
                rows="4"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">Picture</label>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handlePictureChange}
                className="w-full border rounded-lg bg-green-100 px-4 py-2 focus:outline-none focus:ring focus:ring-green-200"
              />
              {newComplaint.picturePreview && (
                <img
                  src={newComplaint.picturePreview}
                  alt="Preview"
                  className="mt-2 max-h-40 rounded-lg border"
                />
              )}
              <p className="text-xs text-gray-500 mt-1">You can select a photo from your device or click one using your camera.</p>
            </div>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold">
              Submit Complaint
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Complaints</h2>
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="bg-green-50 border border-green-100 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{complaint.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-white text-xs font-semibold ${priorityColor[complaint.priority]}`}>
                      {complaint.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[complaint.status]}`}>
                      {complaint.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-2">{complaint.description}</p>
                <div className="text-xs text-gray-500">ID: {complaint.id} • {complaint.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}