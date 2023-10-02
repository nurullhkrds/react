import React, { useEffect } from "react";
import Avatar from "../component/Avatar";
import { useSelector, useDispatch } from "react-redux";
import {
  getCommentUserIdAsync,
  getLikesUserIdAsync,
  getOneUserAsync,
  getPostsAsync,
  getPostsByUserIdAsync,
} from "../service";
import Posts from "./Posts";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  //CurrentUserPosts
  const postsUserId = useSelector((state) => state.post.postsUserId);
  const statusUserIdPosts = useSelector(
    (state) => state.post.statusUserIdPosts
  );



  //CurrentUserComments
  const commentCurrentUser = useSelector((state) => state.comment.commentCurrentUser);
  const statusCommentUser = useSelector((state) => state.comment.statusCommentUser);


  //CurrentUserLikes
  const likeCurrentUser = useSelector((state) => state.like.likeCurrentUser);
  const statusLikeUser = useSelector((state) => state.like.statusCurrentUser);




  useEffect(() => {
    dispatch(getOneUserAsync(parseInt(localStorage.getItem("currentUserId"))));
  }, [dispatch, parseInt(localStorage.getItem("currentUserId"))]);

  useEffect(() => {
    if (statusUserIdPosts === "idle") {
      getPosts();
    }
  }, [statusUserIdPosts, dispatch, postsUserId]);


  useEffect(() => {
    if (statusCommentUser === "idle") {
      getComments();
    }

  }, [statusCommentUser, dispatch, commentCurrentUser]);

console.log(commentCurrentUser);
  useEffect(() => {
    if (statusLikeUser === "idle") {
      getLikes();
    }
  }, [statusLikeUser, dispatch, likeCurrentUser]);
  







  const getPosts = async () => {
    await dispatch(
      getPostsByUserIdAsync(parseInt(localStorage.getItem("currentUserId")))
    );
  };

  const getComments = async () => {
    await dispatch(
      getCommentUserIdAsync()
    );
  };

  const getLikes = async () => {
    await dispatch(
      getLikesUserIdAsync()
    );
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center",width:"100%" }}
    >
      <section style={{display:"flex",justifyContent:"space-around",width:"100%"}}>

        {user ? (
          <Avatar
            avatar={user.avatar}
            userId={user.id}
            userName={user.userName}
          />
        ) : (
          ""
        )}
      
       
      
        
      </section>
      <section
        style={{
          marginTop: "50px",
          border: "1px solid",
          width: "620px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "15px",
          background: "cornflowerblue",
          overflow:"auto",
          height:"1200px"
        }}
      >
        <h1
          style={{
            padding: "10px",
            fontFamily: "monospace",
            color: "gainsboro",
            marginBottom:"50px "
            
          }}
        >
          Gönderilerim
        </h1>
        <div style={{ display: "flex", flexDirection: "column-reverse"}}>
          {postsUserId.map((post) => {
            return (
              <Posts
                key={post.id}
                pUserId={post.userId}
                userName={post.userName}
                post={post}
                postLikes={post.postLikes}
                postId={post.id}
                text={post.text}
                title={post.title}
                createDate={post.createDate}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Profile;
