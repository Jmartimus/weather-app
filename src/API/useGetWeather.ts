import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { WeatherResults } from '../constants';
import { KEY } from '../key';
import { Nullable } from '../global';

// changed the API address to include a zip as a string, also changed the hook to HAVE to take in a zip.

export const useGetWeather = (ZIP: string) => {
  const [weatherResults, setWeatherResults] = useState<Nullable<WeatherResults>>(null);
  const fetchWeather = useCallback(async () => {
    const res = await axios.get<WeatherResults>(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ZIP}?unitGroup=metric&include=current&key=${KEY}&contentType=json`
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
