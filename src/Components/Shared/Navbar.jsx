import { Link } from "react-router-dom";
import logo from "../../../public/Doc House Logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [navBackground, setNavBackground] = useState("#07332F");
  const { user, logOut } = useAuth();
  // console.log(user);

  const handleMenu = () => {
    setIsClicked(!isClicked);
  };

  const handleLogout = () => {
    logOut().then(() => {
      Swal.fire({
        title: "Done!",
        text: "User logged out!",
        icon: "success",
      });
    });
  };

  useEffect(() => {
    const handScroll = () => {
      if (window.scrollY > 20) {
        setNavBackground("#07332F");
      }
    };

    window.addEventListener("scroll", handScroll);
  }, []);
  const navItems = (
    <div className="flex flex-col md:flex-row">
      <Link
        style={{ marginRight: "20px" }}
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        Home
      </Link>

      <Link
        style={{ marginRight: "20px" }}
        className={({ isActive }) =>
          isActive ? "bg-[#F7A582] p-3 text-white" : ""
        }
        to="/"
      >
        About
      </Link>

      <Link
        style={{ marginRight: "20px" }}
        className={({ isActive }) =>
          isActive ? "bg-[#F7A582] p-3 text-white" : ""
        }
        to="/appointment"
      >
        Appointment
      </Link>

      {user?.email && (
        <Link
          style={{ marginRight: "20px" }}
          className={({ isActive }) =>
            isActive ? "bg-[#F7A582] p-3 text-white" : ""
          }
          to="/dashboard"
        >
          Dashboard
        </Link>
      )}

      {user ? (
        <button onClick={handleLogout} className="text-left">
          Logout
        </button>
      ) : (
        <Link
          style={{ marginRight: "20px" }}
          className={({ isActive }) =>
            isActive ? "bg-[#F7A582] p-3 text-white" : "bg-black"
          }
          to="/login"
        >
          Login
        </Link>
      )}

      {user && (
        <h2 className="md:ml-10 text-[#F7A582] cursor-pointer">
          {user.displayName}
        </h2>
      )}
    </div>
  );
  return (
    <>
      <div
        style={{ backgroundColor: navBackground, zIndex: 100 }}
        className="flex justify-around lg:justify-evenly gap-10 w-full text-white items-center py-5 ease-in-out duration-300 shadow-md"
      >
        <div className="flex gap-5 items-center">
          <img src={logo} alt="" />
          <h2 className="text-3xl font-bold">
            <span className="text-[#F7A582]">Doc</span> House
          </h2>
        </div>

        <div className="font-medium hidden md:block lg:block">{navItems}</div>

        <div className="">
          <FaAlignJustify
            onClick={handleMenu}
            className="text-2xl cursor-pointer block md:hidden lg:hidden text-white hover:text-green-400"
          />
        </div>
      </div>

      <div className="lg:hidden transition relative">
        <div
          className={`flex flex-col gap-1 bg-white text-black absolute top-0 w-[200px] right-10 z-1 rounded-md p-3 ${
            isClicked ? "block" : "hidden"
          }`}
        >
          {navItems}
        </div>
      </div>
    </>
  );
};

export default Navbar;
