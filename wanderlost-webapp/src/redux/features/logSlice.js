import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../apiRoute/api";

//actions
export const logsAdd = createAsyncThunk(
  "/logs/add",
  async ({ logForm, toast, navigate }, { rejectWithValue }) => {
    try {
      const res = await api.addLogs(logForm);
      toast.success(res.data.message || "logs added success!");
      navigate("/all/logs");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

export const allLogs = createAsyncThunk(
  "/all/logs",
  async (_userId, { rejectWithValue }) => {
    try {
      const res = await api.getLogs();
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

const logSlice = createSlice({
  name: "log",
  initialState: {
    loading: "",
    error: "",
    message: "",
    logs: [],
    log: {},
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(logsAdd.pending, (state) => {
        state.loading = true;
      })
      .addCase(logsAdd.fulfilled, (state, action) => {
        state.loading = false;
        state.log = action.payload;
      })
      .addCase(logsAdd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })
      .addCase(allLogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(allLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.logs = action.payload.data;
      })
      .addCase(allLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});
export const { clearError } = logSlice.actions;
export default logSlice.reducer;
