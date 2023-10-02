import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { MdLockOpen } from "react-icons/md";
import Auth from "../page/Auth";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { logout } from "../redux/slices/authSlice";
import Notification from "../component/Notification";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userIdd = useSelector((state) => state.auth.authUserId);
  const status = useSelector((state) => state.auth.status);

  console.log(userIdd);

  const handleLogOut = async () => {
    navigate(0);
    await dispatch(logout());
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link style={{ color: "wheat", textDecoration: "none" }} to={"/"}>
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Link>

          {userIdd ? (
            <>
              {status ? (
                <div>Loading...</div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "5px",
                  }}
                >
                  <Typography>
                    <IconButton>
                    
                        <Notification />
                    
                    </IconButton>
                  </Typography>
                  <IconButton onClick={handleLogOut}>
                    <MdLockOpen />
                  </IconButton>
                  <Link
                    style={{ color: "wheat", textDecoration: "none" }}
                    to={`/user/profile`}
                  >
                    <Typography
                      sx={{ flexGrow: 1 }}
                      variant="h6"
                      component="div"
                    >
                      Profile
                    </Typography>
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div style={{ display: "flex" }}>
              <Link
                style={{ color: "wheat", textDecoration: "none" }}
                to={"/login"}
              >
                <Typography variant="h6" component="div">
                  Login
                </Typography>
              </Link>
              <Typography variant="h5" component="div">
                /
              </Typography>
              <Link
                style={{ color: "wheat", textDecoration: "none" }}
                to={"/register"}
              >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Register
                </Typography>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
