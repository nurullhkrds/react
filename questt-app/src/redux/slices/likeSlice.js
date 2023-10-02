import { createSlice } from "@reduxjs/toolkit";
import {
  UserActivityAsync,
  addLikeAsync,
  authLoginAsync,
  deleteLikeAsync,
  getLikesPostIdAndUserIdAsync,
  getLikesPostIdAsync,
  getLikesUserIdAsync,
  getOneUserAsync,
} from "../../service";

export const likeSlice = createSlice({
  name: "like",
  initialState: {
    //likes
    likes: [],
    likeStatus: "idle",
    likeErrors: null,

    myLike: null,
    myLikeStatus: "idle",
    myLikeErrors: null,

    likeCurrentUser: [],
    statusCurrentUser: "idle",
    errorCurrentUser: null,
  },
  reducers: {},
  extraReducers: {
    //getLikesPostId
    [getLikesPostIdAsync.pending]: (state, action) => {
      state.likeStatus = "loading";
    },
    [getLikesPostIdAsync.fulfilled]: (state, action) => {
      state.likes = action.payload;
      state.likeStatus = "succes";
    },
    [getLikesPostIdAsync.rejected]: (state, action) => {
      state.likeStatus = "failed";
      state.likeErrors = action.error.message;
    },

    //MY LİKE

    [getLikesPostIdAndUserIdAsync.pending]: (state, action) => {
      state.myLikeStatus = "loading";
    },
    [getLikesPostIdAndUserIdAsync.fulfilled]: (state, action) => {
      state.myLike = action.payload;
      state.myLikeStatus = "succes";
    },
    [getLikesPostIdAndUserIdAsync.rejected]: (state, action) => {
      state.myLikeStatus = "failed";
      state.myLikeErrors = action.error.message;
    },

    //Add Like

    [addLikeAsync.fulfilled]: (state, action) => {
      state.likes.push(action.payload);
      state.likeStatus = "succes";
    },

    //DeleteLike

    [deleteLikeAsync.fulfilled]: (state, action) => {
      const like = action.payload;
      //const newLikeList=state.likes.filter((like)=>like.id!==like)
      //state.likes=newLikeList;
      //state.likeStatus="succes"
    },

    //currentUserLikes

    [getLikesUserIdAsync.pending]: (state, action) => {
      state.statusCurrentUser = "loading";
    },
    [getLikesUserIdAsync.fulfilled]: (state, action) => {
      state.likeCurrentUser = action.payload;
      state.statusCurrentUser = "succes";
    },
    [getLikesUserIdAsync.rejected]: (state, action) => {
      state.statusCurrentUser = "failed";
      state.errorCurrentUser = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = likeSlice.actions;

export default likeSlice.reducer;
