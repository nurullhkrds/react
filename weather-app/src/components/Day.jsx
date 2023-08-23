import React from "react";
import '../styles/Day.css'
import { useContext } from "react";
import { WeatherContext } from "../contex/WeatherContex";

import Bulutlu from '../icons/bulutlu.svg'
import bulutgunesli from '../icons/bulutlugünesli.svg'
import günesli from '../icons/gunesli.svg'
import kar from '../icons/kar.svg'
import yagmur from '../icons/yagmur.svg'
import Card from "./Card";


function Day({temp,date,tempmaxx,tempminn,feelslikee,feelslikemaxx,pressuree,humidityy}) {
  const data=useContext(WeatherContext)
  const {days,resolvedAddress}=data[0]

  const dateArr=new Date(date).toDateString();
  const dateDayNumber=dateArr.slice(8,10)
  const dateDayName=dateArr.slice(0,3)
  const todayDate=days[0].datetime.toString().slice(8,10)


  const [veri,pressure,setPressure,feelsLikeMax,setFeelsLikeMax,feelsLike,setFeelsLike,tempMin,setTempMin,
    tempMax,setTempMax,humudity,setHumudity]=data
 

  const dateNameConvertToTurkish=()=>{
    if(dateDayName==='Wed'){
      if(todayDate==dateDayNumber){
        return 'Bugün'
      }
      return 'Çarşamba'
        
    }
    else if(dateDayName==='Thu'){
      return 'Perşembe'
    }
    else if(dateDayName==='Fri'){
      return 'Cuma'
    }
    else if(dateDayName==='Sat'){
      return 'Cumartesi'
    }
    else if(dateDayName==='Sun'){
      return 'Pazar'
    }
    else if(dateDayName==='Mon'){
      return 'Pazartesi'
    }
    else if(dateDayName==='Tue'){
      return 'Salı'
    }
    
  }

  
  const iconName=()=>{
    if(temp>=25){
      return günesli
      
    }
    else if(temp>20){
      return bulutgunesli
    }
    else if(temp>15){
      return Bulutlu
    }
    else if(temp>4){
      return yagmur
  
    }
   
    else if(temp<=0 &&days[0].snow>0){
      return kar
    }

  }

  function handleClick(e){
    setFeelsLike(feelslikee)
    setFeelsLikeMax(feelslikemaxx)
    setHumudity(humidityy)
    setPressure(pressuree)
    setTempMax(tempmaxx)
    setTempMin(tempminn)
    
   
  }




 
  
  return (
    <>
    <div className="main">
      <button onClick={handleClick} > 
      <div className="child" >
        <div>{dateNameConvertToTurkish()}</div>
        <div className="imgdiv">
          <img src={iconName()}/>
          </div>
        <div className="data">
          {temp.toFixed()} °C
        </div>
      </div>
      </button>
    </div>
   
    </>
  );
}

export default Day;
