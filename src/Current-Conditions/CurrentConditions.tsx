import { Button, ButtonGroup } from '@mui/material';
import React, { Dispatch, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { default as dayjs } from 'dayjs';
import Forecast from '../Forecast/Forecast';
import { Nullable } from '../global';
import { ReactComponent as Platypus } from '../icons/platypuslogo.svg';
import { toFahrenheit } from '../utils';
import { cloudyPic, foggyPic, rainyPic, snowPic, sunnyPic, WeatherResults } from '../constants';

interface CurrentConditionsProps {
  setWeatherData: Dispatch<React.SetStateAction<Nullable<WeatherResults>>>;
  weatherData: Nullable<WeatherResults>;
}
enum Forecasts {
  THREEDAY = 'Three Day Forecast',
  SEVENDAY = 'Seven Day Forecast',
  FOURTEENDAY = 'Fourteen Day Forecast',
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({ setWeatherData, weatherData }) => {
  const [currentPic, setCurrentPic] = useState('');
  const navigate = useNavigate(); //  useNavigate is a react-router hook
  const goHome = () => {
    navigate('/'); //  any place we use navigate it uses the navigate hook^
    setWeatherData(null); //  we setWeatherData to null so that when we go back home it's empty for another user input
  };

  const [forecastChoice, setForecastChoice] = useState<Forecasts>(Forecasts.THREEDAY);

  // change this section to a vaiable
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
        height: '100%',
        width: '100%',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="main-container">
        <div className="logo-container">
          <Platypus />
        </div>
        <div className="text-container">
          <h1>Today's Forcast:{weatherData!.currentConditions.conditions}</h1>
          <h2>Temp: {toFahrenheit(weatherData!.currentConditions.feelslike)}°F</h2>
          <h4>Feels Like: {toFahrenheit(weatherData!.currentConditions.feelslike)}°F</h4>
          <h4>Wind: {weatherData!.currentConditions.windspeed} mph</h4>
          <h4>
            Hi: {toFahrenheit(weatherData!.days[0].tempmax)}°F | Lo:{' '}
            {toFahrenheit(weatherData!.days[0].tempmin)}°F
          </h4>
          <Button variant="outlined" onClick={goHome}>
            Back Home
          </Button>
          <div className="btnGroup-container">
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={() => setForecastChoice(Forecasts.THREEDAY)}>3-Day</Button>
              <Button onClick={() => setForecastChoice(Forecasts.SEVENDAY)}>7-Day</Button>
              <Button onClick={() => setForecastChoice(Forecasts.FOURTEENDAY)}>14-Day</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="logo-container">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/10/17/22/national-26547_960_720.png"
            alt="national weather service"
            id="nwsImg"
          />
        </div>
      </div>
      <div className="multiDay-container">
        {forecastChoice === Forecasts.THREEDAY && (
          <div id="threeDay-container">
            {weatherData?.days.slice(1, 4).map((day) => (
              <Forecast day={day} key={day.datetime} />
            ))}
          </div>
        )}
        {forecastChoice === Forecasts.SEVENDAY && (
          <div id="sevenDay-container">
            {weatherData?.days.slice(1, 8).map((day) => (
              <Forecast day={day} key={day.datetime} />
            ))}
          </div>
        )}
        {forecastChoice === Forecasts.FOURTEENDAY && (
          <div id="fourteenDay-container">
            {weatherData?.days.slice(1, 15).map((day) => (
              <Forecast day={day} key={day.datetime} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentConditions;
