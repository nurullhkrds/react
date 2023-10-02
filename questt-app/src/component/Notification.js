import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdNotificationsActive } from "react-icons/md";
import { IconButton } from '@mui/material';
import UserActivity from './UserActivity'
import { useSelector, useDispatch } from "react-redux";
import { UserActivityAsync, getOneUserAsync } from '../service';

const style = {
  position: 'absolute',
  top: '28%',
  left: '85%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Notification() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch=useDispatch()
  const activityList=useSelector((state) => state.auth.activityList);
  const activityStatus=useSelector((state) => state.auth.activityStatus);




  React.useEffect(()=>{
    if(activityStatus==="idle"){
      dispatch(UserActivityAsync(parseInt(localStorage.getItem("currentUserId"))))

    }
    
    console.log(activityList);
  },[activityList,dispatch])

  return (
    <div>
      <IconButton style={{}} onClick={handleOpen}><MdNotificationsActive/></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {open?<UserActivity activityList={activityList}/>:""}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}