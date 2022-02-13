import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { WeatherResults } from './constants';
import CurrentConditions from './Current-Conditions/CurrentConditions';
import { Nullable } from './global';
import Landing from './Landing-Page/Landing';
import './styles.scss';

function App() {
  const [weatherData, setWeatherData] = useState<Nullable<WeatherResults>>(null);
  return (
    <Routes>
      <Route path="/" element={<Landing setWeatherData={setWeatherData} />} />
      <Route
        path="/CurrentConditions"
        element={<CurrentConditions setWeatherData={setWeatherData} weatherData={weatherData} />}
      />
    </Routes>
  );
}

export default App;
