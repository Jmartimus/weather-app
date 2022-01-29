import { KEY } from '../Key';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { WeatherResults } from './constants';

export const useGetWeather = () => {
  const [weatherResults, setWeatherResults] = useState<WeatherResults>();

  useEffect(() => {
    const fetchWeather = async () => {
      const res = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=${KEY}&contentType=json`
      );
      setWeatherResults(res.data);
    };
    fetchWeather();
  }, []);
  return weatherResults;
};
// export const useGetWeather = async () => {
//   const fetchWeather = async () => {
//     const res = await axios.get(
//       `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=${KEY}&contentType=json`
//     );
//     const results: WeatherResults = await res.data;
//     return results;
//   };
//   return await fetchWeather();
// };

// const fetchWeather = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {

//   })
//   fetch(
//     "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=F3H75GAS72SSKXQ72KWY5UWX6&contentType=json",
//     {
//       method: "GET",
//       headers: {},
//     }
//   )
//     .then((response) => {
//       console.log(response.json())
//     });
//     .catch((err) => {
//       console.error(err);
//     });
// };
export default useGetWeather;
