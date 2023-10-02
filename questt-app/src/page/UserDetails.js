import React, { useEffect } from "react";
import Avatar from "../component/Avatar";
import UserActivity from "../component/UserActivity";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneUserAsync } from "../service";

function UserDetails() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
  
      
        dispatch(getOneUserAsync(userId));
    
       
      
   
  }, [dispatch, userId]);


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
     {user?<Avatar  avatar={user.avatar} userId={userId} userName={user.userName} />:""} 
     
    </div>
  );
}

export default UserDetails;
