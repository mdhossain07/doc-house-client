import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Appointment from "../Pages/Appointment/Appointment";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: <AddDoctor />,
      },
      {
        path: "/dashboard/manage-doctors",
        element: <ManageDoctors />,
      },
    ],
  },
]);

export default routes;
