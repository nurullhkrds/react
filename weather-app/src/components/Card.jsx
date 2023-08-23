import { useContext } from "react";
import { WeatherContext } from "../contex/WeatherContex";
import "../styles/Card.css";

import basinc from '../icons/basınc.svg'
import max from '../icons/max.svg'
import min from '../icons/min.svg'
import nem from '../icons/nem.svg'
import happy from '../icons/happy.gif'
import { ImSad2,ImConfused2,ImSmile2 } from "react-icons/im";





function Card() {

  const data=useContext(WeatherContext)


  const [veri,pressure,setPressure,feelsLikeMax,setFeelsLikeMax,feelsLike,setFeelsLike,tempMin,setTempMin,
    tempMax,setTempMax,humudity,setHumudity]=data

    const sad= < ImSad2 className="iconnnn"/>;
    const tongue=<ImConfused2 className="iconnnn"/>;
    const ımsmile=<ImSmile2 className="iconnnn"/>;

    function iconSimulasyon(){
      if(feelsLike>30){
        return tongue
      }
      else if(feelsLike>20){
        return sad
      }
      else if(feelsLike>6){
        return ımsmile
      }
      
      else if(feelsLikeMax>30){
        return tongue
      }
      else if(feelsLikeMax>20){
        return sad
      }
      else if(feelsLikeMax>6){
        return ımsmile
      }
    }


  return (
    
   
    <main className="container">
      <div className="row row-cols-3">
        <div className="col mb-2">
          <div className="section section__descriptions">
            <div className="card">
              <img src={min}/>
              <h2>{tempMin.toFixed()} °C</h2>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="section section__descriptions">
            <div className="card">
            <img src={max}/>

              <h2>{tempMax.toFixed()} °C</h2>
            </div>
          </div>
        </div>
        <div className="col mb-2">
          <div className="section section__descriptions">
            <div className="card">
              <div>
              {iconSimulasyon()}


              </div>

              <h2>{feelsLike.toFixed()} °C</h2>
            </div>
          </div>
        </div>
        <div className="col mb-2">
          <div className="section section__descriptions">
            <div className="card">
              <div>
              {iconSimulasyon()}


              </div>
            

              <h2>{feelsLikeMax.toFixed()} °C</h2>
            </div>
          </div>
        </div>
        <div className="col mb-2">
          <div className="section section__descriptions">
            <div className="card">
              <img src={basinc}/>
              
              <h2>{pressure}</h2>
            </div>
          </div>
        </div>
        <div className="col mb-2">
          <div className="section section__descriptions">
            <div className="card">
            <img src={nem}/>

              <h2>{humudity}</h2>
            </div>
          </div>
        </div>
      
      </div>
    </main>

  );
}

export default Card;
