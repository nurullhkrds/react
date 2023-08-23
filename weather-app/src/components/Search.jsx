import React, { useContext, useState } from "react";
import "../styles/Search.css";
import { WeatherContext } from "../contex/WeatherContex";

function Search() {
  const data = useContext(WeatherContext);
  const [
    veri,
    pressure,
    setPressure,
    feelsLikeMax,
    setFeelsLikeMax,
    feelsLike,
    setFeelsLike,
    tempMin,
    setTempMin,
    tempMax,
    setTempMax,
    humudity,
    setHumudity,
    search,
    setSearch,
  ] = data;

  const [input, setInput] = useState();
  const handleSubmit= (e)=>{
    e.preventDefault()
    setSearch(input)
    
  }

  return (
    <div className="section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Şehir Giriniz..."
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
