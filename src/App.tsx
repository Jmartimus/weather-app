import { useState } from 'react';
import { WeatherResults } from './API/constants';
import CurrentConditions from './Current Conditions/currentConditions';
import { Nullable } from './global';
// import Landing from './Landing Page/landing';
import './styles.scss';

function App() {
  const [
    weatherData,
    // setWeatherData
  ] = useState<Nullable<WeatherResults>>(null);
  return (
    <div>
      {/* <Landing setWeatherData={setWeatherData} /> */}
      <CurrentConditions weatherData={weatherData} />
    </div>
  );
}

export default App;
