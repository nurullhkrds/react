import React, { useEffect } from "react";
import Day from "./Day";
import '../styles/Location.css'
import { useContext ,useState} from "react";
import { WeatherContext } from "../contex/WeatherContex";
import Bulutlu from '../icons/bulutlu.svg'
import bulutgunesli from '../icons/bulutlugünesli.svg'
import günesli from '../icons/gunesli.svg'
import kar from '../icons/kar.svg'
import yagmur from '../icons/yagmur.svg'



function Location() {
  const data=useContext(WeatherContext)
  const {days,resolvedAddress}=data[0]
 

  const iconName=()=>{
    if(days[0].temp>=25){
      return günesli
      
    }
    else if(days[0].temp>20){
      return bulutgunesli
    }
    else if(days[0].temp>15){
      return Bulutlu
    }
    else if(days[0].temp>4){
      return yagmur
  
    }
   
    else if(days[0].temp<=0 &&days[0].snow>0){
      return kar
    }

  }



  return (
    <div className="locations">
      <div className="icon">
        <h3>{resolvedAddress}</h3>
        
        <img  src={
          iconName()
        } alt="" />
        <p>{days[0].description}</p>
      </div>
      <div className="temperature">
        <h1>{days[0].temp.toFixed()}°C</h1>
      </div>
    </div>

  );
}

export default Location;
