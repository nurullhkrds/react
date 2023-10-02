import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import UserDetails from "./page/UserDetails";
import Navbar from "./navbar/Navbar";
import Login from "./component/Auth/Login";
import Registered from "./component/Auth/Registered";
import { Navigate } from "react-router-dom";
import Auth from "./page/Auth";
import ProtectedAuth from "./protected/ProtectedAuth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Profile from "./component/Profile";
import Footer from "./component/Footer";


function App() {
  const userIdd=useSelector((state) => state.auth.authUserId);
  useEffect(()=>{

  },[userIdd])
 

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
      <h2 className="text">Post App</h2>
      </div>
      <div className="divRoutes">
        <Routes>
          <Route  path="/" exact Component={Home} />
          <Route path="/user/profile" Component={Profile}/>
          <Route  path="/user/:userId" Component={UserDetails} />
          <Route  Component={ProtectedAuth}>
              <Route  path="/login" Component={Login} />
              <Route  path="/register" Component={Registered} />
          </Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
