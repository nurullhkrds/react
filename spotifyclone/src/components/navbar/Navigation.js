import React from 'react'
import { BiSolidChevronLeft,BiSolidChevronRight} from "react-icons/bi";
import {useNavigate} from "react-router-dom"



function Navigation() {
    const pageArray=["/","search","collections"]
    const history=useNavigate();
    let i=0    
    const handleClickPrev = () => {
        if(i>0){
            i--
            history(pageArray[i])
            
        }
        else{
            i++
            history(pageArray[i])

        }
        
        
        

     }
     const handleClickNext = () => {
        history(pageArray[2])
     }

  return (
    <div className='flex items-center gap-x-2'>
        <button onClick={handleClickPrev} className='h-10 w-10 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <BiSolidChevronLeft/>
        </button>
        <button onClick={handleClickNext} className='h-10 w-10 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <BiSolidChevronRight/>
        </button>
    </div>
  )
}

export default Navigation