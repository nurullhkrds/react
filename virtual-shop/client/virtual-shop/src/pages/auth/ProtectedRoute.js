import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function ProtectedRoute({admin}) {
    const {loggedIn}=useContext(AuthContext)

 
   


    return (
        <>
       
       
        {
            loggedIn ? <Outlet/> : <Navigate to='/'/>
           
             
        }
       

        
       
         </>
    )
}

export default ProtectedRoute