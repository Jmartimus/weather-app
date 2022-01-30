import { WeatherResults } from './API/constants';

interface DataProps {
  weatherData: WeatherResults;
}

export const Data: React.FC<DataProps> = ({ weatherData }) => {
  return (
    <>
      <p>
        Conditions:
        {weatherData.currentConditions.datetimeEpoch}
      </p>
      <p>
        Conditions:
        {weatherData.currentConditions.conditions}
      </p>
      <p>
        Feels Like:
        {weatherData.currentConditions.feelslike}
      </p>
      <p>
        Humidity:
        {weatherData.currentConditions.humidity}
      </p>
      <p>
        Precipitation:
        {weatherData.currentConditions.precip}
      </p>
      <p>
        Temp:
        {weatherData.currentConditions.temp}
      </p>
      <p>
        Sunrise time:
        {weatherData.currentConditions.sunrise}
      </p>
      <p>
        Sunset time:
        {weatherData.currentConditions.sunset}
      </p>
      <p>
        Wind:
        {weatherData.currentConditions.windspeed}
      </p>
    </>
  );
};
