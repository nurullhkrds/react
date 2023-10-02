import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import { UserActivityAsync, getOnePostAsync } from "../service";
import { Button } from "@mui/material";
import PopUp from "./PopUp";
import { MdComment, MdFavorite } from "react-icons/md";

function UserActivity({ userId, activityList }) {
  const dispatch = useDispatch();
  const [openPopup, setOpenPopup] = React.useState(false);
  const [activityPostId, setActivityPostId] = useState();

  const handleActivityClick = (postId) => {
    setOpenPopup(true);
    setActivityPostId(postId);
    dispatch(getOnePostAsync(postId));
  };

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>Kullanıcı Hareketleri</TableRow>
            </TableHead>
            <TableBody style={{ marginTop: "5px" }}>
              {activityList.length ? (
                activityList.map((activity, key) => {
                  return (
                    <Button
                      onClick={() => handleActivityClick(activity[1])}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "50px",
                      }}
                    >
                      <TableRow style={{ display: "flex" }} key={key}>
                        {activity[0].includes("beğendi") ? (
                          <MdFavorite
                            style={{ width: "20px", height: "20px" }}
                          />
                        ) : (
                          <MdComment
                            style={{ width: "20px", height: "20px" }}
                          />
                        )}
                        {activity[3]} kullanıcı isimli kişi {activity[0]}
                      </TableRow>
                    </Button>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell>
                    Henüz herhangi bir yorum veya beğeni yok...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {openPopup ? (
        <PopUp
          setOpenPopup={setOpenPopup}
          openPopup={openPopup}
          activityPostId={activityPostId}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default UserActivity;
