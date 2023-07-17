import React from 'react'
import { BiSearchAlt} from "react-icons/bi";

function Searchh() {
  return (
    
    <div className='mr-auto ml-4 relative'>
        <label htmlFor='search-input' className='text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
        <BiSearchAlt className='w-6 h-6'/>

        </label>
        <input type='text' id='search-input'
         className='text-black h-10 pl-12 bg-white rounded-3xl max-w-full w-[22.75rem] placeholder-black/50'
          placeholder='Sanatçılar, şarkılar veya podcastler'/>
          
    </div>
    
  )
}

export default Searchh