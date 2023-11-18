import { Link } from "react-router-dom";
import logo from "../../../public/Doc House Logo.svg";
import Container from "./Container";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleMenu = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  const navItems = (
    <>
      <Link
        style={{ marginRight: "20px" }}
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        Home
      </Link>

      <Link
        style={{ marginRight: "20px" }}
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        About
      </Link>

      <Link
        style={{ marginRight: "20px" }}
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        Appointment
      </Link>

      <Link
        style={{ marginRight: "20px" }}
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        Login
      </Link>
    </>
  );
  return (
    <>
      <Container>
        <div className="flex fixed text-white justify-between gap-20 items-center py-5">
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
              className="text-2xl cursor-pointer block md:hidden lg:hidden ml-16 text-white hover:text-green-400"
            />
            <div className="lg:hidden  transition relative">
              <div
                className={`flex flex-col gap-1 bg-white text-black absolute top-2 w-[200px] right-0 z-0 rounded-md p-3 ${
                  isClicked ? "block" : "hidden"
                }`}
              >
                {navItems}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
