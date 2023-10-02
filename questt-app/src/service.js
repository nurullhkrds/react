import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'




export const getPostsAsync=createAsyncThunk('posts/getPostsAsync',async ()=>{
    const data=await axios(`/posts`)
    return data.data
})
export const getPostsByUserIdAsync=createAsyncThunk('posts/getPostsByUserIdAsync',async (userId)=>{
    const data=await axios(`/posts?userId=${userId}`)
    return data.data
})

export const addPostAsync=createAsyncThunk('posts/addPostAsync',async (post)=>{
    const data=await axios.post(`/posts`,post,{
        headers:{
            Authorization:localStorage.getItem("token")
          },
    })
    return data.data;
})

export const getCommentPostId=createAsyncThunk('comments/getCommentPostId',async (postId)=>{
    const data=await axios(`/comments?postId=${postId}`)
    return data.data.data;
})

export const getCommentUserIdAsync=createAsyncThunk('comments/getCommentUserIdAsync',async ()=>{
    const data=await axios(`/comments?userId=${parseInt(localStorage.getItem("currentUserId"))}`)
    return data.data.data;
})

export const addCommentAsync=createAsyncThunk('comments/addCommentAsync',async (comment)=>{
    const data=await axios.post(`/comments`,comment,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
    return data.data.data;
})



export const authLoginAsync=createAsyncThunk('auth/authLoginAsync',async (login)=>{
    const data=await axios.post(`/auth/login`,login)
    localStorage.setItem("token",data.data.message)
    localStorage.setItem("currentUserId",data.data.userId)
    localStorage.setItem("currentUserName",data.data.userName)
    console.log(data.data);
    return data.data;
})

export const authRegisterAsync=createAsyncThunk('auth/authRegisterAsync',async (register)=>{
    const data=await axios.post(`/auth/register`,register)
    return data.data;
})


export const UserActivityAsync=createAsyncThunk('auth/UserActivityAsync',async (userId)=>{
    const data=await axios.get(`/users/activity/${userId}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })

    return data.data;
})


export const getOneUserAsync=createAsyncThunk('auth/getOneUserAsync',async (userId)=>{
    const data=await axios.get(`/users/${userId}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })

    return data.data.data;
})

export const updateUserAsync=createAsyncThunk('auth/updateUserAsync',async (avatar)=>{
    
    const data=await axios.put(`/users/${localStorage.getItem("currentUserId")}`,avatar,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
   
    
    return data.data.data;
})



export const getOnePostAsync=createAsyncThunk('posts/getOnePostAsync',async (postId)=>{
    const data=await axios.get(`/posts/${postId}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
    return data.data
})



export const getLikesPostIdAsync=createAsyncThunk('posts/getLikesAsync',async (postId)=>{
    const data=await axios.get(`/likes?postId=${postId}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
    return data.data.data
})

export const getLikesUserIdAsync=createAsyncThunk('posts/getLikesUserIdAsync',async ()=>{
    const data=await axios.get(`/likes?userId=${parseInt(localStorage.getItem("currentUserId"))}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
    return data.data.data
})

export const getLikesPostIdAndUserIdAsync=createAsyncThunk('posts/getLikesPostIdAndUserIdAsync',async (postId)=>{
    const data=await axios.get(`/likes?postId=${postId}&userId=${parseInt(localStorage.getItem("currentUserId"))}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
    return data.data.data
})


export const addLikeAsync=createAsyncThunk('postLike/addLikeAsync',async (like)=>{
    const data=await axios.post(`/likes`,like,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
    return data.data.data;
})
export const deleteLikeAsync=createAsyncThunk('postLike/deleteLikeAsync',async (likeId)=>{
    const data=await axios.delete(`/likes/${likeId}`,{
        headers:{
            Authorization:localStorage.getItem("token"),
          },
    })
    return data.data.data;
})