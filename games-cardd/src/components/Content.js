import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import "../styles/Content.css";
import {
  closedCard,
  restartSelected,
  succesOpenCard,
} from "../redux/gameSlice";

function Content() {
  const data = useSelector((state) => state.game.data);
  const selected = useSelector((state) => state.game.selected);
  const total = useSelector((state) => state.game.total);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(selected.length);
    if (selected.length === 2) {
      if (selected[0].img !== selected[1].img) {
        setTimeout(() => {
          dispatch(closedCard());
        }, 500);
      } else {
        dispatch(succesOpenCard());
        dispatch(restartSelected());
      }
    }
  }, [selected]);

  if (total <= 0) {
    return (
      
        <button disabled
          className="mt-1 border border-green w-50 h-50 contentClass"
        >
          <div className="container ">
            <div className="row row-cols-4 contentDiv ">
              {data.map((card, key) => {
                return (
                  <div key={key} className="cardClass">
                    <Card card={card} key={key} />
                  </div>
                );
              })}
            </div>
          </div>
        </button>
     
    );
  }

  return (
   
      <button style={{background:"brown"}} className="mt-1 border border-green w-50 h-50 contentClass">
        <div className="container ">
          <div className="row row-cols-5 contentDiv ">
            {data.map((card, key) => {
              return (
                <div key={key} className="cardClass">
                  <Card card={card} key={key} />
                </div>
              );
            })}
          </div>
        </div>
      </button>
    
  );
}

export default Content;
