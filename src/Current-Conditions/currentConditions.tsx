import * as React from 'react';
import { WeatherResults } from '../API/constants';
import { Nullable } from '../global';
import { ReactComponent as Platypus } from '../icons/platypuslogo.svg';
// import cloudy from '../icons/overcast-logo.svg';

interface CurrentConditionsProps {
  weatherData: Nullable<WeatherResults>;
}

const CurrentConditions: React.FC<CurrentConditionsProps> = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <div className="main-container" id="conditions-container">
      <div className="logo-container">
        <Platypus />
      </div>
      <div className="text-container">
        <h1>Today's Forcast:</h1>
        <h2>Overcast 29°F</h2>
        <h4>Feels Like: 15°F</h4>
        <h4>Hi 34° | Lo 18°</h4>
      </div>
      <div className="logo-container">
        {/* <img alt="overcast" src={cloudy} /> */}
        <p>cloud Img</p>
      </div>
    </div>
  );
};

export default CurrentConditions;
