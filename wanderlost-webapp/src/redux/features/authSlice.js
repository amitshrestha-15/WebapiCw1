import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";

//actions
export const register = createAsyncThunk(
  "/user/register",
  async ({ registerValue, toast, navigate }, { rejectWithValue }) => {
    try {
      const res = await api.userRegister(registerValue);
      toast.success(res.data.message || "register success!");
      navigate("/login");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

//login
export const login = createAsyncThunk(
  "/user/login",
  async ({ loginValue, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.userLogin(loginValue);
      toast.success(response.data.message || "login success!");
      navigate("/add/logs");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//profile
export const profile = createAsyncThunk(
  "/user/profile",
  async (__, { rejectWithValue }) => {
    try {
      const res = await api.userProfile();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: "",
    error: "",
    message: "",
    isAuthenticated: !!localStorage.getItem("token"),
    user: null,
  },
  reducers: {
    setLogout: (state) => {
      localStorage.clear();
      state.user = null;
      state.isAuthenticated = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        localStorage.setItem("token", action.payload.token);
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(profile.pending, (state) => {
        state.loading = true;
      })
      .addCase(profile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(profile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});
export const { clearError, setLogout, clearUser } = authSlice.actions;
export default authSlice.reducer;
