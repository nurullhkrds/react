import React from "react";
import { NavLink } from 'react-router-dom'
import { BiPlay,BiPause} from "react-icons/bi";
import { setCurrent } from "store/player";
import { useDispatch, useSelector } from "react-redux";


function MusicItem({ item }) {
    const {current}=useSelector(state=>state.player)
    const dispatch=useDispatch();
    const imgStyle=(item)=>{
        switch(item.type){
           case "artist":
               return "rounded-full"
               break;
           case "podcast":
               return "rounded-xl"
               break;
           default:
               return "rounded" 
               break       
        }

   }


   const updateMusic=()=>{
        dispatch(setCurrent(item))
   }

  return (
    <NavLink
      key={item.id}
      to={"/"}
      className={"bg-footer p-4 rounded hover:bg-active group"}
    >
      <div className="pt-[100%] relative mb-4 ">
        <img
          src={item.img}
          className={`absolute inset-0 object-cover w-full h-full
                            ${imgStyle(item)}
                        
                        `}
        />
        <button onClick={updateMusic} className="w-10 h-10 rounded-full group-hover:flex group-focus:flex bg-primary absolute bottom-2 right-2 flex items-center justify-center hidden">
            {current.id===item.id ? <BiPause className="w-8 h-8"/> :<BiPlay className="w-8 h-8"   /> }
             
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-basefont-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.desc}</p>
    </NavLink>
  );
}

export default MusicItem;
