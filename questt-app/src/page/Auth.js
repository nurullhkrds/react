import { Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Auth() {
  return (
    <div  >
        <div style={{display:"flex"}}>
        <Link style={{color:"wheat",textDecoration:"none"}} to={"/login"}>
          <Typography variant="h6" component="div" >
            Login
          </Typography>
            
          </Link>
          <Typography variant="h5" component="div" >
            /
          </Typography>
          <Link style={{color:"wheat",textDecoration:"none"}} to={'/register'}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Register
          </Typography>
            
          </Link>

          

        </div>
        <div>
          <Outlet/>
          </div>
        

        
    </div>

  )
}

export default Auth