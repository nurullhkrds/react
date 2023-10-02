import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Posts from './Posts'
import { useSelector, useDispatch } from "react-redux";
import { getOnePostAsync } from '../service';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PopUp({setOpenPopup,openPopup,activityPostId}) {
    const dispatch=useDispatch()
    const post=useSelector((state)=>state.post.postOne)
    const statusPostOne=useSelector((state)=>state.post.statusPostOne)

 
    React.useEffect(()=>{
    },[post,activityPostId])

    console.log(post);

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <div >
     
      <Dialog
      style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}
        fullScreen
        open={openPopup}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
       
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
       
      <Posts  pUserId={post?post.userId:1} userName={post?post.userName:""} postLikes={post?post.postLikes:[]} postId={post?post.id:1} text={post?post.text:""} title={post?post.title:""} />
      </Dialog>
    </div>
  );
}
