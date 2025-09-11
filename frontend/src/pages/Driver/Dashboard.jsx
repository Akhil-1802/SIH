import { ToggleLeft, Search, MessagesSquare, HelpCircle, User, Star } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-48 border-r bg-gray-50">
        <div className="flex items-center p-4">
          {/* Logo text */}
          <span className="font-bold text-green-700 text-2xl">Logo</span>
        </div>
        <nav>
          <button className="w-full flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-gray-100 focus:outline-none">
            <ToggleLeft className="mr-2 h-5 w-5" />
            Dashboard
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-10 px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-end w-full mb-10">
          <div className="flex gap-3 items-center">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              className="border rounded-full px-3 py-1 text-sm outline-none"
              type="text"
              placeholder="Search dashboard..."
            />
            <button className="bg-green-600 text-white px-3 py-1 rounded ml-3 flex items-center">
              <MessagesSquare className="h-4 w-4 mr-1" /> Messages
            </button>
            <button className="bg-green-600 text-white px-3 py-1 rounded ml-1 flex items-center">
              <HelpCircle className="h-4 w-4 mr-1" /> Help
            </button>
            <button className="bg-green-600 text-white px-3 py-1 rounded ml-1 flex items-center">
              <User className="h-4 w-4 mr-1" /> Profile
            </button>
          </div>
        </div>

        {/* Status Card */}
        <div className="w-96 bg-green-600 text-white rounded-lg flex flex-col items-center py-8 mb-10 shadow">
          <div className="flex items-center mb-3">
            <ToggleLeft className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">You are Online!</span>
          </div>
          <span className="mb-3 text-base">
            Ready for new trip requests.
          </span>
          <button className="bg-white text-green-600 px-6 py-2 rounded font-bold shadow hover:bg-gray-100">
            Go Offline
          </button>
        </div>

        {/* Driver Overview */}
        <section className="w-80 bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <h2 className="font-semibold mb-3 text-gray-700">Driver Overview</h2>
          {/* Profile Image Placeholder */}
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-2">
            <User className="w-8 h-8 text-gray-400" />
          </div>
          <div className="text-center mb-2">
            <span className="font-bold text-lg">Alex Johnson</span>
            <div className="text-xs text-gray-500">Professional Courier</div>
          </div>
          <div className="flex items-center justify-center mb-3">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-green-500 fill-green-500" fill="currentColor" />
            ))}
            <Star className="h-4 w-4 text-green-500" />
            <span className="text-green-600 ml-2 font-bold">4.8</span>
          </div>
          <div className="flex justify-between w-full text-gray-700 pt-2 border-t">
            <div className="flex flex-col items-center">
              <span className="font-bold">1250</span>
              <span className="text-xs">Total Trips</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold">$87,250.75</span>
              <span className="text-xs">Total Earnings</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
