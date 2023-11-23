import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  const navItems = (
    <>
      {isAdmin ? (
        // Admin navbar

        <div className="flex flex-col space-y-5 p-3">
          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
            to="/dashboard"
          >
            Dashboard
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : ""
            }
            to="/"
          >
            Appointments
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : ""
            }
            to="/dashboard/all-users"
          >
            All Users
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : ""
            }
            to="/dashboard/add-doctor"
          >
            Add a doctor
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : "bg-black"
            }
            to="/dashboard/manage-doctors"
          >
            Manage Doctors
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : "bg-black"
            }
            to="/"
          >
            Home
          </Link>
        </div>
      ) : (
        // User Navbar
        <div className="flex flex-col space-y-5 p-3">
          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
            to="/dashboard"
          >
            User Dashboard
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : ""
            }
            to="/"
          >
            My Appointments
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : ""
            }
            to="/dashboard"
          >
            Payment History
          </Link>

          <Link
            style={{ marginRight: "20px" }}
            className={({ isActive }) =>
              isActive ? "bg-[#F7A582] p-3 text-white" : "bg-black"
            }
            to="/"
          >
            Home
          </Link>
        </div>
      )}
    </>
  );
  return (
    <div className="flex flex-row">
      <div className="min-h-screen bg-green-800 w-1/3 text-white">
        {navItems}
      </div>

      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
