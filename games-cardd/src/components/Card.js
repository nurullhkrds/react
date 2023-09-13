import React from "react";
import photo from "../helper/nonselected.png";
import '../styles/Card.css'
import { useDispatch,useSelector } from "react-redux";
import { openCard } from "../redux/gameSlice";

function Card({ card }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.game.selected);
  const newList = useSelector((state) => state.game.newList);
  
 
  const handleOpen=()=>{
    if(selected.length<2){
      dispatch(openCard(card.id))

    }
    else{
      return;
    }
   
  }
  if (card.active) {
   
    return ( 
      <div style={newList.includes(card)?{opacity:"0.1"}:null} className="mb-5 divImg"  >
        <img style={{width:"75px"}} src={card.img} />
      </div>
    );
  }
  return (
    <div className="mb-5 openCardClass" onClick={handleOpen}>
      <img style={{width:"120px"}} src={photo} />
    </div>
  );
}

export default Card;
