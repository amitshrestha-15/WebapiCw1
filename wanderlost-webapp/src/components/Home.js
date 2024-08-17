import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    {
      isAuthenticated ? navigate("/add/logs") : navigate("/login");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!isAuthenticated ? (
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/Background.jpg"}
            alt="home"
            className="w-full h-full object-cover fixed top-0 left-0"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
            <p className="text-lg mb-6">
              Explore your adventures and create memorable travel logs.
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your Website</h1>
          <p className="text-lg mb-6">
            Explore your adventures and create memorable travel logs.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
          >
            Get Started
          </button>
        </div>
      )}

      {/* Content overlay */}
    </div>
  );
};

export default Home;
