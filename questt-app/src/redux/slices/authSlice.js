import { createSlice } from "@reduxjs/toolkit";
import {
  UserActivityAsync,
  authLoginAsync,
  getOneUserAsync,
} from "../../service";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authUserId: parseInt(localStorage.getItem("currentUserId")),
    authUserName: localStorage.getItem("currentUserName"),
    token: localStorage.getItem("token"),
    status: false,
    error: null,

    //activity
    activityList: [],
    activityStatus: "idle",
    activityError: null,

    //getOneUserData
    user: null,
    userStatus: "idle",
    userError: null,
  },
  reducers: {
    logout: (state) => {
      state.authUserId = null;
      state.authUserName = "";
      state.token = "";
      localStorage.removeItem("currentUserId");
      localStorage.removeItem("currentUserName");
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    //authLogin
    [authLoginAsync.pending]: (state) => {
      state.status = true;
    },
    [authLoginAsync.fulfilled]: (state, action) => {
      state.authUserId = action.payload.userId;
      state.authUserName = action.payload.authUserName;
      state.token = action.payload.token;
      state.status = false;
    },
    [authLoginAsync.rejected]: (state, action) => {
      state.status = false;
      state.error = action.error.message;
    },

    //get userActivity
    [UserActivityAsync.pending]: (state) => {
      state.activityStatus = "loading";
    },
    [UserActivityAsync.fulfilled]: (state, action) => {
      state.activityList = action.payload;
      state.activityStatus = "succes";
    },
    [UserActivityAsync.rejected]: (state, action) => {
      state.activityStatus = "failed";
      state.activityError = action.error.message;
    },

    //Get One user
    [getOneUserAsync.pending]: (state) => {
      state.userStatus = "loading";
    },
    [getOneUserAsync.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.userStatus = "succes";
    },
    [getOneUserAsync.rejected]: (state, action) => {
      state.userStatus = "failed";
      state.userError = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;

export default authSlice.reducer;
