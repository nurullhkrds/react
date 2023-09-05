import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import '../../styles/Admin.css'

function ProtectedAdmin() {
    const {loggedIn,user}=useContext(AuthContext)

  return (
    <>
    {
        user?.role!=="admin"?<Navigate to={"/"}/>:<Outlet/>
        


    }
    </>
  )
}

export default ProtectedAdmin