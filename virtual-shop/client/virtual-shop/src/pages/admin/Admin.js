import { Box } from '@chakra-ui/react';
import React from 'react'
import { Routes, Route, Link ,useLocation, Outlet, NavLink} from "react-router-dom";
import Home from './Home'
import Orders from './Orders'
import Products from './Products'


function Admin() {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
    <div>
        <nav className='navAdmin' >
            <ul className='admin-menu'>
               
                <li>
                    <NavLink to={"orders"}>Orders</NavLink>
                </li>
                <li>
                    <NavLink to={"products"}>Products</NavLink>
                </li>
              
                
            </ul>
            
        </nav>

        <Box mt={"5"}>
            <Outlet/>
        
        </Box>
    </div>
  )
}

export default Admin