import { KEY } from '../key';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { WeatherResults } from './constants';

export const useGetWeather = () => {
  const [weatherResults, setWeatherResults] = useState<Nullable<WeatherResults>>(null);
  const fetchWeather = useCallback(async () => {
    const res = await axios.get<WeatherResults>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=${KEY}&contentType=json`
    );
    setWeatherResults(res.data);
  }, []);
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);
  return weatherResults;
};

// export const useGetWeather = (): Nullable<WeatherResults> => {
//   const [data, setData] = useState<Nullable<WeatherResults>>(null);
//   const fetchWeather = async () => {
//     const response = await fetch(
//       `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=${KEY}&contentType=json`,
//       {
//         method: 'GET',
//         headers: {},
//       }
//     );
//     const newData: WeatherResults = await response.json();
//     setData(newData);
//   };
//   useEffect(() => {
//     fetchWeather();
//   }, []);
//   return data;
// };
// export default useGetWeather;
