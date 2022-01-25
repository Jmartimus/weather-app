import { KEY } from './Key';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetWeather = () => {
  const [weatherResults, setWeatherResults] = useState();
  const fetchWeather = async () => {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=${KEY}&contentType=json`
    );
    // console.log(res.data);
    setWeatherResults(res.data);
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return weatherResults;
};

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
