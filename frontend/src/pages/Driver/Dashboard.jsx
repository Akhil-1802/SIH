import { User, Phone, Car, MapPin, ToggleRight, ToggleLeft } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [serviceOn, setServiceOn] = useState(false);

  const toggleService = () => {
    setServiceOn(!serviceOn);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Driver Dashboard</h1>

      {/* Driver Details Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-gray-700">
          <User className="w-6 h-6 text-green-600" /> Driver Details
        </h2>
        <div className="space-y-3 text-gray-600">
          <p className="flex items-center gap-3">
            <Car className="w-5 h-5 text-green-500" />
            <span><strong>Name:</strong> John Doe</span>
          </p>
          <p className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-green-500" />
            <span><strong>Phone:</strong> +1 234 567 890</span>
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-green-500" />
            <span><strong>Location:</strong> New York, USA</span>
          </p>
          <p className="flex items-center gap-3">
            <Car className="w-5 h-5 text-green-500" />
            <span><strong>Vehicle:</strong> Tesla Model 3</span>
          </p>
        </div>
      </div>

      {/* Service Toggle Section */}
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between max-w-sm">
        <div className="text-gray-700 text-lg font-medium">Service Status</div>
        <button
          onClick={toggleService}
          className={`flex items-center gap-2 p-2 rounded-full cursor-pointer transition-colors ${
            serviceOn ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
          }`}
          aria-label="Toggle service status"
          role="switch"
          aria-checked={serviceOn}
        >
          {serviceOn ? (
            <ToggleRight className="w-8 h-8" />
          ) : (
            <ToggleLeft className="w-8 h-8" />
          )}
          <span>{serviceOn ? "On Service" : "Off Service"}</span>
        </button>
      </div>
    </div>
  );
}
