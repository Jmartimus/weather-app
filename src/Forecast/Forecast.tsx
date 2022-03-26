import React from 'react';
import { Day } from '../constants';
import { changeToDay, toFahrenheit } from '../utils';
import './Forecast.scss';

interface ForecastProps {
  day: Day;
}

const Forecast: React.FC<ForecastProps> = ({ day }) => (
  <div className="day-container">
    <ul className="day-list">
      <li key={`${day.datetime}-today's-new-date`}>{changeToDay(day.datetime)}</li>
      <li key={`${day.datetime}-conditions`}>{day.conditions}</li>
      <li key={`${day.datetime}-high-and-low-temp`}>
        {toFahrenheit(day.tempmax)}°F | {toFahrenheit(day.tempmin)}°F
      </li>
      <li key={`${day.datetime}-feels-like`}>Feels Like: {toFahrenheit(day.feelslike)}°F</li>
    </ul>
  </div>
);

export default Forecast;
