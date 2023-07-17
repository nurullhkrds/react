import React from 'react'
import Navigation from './navbar/Navigation'
import Auth from './navbar/Auth'
import { useMatch } from 'react-router-dom'
import Searchh from './navbar/Searchh'

function Navbar() {
  const search=useMatch("/search")
  return (
    <div className='h-[3.75rem] flex items-center justify-between px-6'>
      <Navigation/>
      {
        search && (
         <Searchh/>
         
        )
      }
      
      <Auth/>
    </div>
  )
}

export default Navbar