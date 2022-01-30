import { KEY } from '../Key';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { WeatherResults } from './constants';

export const useGetWeather = () => {
  const [weatherResults, setWeatherResults] = useState<WeatherResults>();
  const fetchWeather = useCallback(async () => {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=${KEY}&contentType=json`
    );
    setWeatherResults(res.data);
  }, []);
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);
  return weatherResults;
};

// export const useGetWeather: Promise<WeatherResults> | undefined = () => {
//   const [data, setData] = useState<Promise<WeatherResults>>();

//   const fetchWeather = () => {
//     useEffect(() => {});
//     fetch(
//       'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=F3H75GAS72SSKXQ72KWY5UWX6&contentType=json',
//       {
//         method: 'GET',
//         headers: {},
//       }
//     ).then((response) => {
//       const llamas: Promise<WeatherResults> = response.json();
//       setData(llamas);
//     });
//   };
//   return data;
// };
// export default useGetWeather;
