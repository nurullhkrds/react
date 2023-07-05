import React from 'react'
import {useSelector} from 'react-redux'
import "../Item.css"
import Item from './Item'



function BasketListt() {
    const {cartItems}=useSelector((store)=>store.cart)

  return (
    <div className='card'>
          {
            cartItems.map((item)=>{
                return <Item {...item}/>
            })

        }
    </div>
  )
}

export default BasketListt