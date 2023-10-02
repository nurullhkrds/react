import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Card, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/LikeList.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  overflow:"auto",
  transform: "translate(-50%, -50%)",
  width: 400,
  height:500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function LikesList({ postLikes }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button style={{ fontSize: "10px" }} onClick={handleOpen}>
        Beğenenler <FavoriteIcon style={{ fontSize: "10px" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          {postLikes.length ? (
            postLikes.map((likes) => {
              return (
                <div className="divLikesList">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`user/${likes.userId}`}
                  >
                    <div className="divTextAndAvatar">
                    <Avatar aria-label="recipe">
                      {likes.userName?likes.userName.charAt().toUpperCase():"?"}
                    </Avatar>
                    <p style={{marginLeft:"5px"}}>{likes.userName?likes.userName.toUpperCase():"?"}</p>

                    </div>
                  
                  </Link>
                </div>
              );
            })
          ) : (
            <div style={{ textAlign: "center", padding: "10px" }}>
                Henüz kimse beğenmedi...
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default LikesList;
