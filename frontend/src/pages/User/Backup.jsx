import { Bell, BookUser, MapPin, Leaf, ClipboardList, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";



const notifications = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80", // Example photo
    title: "New Recycling Drive in Your Area",
    body: "Join the community recycling drive this Saturday at Green Park. Bring your plastic bottles and paper waste!",
    tag: "community",
    tagClass: "bg-green-800 text-white",
    time: "2 hours ago",
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Alert_icon_%28black%29.svg/64px-Alert_icon_%28black%29.svg.png", // Alert icon
    title: "Garbage Collection Delayed",
    body: "Due to heavy rainfall, garbage collection in Sector 15 has been postponed to tomorrow morning.",
    tag: "alert",
    tagClass: "bg-red-600 text-white",
    time: "4 hours ago",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&facepad=2&w=64&h=64&q=80", // Example badge/trophy
    title: "Eco Warrior Badge Earned!",
    body: "Congratulations! You've successfully registered 50kg of biodegradable waste this month.",
    tag: "achievement",
    tagClass: "bg-green-800 text-white",
    time: "1 day ago",
  },
];

export default function UserDashboard() {
    const navigate = useNavigate();
  
  return (
    <div className="flex min-h-screen bg-green-50">
      {/* Sidebar */}
      <aside className="w-72 bg-green-100 flex flex-col py-6 px-6 border-r">
        <span onClick={()=>{navigate("/userdashboard")}} className="font-bold text-2xl text-green-800 mb-5 cursor-pointer">EcoWaste</span>
        <nav className="flex flex-col gap-1">
          <span><SidebarButton active icon={<Bell className="mr-2" />} label="Notifications" /></span>
          <span onClick={()=>{navigate("/complaint")}}><SidebarButton  icon={<BookUser className="mr-2" />} label="Complaints" /></span>
          <SidebarButton icon={<MapPin className="mr-2" />} label="Find Collectors" />
          <SidebarButton icon={<Leaf className="mr-2" />} label="Bio Plants" />
          <SidebarButton icon={<ClipboardList className="mr-2" />} label="Register Waste" />
          <SidebarButton icon={<GraduationCap className="mr-2" />} label="Training" />
        </nav>
      </aside>
      {/* Main */}
      <section className="flex-1 px-16 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-bold">Community Feed</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full px-4 py-2 pl-8 bg-green-50 text-sm outline-none"
              />
              <Bell className="w-5 h-5 absolute left-2 top-2 text-gray-400" />
            </div>
            <button className="bg-transparent p-2"><Bell /></button>
            <button className="bg-transparent p-2"><GraduationCap /></button>
            <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden">
              {/* Profile image placeholder, intentionally left empty */}
            </div>
          </div>
        </div>
        {/* Feed List */}
        <div className="flex flex-col gap-6">
          {notifications.map(notif => (
            <div key={notif.id} className="flex items-start bg-green-100 rounded-xl shadow p-5 gap-4 border border-green-200">
              <img
                src={notif.image}
                alt=""
                className="w-12 h-12 object-cover rounded-full mt-1"
              />
              <div className="flex flex-col flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{notif.title}</span>
                  <span className={`px-4 py-1 rounded-full text-xs font-bold ${notif.tagClass}`}>
                    {notif.tag}
                  </span>
                </div>
                <span className="text-gray-700 text-md mb-1">{notif.body}</span>
                <span className="text-gray-500 text-xs">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
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
