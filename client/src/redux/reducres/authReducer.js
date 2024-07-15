import { createSlice } from "@reduxjs/toolkit";
import {
  UserLogin,
  UserSignup,
  loginUserWithToken,
} from "../actions/authActions";
import toast from "react-hot-toast";

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser: (state, action) => {
      localStorage.removeItem("token");
      state.user = {};
      state.isAuthenticated = false;
      toast.success("Logged Out successfully");
    },
  },
  extraReducers: (builder) => {
    builder

      // signup
      .addCase(UserSignup.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(UserSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        toast.success("Sign up successful");
      })
      .addCase(UserSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : "Unknown error";
        toast.error(
          "Sign up failed",
          action.payload ? action.payload : "Unknown error"
        );
      })

      // login
      .addCase(UserLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(UserLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        toast.success("Logged In successfully");
      })
      .addCase(UserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : "Unknown error";
        toast.error("Logging In failed", action.payload);
      })

      // login
      .addCase(loginUserWithToken.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginUserWithToken.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUserWithToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload : "Unknown error";
        toast.error(
          "Logging In failed",
          action.payload ? action.payload : "Unknown error"
        );
        localStorage.removeItem("token");
      });
  },
});

export const { logOutUser } = authSlice.actions;

export default authSlice.reducer;
