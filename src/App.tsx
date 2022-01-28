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
        <p>{results !== undefined ? results.latitude : ""}</p>
      </div>
    </div>
  );
}

export default App;
