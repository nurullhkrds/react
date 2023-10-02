import React, { useEffect } from 'react'
import Posts from '../component/Posts'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsAsync } from '../service';
import '../styles/Home.css'
import AddPost from '../component/AddPost';
function Home() {

  const dispatch=useDispatch()
  const posts=useSelector((state)=>state.post.posts)
  const status=useSelector((state)=>state.post.status)
  const error=useSelector((state)=>state.post.error)
  const userIdd=useSelector((state) => state.auth.authUserId);

  useEffect(()=>{
    if(status==="idle"){
      getPosts()
    } 

  },[status,dispatch,posts])

  const getPosts =async()=>{
    await dispatch(getPostsAsync())
  }
  
  if (status==="loading") {
    return <div>Loading...</div>
    
  }else if(status==="failed"){
    return <div>{error}</div>
  }
  
  return (
    <div className="homeDiv">
      {
        userIdd ? 
         <AddPost userId={localStorage.getItem("currentUserId")} userName={localStorage.getItem("currentUserName")} />
         :""
        
      }
      <div style={{display:"flex",flexDirection:"column-reverse"}} >
      {
        posts.map((post)=>{
          return <Posts  key={post.id} createDate={post.createDate} pUserId={post.userId} userName={post.userName} post={post} postLikes={post.postLikes} postId={post.id} text={post.text} title={post.title} />
        })
      }

      </div>
      
      
    </div>
  )
}

export default Home