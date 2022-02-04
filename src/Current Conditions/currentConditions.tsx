import * as React from 'react';
import { WeatherResults } from '../API/constants';
import { Nullable } from '../global';

interface CurrentConditionsProps {
  weatherData: Nullable<WeatherResults>;
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="conditions-container">
      <h1>Today's Forcast:</h1>
    </div>
  );
};

export default CurrentConditions;
