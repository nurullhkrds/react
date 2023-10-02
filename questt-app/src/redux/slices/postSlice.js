import { createSlice } from '@reduxjs/toolkit'
import { addCommentAsync, addLikeAsync, addPostAsync, getCommentPostId, getOnePostAsync, getPostsAsync, getPostsByUserIdAsync } from '../../service'


export const postSlice = createSlice({
  name: 'post',
  initialState:{
    //post
    posts:[],
    status:"idle",
    isLoading:false,
    error:null,
    //addpost
    addIsPostLoading:false,
    errorAddPost:null,
    //get comment
    comments:[],
    statusComment:false,
    commentError:null,
    //add comment
    addIsCommentLoading:false,
    errorAddComment:null,


    //addLike
    addIsLikeLoading:false,
    erroAddLike:null,



    //getOnePost
    postOne:null,
    statusPostOne:"idle",
    errorPostOne:null,



    //getByUserIdPosts
    postsUserId:[],
    statusUserIdPosts:"idle",
    errorUserIdPosts:null,


  },
  reducers: {
   
  },
  extraReducers:{
    //get full posts
    [getPostsAsync.pending]:(state,action)=>{
        state.status="loading"
    },
    [getPostsAsync.fulfilled]:(state,action)=>{
        state.posts=action.payload;
        state.status="succes"
    },
    [getPostsAsync.rejected]:(state,action)=>{
      state.status="failed"
      state.error=action.error.message;
    },

    //getByUserIdPosts

    [getPostsByUserIdAsync.pending]:(state,action)=>{
      state.statusUserIdPosts="loading"
  },
  [getPostsByUserIdAsync.fulfilled]:(state,action)=>{
      state.postsUserId=action.payload;
      state.statusUserIdPosts="succes"
  },
  [getPostsByUserIdAsync.rejected]:(state,action)=>{
    state.statusUserIdPosts="failed"
    state.errorUserIdPosts=action.error.message;
  },
    

    //getOnePost
    [getOnePostAsync.pending]:(state)=>{
      state.statusPostOne="loading"
  },
  [getOnePostAsync.fulfilled]:(state,action)=>{
      state.postOne=action.payload;
      state.statusPostOne="succes"

  },
  [getOnePostAsync.rejected]:(state,action)=>{
    state.statusPostOne="failed"
    state.error=action.error.message;
  },

    //Add Post
    [addPostAsync.pending]:(state)=>{
      state.commentLoading=true;
    },
    [addPostAsync.fulfilled]:(state,action)=>{
      
      state.posts.push(action.payload)
      state.commentLoading=false;

    },
    [addPostAsync.rejected]:(state,action)=>{
      state.commentLoading=false;
      state.commentError=action.error.message;

    },

    //getComments
    [getCommentPostId.pending]:(state)=>{
      state.statusComment=true;
    },
    [getCommentPostId.fulfilled]:(state,action)=>{
      state.comments=action.payload
      state.statusComment=false;

    },
    [getCommentPostId.rejected]:(state,action)=>{
      state.statusComment=false;
      state.errorAddPost=action.error.message;

    },

    //AddComment
    [addCommentAsync.pending]:(state)=>{
      state.addIsCommentLoading=true;
    },
    [addCommentAsync.fulfilled]:(state,action)=>{
      state.comments.push(action.payload)
      state.addIsCommentLoading=false;

    },
    [addCommentAsync.rejected]:(state,action)=>{
      state.addIsCommentLoading=false;
      state.errorAddComment=action.error.message;

    },
    
  

    

  }
})

// Action creators are generated for each case reducer function
export const { } = postSlice.actions

export default postSlice.reducer