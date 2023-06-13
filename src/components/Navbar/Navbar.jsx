import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#FA8072] flex justify-center items-center gap-32 h-16">
        <label className="font-Pacifico text-2xl text-black">Calculation</label>
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-xl text-black font-bold  font-Pacifico">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/agecalculater" className="hover:text-white">
                Age
              </Link>
            </li>
            <li>
              <Link to="/currency" className="hover:text-white">
                Currency
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
