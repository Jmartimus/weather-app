import { Button } from '@mui/material';
import React, { Dispatch, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WeatherResults } from '../API/constants';
import { Nullable } from '../global';
import { ReactComponent as Platypus } from '../icons/platypuslogo.svg';
import { toFahrenheit } from '../utils';

// import cloudy from '../icons/overcast-logo.svg';
interface CurrentConditionsProps {
  setWeatherData: Dispatch<React.SetStateAction<Nullable<WeatherResults>>>;
  weatherData: Nullable<WeatherResults>;
}

const snowPic =
  'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const sunnyPic =
  'https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80';
const rainyPic =
  'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const foggyPic =
  'https://images.unsplash.com/photo-1479476437642-f85d89e5ad7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const cloudyPic =
  'https://images.unsplash.com/photo-1551485324-27120d4b3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

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
