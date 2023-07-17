import React from 'react'
import { BiHomeAlt,BiSearch,BiLibrary} from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import "./Menu.css";


function Menu() {
  return (
    <div className='navlinkk px-2 '>
        <ul className='flex flex-col'>
            <li> 
                <NavLink  to={"/"}   className='h-10 gap-x-4 flex items-center text-sm text-link rounded hover:text-white px-4  ' >
                <BiHomeAlt/> Ana sayfa
                </NavLink>
            </li>
            <li>
                <NavLink  to={"/search"} className='h-10 gap-x-4 flex items-center text-sm text-link rounded hover:text-white px-4 ' >
                   <BiSearch/> Ara
                </NavLink>
            </li>
            <li>
                <NavLink to={"/collections"} className='h-10 gap-x-4 flex items-center text-sm text-link rounded hover:text-white px-4 '>
                  <BiLibrary/>  Kitaplık
                </NavLink>
            </li>
        </ul>

    </div>
  )
}

export default Menu