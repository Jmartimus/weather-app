import React from 'react';
import { WeatherResults } from './constants';

interface DataProps {
  // DataProps is the type of this prop, telling the app what kind of props to expect
  weatherData: WeatherResults; // this includes weatherData, WeatherResults is the weatherData type
}

export const Data: React.FC<DataProps> = ({ weatherData }) => (
  // react.functionalComponent = FC <DataProps> is the type, it takes in ({weatherData})
  // you destructre which means its pulled from the {}
  <>
    {weatherData.days[0]}
    <p>
      Conditions:
      {weatherData.currentConditions.datetimeEpoch}
    </p>
    <p>
      Conditions:
      {weatherData.currentConditions.conditions}
    </p>
    <p>
      Feels Like:
      {weatherData.currentConditions.feelslike}
    </p>
    <p>
      Humidity:
      {weatherData.currentConditions.humidity}
    </p>
    <p>
      Precipitation:
      {weatherData.currentConditions.precip}
    </p>
    <p>Temp:</p>
    <p>
      Sunrise time:
      {weatherData.currentConditions.sunrise}
    </p>
    <p>
      Sunset time:
      {weatherData.currentConditions.sunset}
    </p>
    <p>
      Wind:
      {weatherData.currentConditions.windspeed}
    </p>
  </>
);
