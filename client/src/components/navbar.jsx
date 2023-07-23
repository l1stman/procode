import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between bg-white py-4 px-6">
      <div className="text-first font-bold text-2xl">ProCode</div>
      {location.pathname === "/" ? (
        <Link to="/dashboard">
          <button className="border border-black w-36 rounded-lg px-4 py-1">
            Dashboard
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button className="border border-black w-24 rounded-lg px-4 py-1">
            Home
          </button>
        </Link>
      )}
    </nav>
  );
};
export default Navbar;
