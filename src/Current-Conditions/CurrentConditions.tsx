import { Button } from '@mui/material';
import React, { Dispatch } from 'react';
import { useNavigate } from 'react-router-dom';
import { WeatherResults } from '../API/constants';
import { Nullable } from '../global';
import { ReactComponent as Platypus } from '../icons/platypuslogo.svg';
// import cloudy from '../icons/overcast-logo.svg';

interface CurrentConditionsProps {
  setWeatherData: Dispatch<React.SetStateAction<Nullable<WeatherResults>>>;
  weatherData: Nullable<WeatherResults>;
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({ setWeatherData, weatherData }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
    setWeatherData(null);
  };
  console.log(weatherData);
  console.log(weatherData!.days[0].tempmax);
  return (
    <div className="main-container">
      <div className="logo-container">
        <Platypus />
      </div>
      <div className="text-container">
        <h1>Today's Forcast: {weatherData!.currentConditions.conditions}</h1>
        <h2>Temp: {(weatherData!.currentConditions.temp * 9) / 5 + 32}°F</h2>
        <h4>Feels Like: {(weatherData!.currentConditions.feelslike * 9) / 5 + 32}°F</h4>
        <h4>Wind: {weatherData!.currentConditions.windspeed} mph</h4>

        <h4>
          Hi: {Math.floor((weatherData!.days[0].tempmax * 9) / 5 + 32)}°F | Lo:{' '}
          {Math.floor((weatherData!.days[0].tempmin * 9) / 5 + 32)}°F
        </h4>
      </div>
      <Button variant="outlined" onClick={goHome}>
        Back home
      </Button>
      <div className="logo-container">
        {/* <img alt="overcast" src={cloudy} /> */}
        <p>cloud Img</p>
      </div>
    </div>
  );
};

export default CurrentConditions;
