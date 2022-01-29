import React, { useEffect, useState } from 'react';
import CatFacts from './CatFacts';
import { WeatherResults } from './Hooks/constants';
import useGetWeather from './Hooks/useGetWeather';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherResults>();
  const results: WeatherResults | undefined = useGetWeather();

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = () => {
    if (results) {
      setWeatherData(results);
    }
    return;
  };

  return (
    <div>
      <CatFacts />
      <button onClick={getWeatherData}>How's the weather?!</button>
      <div className="results-container">
        <p>
          Conditions:
          {weatherData?.currentConditions.datetimeEpoch}
        </p>
        <p>
          Conditions:
          {weatherData?.currentConditions.conditions}
        </p>
        <p>
          Feels Like:
          {weatherData?.currentConditions.feelslike}
        </p>
        <p>
          Humidity:
          {weatherData?.currentConditions.humidity}
        </p>
        <p>
          Precipitation:
          {weatherData?.currentConditions.precip}
        </p>
        <p>
          Temp:
          {weatherData?.currentConditions.temp}
        </p>
        <p>
          Sunrise time:
          {weatherData?.currentConditions.sunrise}
        </p>
        <p>
          Sunset time:
          {weatherData?.currentConditions.sunset}
        </p>
        <p>
          Wind:
          {weatherData?.currentConditions.windspeed}
        </p>
      </div>
    </div>
  );
}

export default App;
