import React, { useState } from "react";
import "../styles/Input.css";
import { useSelector, useDispatch } from "react-redux";
import {
  writedWord,
  next,
  getNewWords,
  startFunc,
  tickCountFunc
} from "../redux/speedSlice";
function Input() {
  const dispatch = useDispatch();
  const index = useSelector((state) => state.speed.index);
  const start = useSelector((state) => state.speed.start);
  const tickCount = useSelector((state) => state.speed.tickCount);
  const time = useSelector((state) => state.speed.time);


  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value.trim());
    dispatch(tickCountFunc())
    if(start===false&&time===60){
        dispatch(startFunc())
        setValue("")
    }
   
   
    
    if (spaceX(e.target.value)) {
      if (e.target.value.trim() !== "") {
        dispatch(writedWord(value));
        setValue("");
        dispatch(next());
      }

      if (index === 49) {
        dispatch(getNewWords());
      }
    }
   

  };

  

  const spaceX = (string) => {
    const active = string.includes(" ");
    return active;
  };
  return (
    <div className="inputDiv">
      <input disabled={time===0} className="input" value={value} onChange={handleChange} />
      
    </div>
  );
}

export default Input;
