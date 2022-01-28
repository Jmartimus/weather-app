import React, { useEffect, useState } from "react";
import CatFacts from "./CatFacts";
import useGetWeather from "./useGetWeather";

function App() {
  const results = useGetWeather();
  const getFirstDayTempHigh = () => {
    if (results !== undefined) {
      console.log(results);
    }
    return;
  };
  return (
    <div>
      <CatFacts />
      <button onClick={getFirstDayTempHigh}>How's the weather?!</button>
      <div className="results-container">
        <p>
          {" "}
          Conditions:
          {results !== undefined ? results.currentConditions.conditions : ""}
        </p>
        <p>
          Feels Like:
          {results !== undefined ? results.currentConditions.feelslike : ""}
        </p>
        <p>
          Humidity:
          {results !== undefined ? results.currentConditions.humidity : ""}
        </p>
        <p>
          Precipitation:
          {results !== undefined ? results.currentConditions.precip : ""}
        </p>
        <p>
          Temp:
          {results !== undefined ? results.currentConditions.temp : ""}
        </p>
        <p>
          Sunrise time:
          {results !== undefined ? results.currentConditions.sunrise : ""}
        </p>
        <p>
          Sunset time:
          {results !== undefined ? results.currentConditions.sunset : ""}
        </p>
        <p>
          Wind:
          {results !== undefined ? results.currentConditions.windspeed : ""}
        </p>
      </div>
    </div>
  );
}

export default App;
