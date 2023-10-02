import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ClipLoader from "react-spinners/ClipLoader";

import "../styles/Post.css";
import { Link } from "react-router-dom";
import { Button, InputAdornment, OutlinedInput } from "@mui/material";
import { addPostAsync } from "../service";
import { useDispatch, useSelector } from "react-redux";

function AddPost({ userId,userName }) {
  const addIsPostLoading = useSelector((state) => state.post.addIsPostLoading);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    dispatch(addPostAsync({ userId: userId, title: title, text: text }));
    setText("");
    setTitle("");
  };

  return (
    <Card className="CardPost" sx={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <Link style={{ textDecoration: "none" }} to={`user/${userId}`}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {userName?userName.charAt(0).toUpperCase():""}
            </Avatar>
          </Link>
        }
        title={
          <OutlinedInput
            id="outlined-adornment-amount"
            multiline
            placeholder="Title"
            inputProps={{ maxLength: 25 }}
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></OutlinedInput>
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <OutlinedInput
            id="outlined-adornment-amount"
            multiline
            placeholder="Text"
            inputProps={{ maxLength: 250 }}
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                {addIsPostLoading ? (
                  <div>
                    <ClipLoader
                      color="green"
                      loading={addIsPostLoading}
                      size={20}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  </div>
                ) : null}
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  style={{
                    background:
                      "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                    color: "white",
                  }}
                >
                  Send
                </Button>
              </InputAdornment>
            }
          ></OutlinedInput>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default React.memo(AddPost);
