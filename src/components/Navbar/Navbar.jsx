import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const isValid = localStorage.getItem("Authenticate") === "true";

  const handleLogout = () => {
    localStorage.removeItem("UserLogin");
    localStorage.setItem("Authenticate", "false");
    navigate("/login");
  };

  return (
    <>
      <div className="bg-[#FA8072] flex justify-center items-center gap-32 h-16">
        <label className="font-Pacifico text-2xl text-">Calculation</label>
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-xl text-black font-bold font-Pacifico">
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
            <li>
              <Link to="/users" className="hover:text-white">
                Users
              </Link>
            </li>
            <li>
              <Link to="/todo" className="hover:text-white">
                To-List
              </Link>
            </li>
            {isValid && (
              <li>
                <Link to="/loggedUser" className="hover:text-white">
                  Profile
                </Link>
              </li>
            )}
            {isValid && (
              <li>
                <Link to="/action" className="hover:text-white">
                  Action
                </Link>
              </li>
            )}
            {!isValid && (
              <li>
                <Link to="/register" className="hover:text-white">
                  Registration
                </Link>
              </li>
            )}
            {!isValid && (
              <li>
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        {isValid && (
          <button
            className="font-Pacifico text-xl rounded-lg hover:text-white w-auto p-2 bg-[#7b9194]"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
