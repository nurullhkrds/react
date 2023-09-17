import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { timeDecrement,finishFuc } from "../redux/speedSlice";
import "../styles/Time.css";
function Time() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.speed.time);
  const start = useSelector((state) => state.speed.start);

  if (start) {
    setTimeout(() => {
      dispatch(timeDecrement());
      if(time===1){
        dispatch(finishFuc())
      }
    }, 1000);
  }

  return <div className="timeDiv">{time}</div>;
}

export default Time;
