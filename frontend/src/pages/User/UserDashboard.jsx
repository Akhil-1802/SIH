import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Outlet /> {/* This will render the nested route's component */}
        </div>
      </div>
    </div>
  );
}