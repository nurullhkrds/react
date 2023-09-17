import React from "react";
import "../styles/Result.css";
import { useSelector, useDispatch } from "react-redux";
import { replay } from "../redux/speedSlice";
function Result() {
  const dispatch = useDispatch();
  const countCorrect = useSelector((state) => state.speed.countCorrect);
  const countWrong = useSelector((state) => state.speed.countWrong);
  const tickCount = useSelector((state) => state.speed.tickCount);
  const language = useSelector((state) => state.speed.language);

  return (
    <main className="mainResult">
      <div style={{ textAlign: "center" }} className="divH">
        {language === "EN" ? <h2>Result</h2> : <h2>Sonuç</h2>}
      </div>
      <div className="divContent">
        <section>
          <div>
            {language === "EN" ? (
              <strong>keystroke : </strong>
            ) : (
              <strong>Tuş vuruşu: </strong>
            )}
            <span>{tickCount}</span>{" "}
          </div>
          <div>
            {language === "EN" ? (
              <strong>Correct Words : </strong>
            ) : (
              <strong>Doğru Kelime : </strong>
            )}
            <span style={{ color: "green" }}>{countCorrect}</span>{" "}
          </div>
          <div>
            {language === "EN" ? (
              <strong>Wrong Words : </strong>
            ) : (
              <strong>Yanlış Kelime : </strong>
            )}
            <span style={{ color: "red" }}>{countWrong}</span>{" "}
          </div>
          <div>
            {language === "EN" ? (
              <strong>Accuracy percentage : </strong>
            ) : (
              <strong>Doğruluk Yüzdesi : </strong>
            )}
            <span>
              {countCorrect
                ? (countCorrect / (countCorrect + countWrong)) * 100
                : 0}
            </span>{" "}
          </div>
        </section>
      </div>
      <button onClick={() => dispatch(replay())} className="btnR">
        {language === "EN" ? (
          <strong>Try again </strong>
        ) : (
          <strong>Tekrar dene</strong>
        )}
      </button>
    </main>
  );
}

export default Result;
