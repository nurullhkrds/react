import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CardContent,
  OutlinedInput,
  InputAdornment,
  Avatar,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import "../styles/Comment.css";
import AddComment from "./AddComment";
import { getCommentPostId } from "../service";


function Comments() {
  const comments = useSelector((state) => state.post.comments);
  const errorComment = useSelector((state) => state.post.commentError);
  const statusComment = useSelector((state) => state.post.statusComment);

 

  if(statusComment==="loading"){
    return <div>Loading...</div>
  }else if(errorComment){
    return <div>{errorComment}</div>
  }else if(comments.length===0){
    return <div>Henüz Yorum Yapılmadı...</div>
  }

  return (
    <div className="CommentDiv">

      {comments.map((comment) => {
        return (
          <OutlinedInput
            
            key={comment.id}
            className="commentRow"
            disabled
            id="outlined-adornment-amount"
            multiline
            inputProps={{ maxLength: 35 }}
            fullWidth
            value={(comment.text)?comment.text:""}
            startAdornment={
              <InputAdornment position="start">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{ pathname: "/users/" + comment.userId }}
                >
                  <Avatar style={{ width: "35px", height: "35px" }}>
                    {comment.userName.charAt(0).toUpperCase()}
                  </Avatar>
                </Link>
              </InputAdornment>
            }
            style={{ color: "black", backgroundColor: "white" }}
          ></OutlinedInput>
        );
      })}
      <hr></hr>
   
    </div>
  );
}

export default Comments;
