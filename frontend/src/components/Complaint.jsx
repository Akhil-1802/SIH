import { Bell, BookUser, MapPin, Leaf, ClipboardList, GraduationCap } from "lucide-react";

export default function Complaint() {
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <aside className="w-72 bg-green-100 flex flex-col py-6 px-6 border-r">
        <span className="font-bold text-2xl text-green-800 mb-5">EcoWaste</span>
        <nav className="flex flex-col gap-1">
          <SidebarButton icon={<Bell className="mr-2" />} label="Notifications" />
          <SidebarButton active icon={<BookUser className="mr-2" />} label="Complaints" />
          <SidebarButton icon={<MapPin className="mr-2" />} label="Find Collectors" />
          <SidebarButton icon={<Leaf className="mr-2" />} label="Bio Plants" />
          <SidebarButton icon={<ClipboardList className="mr-2" />} label="Register Waste" />
          <SidebarButton icon={<GraduationCap className="mr-2" />} label="Training" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-16 py-8">
        <h1 className="text-3xl font-bold mb-6">Submit Complaint</h1>

        <form className="bg-green-100 rounded-xl p-8 max-w-3xl shadow border border-green-200">
          <div className="mb-5">
            <h2 className="text-lg font-semibold mb-1">Report an Issue</h2>
            <p className="text-gray-700">Help us improve waste management in your area</p>
          </div>

          <div className="mb-5">
            <label htmlFor="issueType" className="block font-semibold mb-2">Issue Type</label>
            <select
              id="issueType"
              className="w-full bg-green-50 border border-green-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              defaultValue="Missed Collection"
            >
              <option>Missed Collection</option>
              <option>Late Pickup</option>
              <option>Garbage Overflow</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="location" className="block font-semibold mb-2">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter your address or landmark"
              className="w-full bg-green-50 border border-green-300 rounded px-3 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block font-semibold mb-2">Description</label>
            <textarea
              id="description"
              rows={4}
              placeholder="Describe the issue in detail..."
              className="w-full bg-green-50 border border-green-300 rounded px-3 py-2 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white font-semibold w-full py-3 rounded hover:bg-green-800 transition"
          >
            Submit Complaint
          </button>
        </form>
      </main>
    </div>
  );
}

function SidebarButton({ icon, label, active }) {
  return (
    <button
      className={`flex items-center w-full px-4 py-3 rounded-lg text-lg font-medium
        ${active ? "bg-green-700 text-white" : "text-gray-700 hover:bg-green-200 hover:text-green-700"}
      `}
    >
      {icon}
      {label}
    </button>
  );
}
