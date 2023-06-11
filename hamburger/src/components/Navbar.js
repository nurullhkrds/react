import { NavLink } from "react-router-dom";
import logo from '../helperImage/burgerlogo.png';
import '../styles/Navbar.css';
function Navbar() {
    return ( 
        <div className="navbar">
            <div className="main">
                <img src={logo}/>
                <div className="mainLink">
                    <NavLink to={"/"}>Anasayfa</NavLink>
                    <NavLink to={"/menu"}>Menü</NavLink>
                    <NavLink to={"/about"}>Hakkımızda</NavLink>
                    <NavLink to={"/contact"}>İletişim</NavLink>



                </div>
            </div>
        </div>
     );
}

export default Navbar;