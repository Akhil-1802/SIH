// BioPlantImageEvidence.jsx
import React, { useState } from "react";

const initialPlants = [
  {
    name: "GreenTech Bio Plant",
    distance: "2.3 km away",
    hours: "Open 24/7",
    capacity: "500 tons/day",
    accepts: "Food waste, garden waste",
  },
  {
    name: "EcoEnergy Facility",
    distance: "4.1 km away",
    hours: "Open 6 AM - 8 PM",
    capacity: "300 tons/day",
    accepts: "Organic waste, agricultural residue",
  },
];

export default function BioPlantEvidence() {
  const [plants] = useState(initialPlants);
  const [search, setSearch] = useState("");

  return (
    <main className="flex-1 bg-white py-8 px-10 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 mb-7">Bio-Methanization Plants</h1>
        
        <div className="bg-green-50 rounded-xl p-6 mb-6 border border-green-100">
          <div className="font-bold text-lg text-green-800 mb-2">Nearby Plants</div>
          <div className="text-gray-700 text-[15px] mb-4">Find bio-methanization facilities for organic waste</div>
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Search by location"
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

          {/* Plant cards */}
          {plants
            .filter(plant =>
              plant.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((plant, i) => (
              <div key={i} className="bg-white border border-green-100 rounded-xl mb-5 p-4 shadow">
                <div className="font-bold text-lg text-gray-900">{plant.name}</div>
                <div className="text-green-800 text-sm mb-1">{plant.distance} · {plant.hours}</div>
                <div className="text-xs text-gray-600 mb-1">Capacity: {plant.capacity} · Accepts: {plant.accepts}</div>
                <button className="px-5 py-2 mt-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Get Directions</button>
              </div>
            ))}
        </div>
      </main>
  );
}
