import React from 'react'
import '../styles/MyLink.css'
import MyPhoto from '../assets/Nurullah kardaş.jpg'
import { BsGithub } from "react-icons/bs";


function MyLink() {
  return (
    <div className='footer-mylink'>

      <a href='https://github.com/nurullhkrds?tab=repositories' target='_blank' className='footer-btn'>
      <div className='footer-imgdiv'>
        <img  src={MyPhoto}/>
        </div>

      </a>
      <a href='https://github.com/nurullhkrds?tab=repositories' target='_blank'>
      <BsGithub className='iconGit'/>
      </a>
     
    </div>
  )
}

export default MyLink