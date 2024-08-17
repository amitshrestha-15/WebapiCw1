import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddLog from "./components/Logs/AddLog";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Profile/Login";
import Logs from "./components/Logs/Logs";
import Register from "./components/Profile/Register";
import PageNotFound from "./components/pages/PageNotFound";
import { profile } from "./redux/features/authSlice";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(profile());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Router>
        <Header isAuthenticated={isAuthenticated} user={user} />
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add/logs" element={<AddLog />} />
          <Route path="/all/logs" element={isAuthenticated ? <Logs />:""} />


          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
