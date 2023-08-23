import React from "react";
import Card from "./Card";
import Location from "./Location";
import "../App.css";
import MyLink from './MyLink'
import '../styles/Search.css'
import { WeatherContext } from "../contex/WeatherContex";
import { useContext, useEffect } from "react";
import Search from "./Search";
import Day from "./Day";
function Container() {
  
  const data=useContext(WeatherContext)
  const {days,resolvedAddress}=data[0]


  return (
   
 
    <div className="App ">
      <div class="container">
        <div class="footer">
          <div >
            <Search />
          </div>
          <div >
            <MyLink/>
          </div>
        </div>
        <div class="location mt-5">
          <div class=" mt-3">
          <Location />
          </div>

          {
            
            days.map((day,key)=>{
              
              
              return (
                <div class=""><Day
                humidityy={day.humidity}
                pressuree={day.pressure}
                feelslikemaxx={day.feelslikemax}
                feelslikee={day.feelslike}
                tempminn={day.tempmin}
                 tempmaxx={day.tempmax} 
                 date={day.datetime}  
                 temp={day.temp}    /></div>

              )
            })
          }
         
          
        </div>
        <div class="row mt-5 ms-5 ">
          <div class="col-sm mt-4 ">
           <Card/>  
          </div>
    
     

        </div>
      </div>
    </div>
   
  );
  
}

export default Container;
