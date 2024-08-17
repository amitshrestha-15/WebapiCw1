import axios from "axios";

const baseUrl = "http://localhost:5000/api/v1";
const API = axios.create({
  baseURL: baseUrl,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.log(error);
  }
  return req;
});

//register
export const userRegister = (registerValue) =>
  API.post("/register", registerValue);
//login
export const userLogin = (loginValue) => API.post("/login", loginValue);
//PROFILE
export const userProfile = () => API.get("/auth/profile");

//add logs
export const addLogs = (logForm) => API.post("/addlogs", logForm);

//get logs
export const getLogs = () => API.get("/logs/");
