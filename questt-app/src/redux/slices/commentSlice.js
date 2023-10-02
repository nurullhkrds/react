import { createSlice } from "@reduxjs/toolkit";
import { getCommentUserIdAsync } from "../../service";


export const commentSlice = createSlice({
  name: "comment",
  initialState: {

    commentCurrentUser:[],
    statusCommentUser:"idle",
    errorCommentUser:null



  },
  reducers: {

  },
  extraReducers: {


    [getCommentUserIdAsync.pending]:(state,action)=>{
        state.statusCommentUser="loading"
    },
    [getCommentUserIdAsync.fulfilled]:(state,action)=>{
        state.commentCurrentUser=action.payload;
        state.statusCommentUser="succes"
    },
    [getCommentUserIdAsync.rejected]:(state,action)=>{
      state.statusCommentUser="failed"
      state.errorCommentUser=action.error.message;
    },
   


   
  },
});

export const { logout } = commentSlice.actions;

export default commentSlice.reducer;
