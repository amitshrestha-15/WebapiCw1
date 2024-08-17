import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setLogout } from "../redux/features/authSlice";

const Header = ({ isAuthenticated, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
    toast.success("Logout Successfully!");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border ">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* User Authentication */}
        <div className="ml-auto text-center">
          {isAuthenticated ? (
            <>
              <div className="mb-4">
                <Link
                  to="/"
                  className="text-2xl text-black"
                >
                  Travel Log
                </Link>
              </div>

              <div className="flex flex-col space-y-2 mb-4">
                <div className="flex items-center space-x-3">
                  <NavLink
                    to="/all/logs"
                    className="text-yellow-500 hover:text-white"
                    activeClassName="text-white"
                  >
                    All Logs
                  </NavLink>
                  <NavLink
                    to="/add/logs"
                    className=" text-yellow-500 hover:text-white"
                    activeClassName="text-white"
                  >
                    Add Log
                  </NavLink>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Link to="/" className="text-white hover:underline">
                  {user?.username}
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn btn-danger btn-sm"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="space-x-3">
              <Link to="/login" className="btn btn-primary btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-success btn-sm">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
