import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Paragraf.css";
import { correctWordsFunc, wrongWordsFunc} from "../redux/speedSlice";

function Paragraf() {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.speed.words);
  const index = useSelector((state) => state.speed.index);
  const writeWord = useSelector((state) => state.speed.writeWord);
  const correctWordss = useSelector((state) => state.speed.correctWords);
  const wrongWordss = useSelector((state) => state.speed.wrongWords);
 
  const language = useSelector((state) => state.speed.language);



  useEffect(() => {
    if(language==="TR"){
      if (words[index===0?0:index-1].turkish === writeWord) {
        dispatch(correctWordsFunc(words[index===0?0:index-1]));
     
  
        
  
      } else {
        dispatch(wrongWordsFunc(words[index===0?0:index-1]));
       
        
      }

    }
    else{
      if (words[index===0?0:index-1].english === writeWord) {
        dispatch(correctWordsFunc(words[index===0?0:index-1]));
     
  
        
  
      } else {
        dispatch(wrongWordsFunc(words[index===0?0:index-1]));
       
        
      }

    }
    

   
   


  }, [writeWord,index]);

 

  return (
    <div className="container">
      <div className="words">
        {words.map((word, key) => {
          return (
            <div style={correctWordss.includes(word)?{color:"green"}:wrongWordss.includes(word)?{color:"red"}:null}  key={key} className="wordDiv">
             
              <span className={index === key ? "current" : null}>
                
                {language==="EN" && word.english.toLowerCase()}
                {language==="TR" && word.turkish.toLowerCase()}
                
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default React.memo(Paragraf);
