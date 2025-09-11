// EcoWasteImagePoints.jsx
import React, { useState } from "react";

const collectionPoints = [
  {
    name: "Green Waste Solution",
    distance: "0.3 km away",
    status: "Available now",
    desc: "Specialises in organic waste collection.",
  },
  {
    name: "EcoClean Services",
    distance: "1.0 km away",
    status: "Accepting today",
    desc: "General waste and recyclables",
  },
];

export default function EcoWastePoints() {
  const [search, setSearch] = useState("");

  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
        <div className="mb-7  flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Find garbage Collectors</h1>
          <div className="text-gray-700 text-[15px] mb-4">Find waste collection in yours area</div>
         
        </div>

        {/* Map/Preview Placeholder */}
        <div className="bg-green-100 rounded-xl border border-green-200 min-h-[200px] flex items-center justify-center text-lg text-green-800 mb-6">
          Interactive Image Map Coming Soon
        </div>

        {/* Points List */}
        <div className="space-y-5">
          {collectionPoints
            .filter(pt =>
              pt.name.toLowerCase().includes(search.toLowerCase()) ||
              pt.desc.toLowerCase().includes(search.toLowerCase())
            )
            .map((p, i) => (
              <div key={i} className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
                <div className="font-bold text-gray-900">{p.name}</div>
                <div className="text-green-800 text-sm">{p.distance} &middot; {p.status}</div>
                <div className="text-gray-600 text-sm">{p.desc}</div>
              </div>
            ))
          }
        </div>
      </main>
  );
}
