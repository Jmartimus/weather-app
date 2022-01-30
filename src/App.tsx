import { useEffect, useState } from 'react';
import CatFacts from './API/CatFacts';
import { WeatherResults } from './API/constants';
import { useGetWeather } from './API/useGetWeather';
import { Data } from './Data';

// So we are going to have to have a conversation to figure out out planning from here.  How do we want to set up this project?
// Do we want to have a few drop downs where users can pick their settings and then it spits out weather in the form
// that they want it?
//  Maybe a calendar that they can pick only the applicable days and then they can choose what kind of forecast?
//  Do we want them to be able to pick the city?
//  There are tons of options for this project now that we are succesfully recieving the data.
// Let me know what you think

function App() {
  //We will most likely need to move most of this business logic into another component when we figure out how we are setting up this app.

  //We are going to store the weatherData in the state below.
  const [weatherData, setWeatherData] = useState<WeatherResults>();

  // This is a flag we will use to hide and show the data when the user clicks the button
  const [hide, setHide] = useState(true);

  // We call the useGetWeather hook as soon as we land on the page.  So the data is ready to go.
  const weather: WeatherResults | undefined = useGetWeather();

  //The useEffect helps us to stay out of an infinite loop by oply updating setWeatherData when the "weather" variable changes.
  useEffect(() => {
    setWeatherData(weather);
  }, [weather]);

  //This is our toggle switch to show and hide the data
  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <div>
      <CatFacts />
      <button onClick={toggleHide}>How's the weather?!</button>
      <div className="results-container">
        {/*Below, we set a condition for the JSX.  If weatherData is NOT undefined AND hide is false, show the data.*/}
        {weatherData && !hide ? (
          <Data weatherData={weatherData} />
        ) : (
          <p>no data yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
