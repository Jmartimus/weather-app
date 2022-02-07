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
  return (
    <div className="main-container">
      <div className="logo-container">
        <Platypus />
      </div>
      <div className="text-container">
        <h1>Today's Forcast:</h1>
        <h2>Overcast 29°F</h2>
        <h4>Feels Like: 15°F</h4>
        <h4>Hi 34° | Lo 18°</h4>
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
