import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../styles/Post.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addLikeAsync, deleteLikeAsync, getCommentPostId } from "../service";
import Comments from "./Comments";
import AddComment from "./AddComment";
import LikesList from "./LikesList";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Posts({
  createDate,
  userName,
  postId,
  postLikes,
  title,
  text,
  pUserId,
}) {
  const postDate = new Date(createDate);
  const now = new Date();

  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const [like, setLike] = useState(false);
  const [likeId, setLikeId] = useState();

  const [postIdd, setPostIdd] = useState();
  const [likeCount, setLikeCount] = useState();
  const userIdd = useSelector((state) => state.auth.authUserId);

  const dateString = () => {
    if (now - postDate < 60002) {
      return "Şimdi";
    } else if (now - postDate < 240000) {
      return "Az önce";
    } else if (now - postDate < 600000) {
      return "5 dakika önce";
    } else if (now - postDate < 1800000) {
      return "15 dakika önce";
    } else if (now - postDate < 3600000) {
      return "30 dakika önce";
    } else if (now - postDate < 7200000) {
      return "1 saat önce";
    } else if (now - postDate < 10800000) {
      return "2 saat önce";
    } else if (now - postDate < 15800000) {
      return "3 saat önce";
    } else if (now - postDate < 25800000) {
      return "4 saat önce";
    } else if (now - postDate < 36000000) {
      return "10 saat önce";
    } else if (now - postDate < 86400000) {
      return "23 saat önce";
    } else if (now - postDate < 172800000) {
      return "1 gün önce";
    } else if (now - postDate < 604800017) {
      return "1 hafta önce";
    }
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
    dispatch(getCommentPostId(postId));
    setPostIdd(postId);
  };

  const checkLikes = () => {
    if (postLikes) {
      const myLiked = postLikes.find((like) => like.userId === userIdd);
      if (myLiked != null) {
        setLikeId(myLiked.id);
        setLike(true);
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    setLikeCount(postLikes ? postLikes.length : 0);
    checkLikes();
  }, []);

  const handleLike = async () => {
    setLike((prev) => !prev);
    const myLiked = postLikes.find((like) => like.userId === userIdd);
    if (myLiked != null) {
      setLikeId(myLiked.id);
    }
    if (like === false) {
      await dispatch(addLikeAsync({ userId: userIdd, postId: postId }));
      setLikeCount((prev) => prev + 1);
    } else {
      await dispatch(deleteLikeAsync(likeId));
      setLikeCount((prev) => prev - 1);
    }
  };
  return (
    <Card className="CardPost" sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Link style={{ textDecoration: "none" }} to={`user/${pUserId}`}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {userName ? userName.charAt(0).toUpperCase() : ""}
            </Avatar>
          </Link>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={dateString()}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          disabled={userIdd ? false : true}
          style={like ? { color: "red" } : null}
          onClick={handleLike}
          aria-label="add to favorites"
        >
          <FavoriteIcon />{" "}
          <span style={{ fontSize: "19px", marginLeft: "5px" }}>
            {likeCount}
          </span>
        </IconButton>
        <LikesList postLikes={postLikes} />

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <MessageIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Comments postIdd={postIdd} />
      </Collapse>

      <AddComment postIdd={postId} />
    </Card>
  );
}

export default Posts;
