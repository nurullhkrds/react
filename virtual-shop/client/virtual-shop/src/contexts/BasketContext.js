import {useState,createContext,useEffect} from 'react'

export const BasketContext=createContext();


export const BasketProvider=({children})=>{
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(()=>{
        
    },[basket])

    const addBasket = (data) =>{
        setBasket((prev)=>[...prev,data])
        setTotal((prev)=>prev+data.price)

    }
 
    const removeBasket = (id) =>{

        const newBasketList=basket.filter((item)=>item._id!==id)
        setBasket(newBasketList)

        if(basket.length===0){
            setTotal(0)
        }
        else{
            const removeItem=basket.find((item)=>item._id===id)
       
            setTotal((prev)=>prev-removeItem.price)

        }
      
       

    }
    const emptyBasket=()=>{
        setBasket([])
        setTotal(0)
    }


    const values={
        basket,
        addBasket,
        removeBasket,
        total,
        emptyBasket
    }
    
    return <BasketContext.Provider  value={values}>{children}</BasketContext.Provider>

}