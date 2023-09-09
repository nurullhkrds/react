import React from 'react'
import Search from './Search'
import '../styles/Header.css'


function Header() {
  return (
    <div className='HeaderDiv'>
        <h2 style={{color:"cadetblue",marginBottom:"35px"}}>NotesApp</h2>
        <Search/>
    </div>
  )
}

export default Header