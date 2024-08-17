import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError, login } from "../../redux/features/authSlice";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  console.log("error",error)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginValue;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ loginValue, toast, navigate }));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError())
    }
  }, [dispatch,error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:ring focus:ring-indigo-300"
          >
            {loading && <span>Loading....</span>}Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
