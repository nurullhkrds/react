import React from 'react'
import { BsGithub,BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
        <a style={{width:"45px"}} target='_blank' href='https://github.com/nurullhkrds' >
            <BsGithub style={{width:"45px",height:"35px"}}/></a>
        <a href='https://www.linkedin.com/in/nurullah-karda%C5%9F-8b5433227/' target='_blank' > 
        <BsLinkedin style={{width:"45px",height:"35px"}}/></a>
        
    </div>
  )
}

export default Footer