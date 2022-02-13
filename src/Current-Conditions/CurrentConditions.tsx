import { Button } from '@mui/material';
import React, { Dispatch, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cloudyPic, foggyPic, rainyPic, snowPic, sunnyPic, WeatherResults } from '../constants';
import { Nullable } from '../global';
import { ReactComponent as Platypus } from '../icons/platypuslogo.svg';
import { toFahrenheit } from '../utils';

// import cloudy from '../icons/overcast-logo.svg';
interface CurrentConditionsProps {
  setWeatherData: Dispatch<React.SetStateAction<Nullable<WeatherResults>>>;
  weatherData: Nullable<WeatherResults>;
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({ setWeatherData, weatherData }) => {
  const [currentPic, setCurrentPic] = useState('');
  const navigate = useNavigate(); //  useNavigate is a react-router hook
  const goHome = () => {
    navigate('/'); //  any place we use navigate it uses the navigate hook^
    setWeatherData(null); //  we setWeatherData to null so that when we go back home it's empty for another user input
  };
  if (currentPic === '') {
    if (weatherData!.currentConditions.conditions.includes('Rain')) {
      setCurrentPic(rainyPic);
    }
    if (weatherData!.currentConditions.conditions.includes('Snow')) {
      setCurrentPic(snowPic);
    }
    if (weatherData!.currentConditions.conditions.includes('Clear')) {
      setCurrentPic(sunnyPic);
    }
    if (weatherData!.currentConditions.conditions.includes('Fog')) {
      setCurrentPic(foggyPic);
    }
    if (
      weatherData!.currentConditions.conditions.includes('Overcast') ||
      weatherData!.currentConditions.conditions.includes('Partially cloudy')
    ) {
      setCurrentPic(cloudyPic);
    }
  }

  return (
    <div
      style={{
        backgroundImage: `url(${currentPic}})`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div className="main-container">
        <div className="logo-container">
          <Platypus />
        </div>
        <div className="text-container">
          <h1>Today's Forcast: {weatherData!.currentConditions.conditions}</h1>
          <h2>Temp: {toFahrenheit(weatherData!.currentConditions.feelslike)}°F</h2>
          <h4>Feels Like: {toFahrenheit(weatherData!.currentConditions.feelslike)}°F</h4>
          <h4>Wind: {weatherData!.currentConditions.windspeed} mph</h4>
          <h4>
            Hi: {toFahrenheit(weatherData!.days[0].tempmax)}°F | Lo:{' '}
            {toFahrenheit(weatherData!.days[0].tempmin)}°F
          </h4>
          <Button variant="outlined" onClick={goHome}>
            Back home
          </Button>
        </div>
        <div className="logo-container">
          {/* <img alt="overcast" src={cloudy} /> */}
          <p>cloud Img</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentConditions;
