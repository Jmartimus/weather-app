import { KEY } from "./key";
import axios from "axios";

export const useGetWeather = () => {
  const fetchWeather = async () => {
    const res = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Qutiman%2C%20TX?unitGroup=metric&include=current&key=${KEY}&contentType=json`
    );
    console.log(res.data);
    return res.data;
  };
  fetchWeather();
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
