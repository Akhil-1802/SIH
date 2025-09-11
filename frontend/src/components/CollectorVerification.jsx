// CollectorImageVerification.jsx
import React, { useRef, useState } from "react";

const initialCollectors = [
  {
    name: "Green Waste Solutions",
    distance: "0.5 km away",
    status: "Available now",
    specialty: "Specializes in organic waste collection",
    images: [],
  },
  {
    name: "UrbanClean Collectors",
    distance: "1.3 km away",
    status: "On duty",
    specialty: "Handles recyclables and hazardous waste",
    images: [],
  },
];

export default function CollectorVerification() {
  const [collectors, setCollectors] = useState(initialCollectors);
  const [search, setSearch] = useState("");
  const fileRefs = useRef({});

  const handleUpload = (idx, e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setCollectors(prev =>
        prev.map((col, i) =>
          i === idx
            ? { ...col, images: [...col.images, { name: file.name, url: reader.result }] }
            : col
        )
      );
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Collector Image Verification</h1>
        <div className="bg-green-50 rounded-xl p-6 mb-6 border border-green-100">
          <div className="font-bold text-lg text-green-800 mb-2">Nearby Collectors</div>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter your location"
              className="flex-1 py-2 px-4 border rounded-lg bg-green-100 focus:outline-none focus:ring focus:ring-green-200 text-green-900"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="ml-2 rounded-md bg-green-600 text-white p-2 flex items-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round"
                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"/></svg>
            </span>
          </div>
          <div className="bg-green-100 rounded-lg mb-6 border flex items-center justify-center text-lg text-green-800 min-h-[120px]">
            Interactive Map Coming Soon
          </div>

          {/* Collector Cards */}
          {collectors
            .filter(col =>
              col.name.toLowerCase().includes(search.toLowerCase()) ||
              col.specialty.toLowerCase().includes(search.toLowerCase())
            )
            .map((col, idx) => (
              <div key={idx} className="bg-white border border-green-100 rounded-xl mb-5 p-4 shadow flex flex-col sm:flex-row items-start">
                <div className="flex-1 mb-2 sm:mb-0">
                  <div className="font-bold text-lg text-gray-900">{col.name}</div>
                  <div className="text-green-800 text-sm mb-1">{col.distance} · {col.status}</div>
                  <div className="text-xs text-gray-600 mb-1">{col.specialty}</div>
                  <button className="px-5 py-2 mt-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Request Pickup</button>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-2 text-sm font-medium text-gray-700">Upload or View Verification</div>
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded shadow hover:bg-green-700 mb-2"
                    onClick={() => fileRefs.current[idx].click()}
                  >
                    Upload Image
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={el => (fileRefs.current[idx] = el)}
                    onChange={e => handleUpload(idx, e)}
                  />
                  <div className="flex mt-2 space-x-2">
                    {col.images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img.url}
                        alt={img.name}
                        title={img.name}
                        className="w-16 h-16 object-cover rounded border border-green-200"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
  );
}
