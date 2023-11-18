import { Link } from "react-router-dom";
import logo from "../../../public/Doc House Logo.svg";
import Container from "./Container";

const Navbar = () => {
  const navItems = (
    <div className="flex gap-3">
      <Link
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        Home
      </Link>

      <Link
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        About
      </Link>

      <Link
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        Appointment
      </Link>

      <Link
        className={({ isActive }) => (isActive ? "bg-[#F7A582] p-3" : "")}
        to="/"
      >
        Login
      </Link>
    </div>
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

          <div className="font-medium">{navItems}</div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
