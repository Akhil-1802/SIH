import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="flex relative">
        <Sidebar />
        <div className="flex-1 w-full lg:w-auto p-3 sm:p-4 lg:p-6 ml-0 lg:ml-0">
          <Outlet /> {/* This will render the nested route's component */}
        </div>
      </div>
    </div>
  );
}