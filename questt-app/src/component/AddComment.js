import React, { useState } from "react";
import {
  CardContent,
  InputAdornment,
  Avatar,

  Input,
} from "@mui/material";
import {  Link } from "react-router-dom";
import {  useDispatch,useSelector } from "react-redux";
import { addCommentAsync } from "../service";

function AddComment({ postIdd }) {
  const userIdd=useSelector((state) => state.auth.authUserId);
  const userName=useSelector((state) => state.auth.authUserName);

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault()
    
    await dispatch(addCommentAsync({ postId: postIdd, userId: userIdd, text: text }));
    setText("")
   
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit} variant="standard">
       
        <Input
        disabled={userIdd?false:true}
        placeholder={userIdd?"Yorum yap...":"Yorum yapmak için giriş yap !..."}
        fullWidth
        style={{height:"80px",width:"300px"}} 
          id="input-with-icon-adornment"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              {
                userIdd?  <Link
                style={{ textDecoration: "none" }}
                to={{ pathname: "/users/" + userIdd }}
              >
                <Avatar style={{ width: "35px", height: "35px" }}>{userName?userName.charAt(0).toUpperCase():"?"}</Avatar>
              </Link>
              :<Avatar style={{ width: "35px", height: "35px" }}>{"?"}</Avatar>

              }
            
            </InputAdornment>
          }
        />
      </form>
    </CardContent>
  );
}

export default AddComment;
