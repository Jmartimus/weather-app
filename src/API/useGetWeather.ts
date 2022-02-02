import { KEY } from "../key";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { WeatherResults } from "./constants";

export const useGetWeather = () => {
  const [weatherResults, setWeatherResults] = useState<WeatherResults>(); //useState sets the type as <WeatherResults> <> is called generic,
  //WeatherResults doesn't exist until we define it, usually.
  const fetchWeather = useCallback(async () => {
    //to memo-ize something, you're going to solve this and it will remember that you did
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
