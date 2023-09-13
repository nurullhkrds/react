import React from "react";
import "../styles/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../redux/gameSlice";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function Header() {
  const total = useSelector((state) => state.game.total);
  const data = useSelector((state) => state.game.data);
  const newList = useSelector((state) => state.game.newList);
  const dispatch = useDispatch();
  if (newList.length === data.length) {
    return (
        <div className="d-none d-xl-block p-5  mx-auto">
      <div className="header">
        <div>
          <div>
            <a href="https://github.com/nurullhkrds" target="_blank">
              {" "}
              <BsGithub />
            </a>
          </div>
          <div>
            <a href="www.linkedin.com/in/nurullhkardas" target="_blank">
              {" "}
              <BsLinkedin />
            </a>
          </div>
          <div></div>
        </div>
        <div className="totalDiv">Total: {total}</div>
        <div
          style={{ fontFamily: "fantasy", fontSize: "24px", color: "green" }}
        >
          You Won
          <div>
            <i>Score: {total}</i>
          </div>
        </div>
        <div className="btnrestartt" style={{ marginRight: "15px" }}>
          <button
            className="btnrestart"
            onClick={() => dispatch(restartGame())}
          >
            restart
          </button>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div className="d-none d-xl-block p-5  mx-auto"  >
         <div className="header ">
      <div>
        <div>
          <a href="https://github.com/nurullhkrds" target="_blank">
            {" "}
            <BsGithub style={{width:"35px",height:"20px"}}/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/nurullah-karda%C5%9F-8b5433227/" target="_blank">
            {" "}
            <BsLinkedin style={{width:"35px",height:"20px"}} />
          </a>
        </div>
        <div></div>
      </div>

      <div className="totalDiv">Total: {total}</div>
      <div>
        {total <= 0 ? (
          <div>
            {" "}
            <span style={{ color: "red", fontSize: "24px" }}>GAME OVER </span>
          </div>
        ) : null}
      </div>
      <div className="btnrestartt" style={{ marginRight: "15px" }}>
        <button className="btnrestart" onClick={() => dispatch(restartGame())}>
          restart
        </button>
      </div>
    </div>

    </div>
   
  );
}

export default Header;
