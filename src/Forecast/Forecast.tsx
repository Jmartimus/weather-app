import React from 'react';
import { Day } from '../constants';
import { toFahrenheit } from '../utils';
// import { Slider } from '@mui/material';
import './Forecast.scss';

// import cloudy from '../icons/overcast-logo.svg';
interface ForecastProps {
  day: Day;
}

const Forecast: React.FC<ForecastProps> = ({ day }) => (
  <div className="day-container">
    <ul className="day-list">
      <li>{day.datetime}</li>

      <li>{day.conditions}</li>
      <li>
        {toFahrenheit(day.tempmax)}°F | {toFahrenheit(day.tempmin)}°F
      </li>
      <li>Feels Like: {toFahrenheit(day.feelslike)}°F</li>
    </ul>
  </div>
);

export default Forecast;
