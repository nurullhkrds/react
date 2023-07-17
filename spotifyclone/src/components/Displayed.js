import React from 'react'
import MusicItem from './MusicItem'
import { NavLink } from 'react-router-dom'
import Title from './Title'



function Displayed({title,items }) {
 
  return (
    <div>   
        <Title title={title}/>

        <div className='grid grid-cols-5 gap-x-6'>
            {
                items.map(item=>(
                    <MusicItem item={item} key={item.id} />

                    
                ))
            }
        </div>

    </div>
  )
}

export default Displayed