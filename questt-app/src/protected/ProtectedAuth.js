import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedAuth() {
  return (
    <div>
        {
            localStorage.getItem("currentUserId")!==null?<Navigate to={"/"}/>:<Outlet/>
        
        }
        </div>
  )
}

export default ProtectedAuth