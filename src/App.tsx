import React, { useCallback } from "react";
import CatFacts from "./CatFacts";
import useGetWeather from "./useGetWeather";

function App() {
  const response = useGetWeather();
  console.log(response);
  return (
    <div>
      <CatFacts />
      <button onClick={useGetWeather}>How's the weather?!</button>
    </div>
  );
}

export default App;
