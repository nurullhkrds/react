import React, { useContext } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { Image,Button, ButtonGroup } from "@chakra-ui/react";
import { AuthContext } from "../contexts/AuthContext";
import { BsFillBasketFill } from "react-icons/bs";
import { BasketContext } from "../contexts/BasketContext";

function Navbar() {
  const { loggedIn, user } = useContext(AuthContext);
  const { basket, total } = useContext(BasketContext);
  console.log(loggedIn);
  return (
    <nav className="nav">
      <div className="left">
        <div className="logo">
          <Link to={"/"}>
            <Image 
            width={"50px"}
            borderRadius={"100px"}
            height={"50px"}
            background={"black"}
            src="https://t3.ftcdn.net/jpg/04/06/91/62/360_F_406916265_hxmrv7wgw9SZN9871yebxQJAX7HsHdNp.jpg" />
            </Link>
        </div>
        <ul className="menu">
          <li style={{marginTop:"20px",color:"white"}}>
            <Link  style={{color:"white"}}  to={"/"}>Products</Link>
          </li>
        </ul>
      </div>

      <div className="right">
        {loggedIn ? (
         
            ( user?.role === "user" ? (
            <>
              <div className="totalDiv">
                <div>{total}</div>
                <div style={{ marginLeft: "5px" }}>
                  <strong>TL</strong>
                </div>
              </div>

              <Link to={"/basket"}>
                <div className="basketDiv">
                  <div className="basketTotalDiv">{basket.length}</div>

                  <BsFillBasketFill style={{ width: "30px", height: "30px" }} />
                </div>
              </Link>
              <Link style={{ margin: "0px" }} to={"/profile"}>
          <Button colorScheme="gray">Profile</Button>
        </Link> 
            </>
            ) : (
            <>
              <Link to={"/admin"}>
                <Button colorScheme="green" variant={"ghost"}>
                  Admin
                </Button>
              </Link>
              <Link style={{ margin: "0px" }} to={"/profile"}>
          <Button colorScheme="gray">Profile</Button>
        </Link> 
              
            </>
            ) )
         
        ) : (
          <>
            <Link to={"/signin"}>
              <Button colorScheme="blue">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button colorScheme="blue">Register</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
