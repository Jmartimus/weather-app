import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import './Landing.scss';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import axios from 'axios';
import { WeatherResults } from '../API/constants';
import { Nullable } from '../global';
import { KEY } from '../key';
import { ReactComponent as Platypus } from '../icons/platypuslogo.svg';

interface LandingProps {
  setWeatherData: Dispatch<SetStateAction<Nullable<WeatherResults>>>;
}

const Landing: React.FC<LandingProps> = ({ setWeatherData }) => {
  const [zipInput, setZipInput] = useState('');
  const [validZip, setValidZip] = useState(false);
  const [error, setError] = useState(false);

  const addInput = (zip: string) => {
    // regex check of valid zip code
    const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
    if (isValidZip) {
      setValidZip(true);
    }
  };

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const fetchWeather = async (ZIP: string) => {
      try {
        const res = await axios.get<WeatherResults>(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ZIP}?unitGroup=metric&include=current&key=${KEY}&contentType=json`
        );
        setWeatherData(await res.data);
        setError(false);
      } catch {
        setError(true);
      }
    };
    fetchWeather(zipInput);
  }, [validZip]);

  useEffect(() => {
    if (zipInput.length < 5) {
      setError(false);
    }
  }, [zipInput]);

  return (
    <div className="landing-container">
      <div className="logo-container">
        <Platypus />
      </div>
      <p>Platypus WEATHER</p>
      <form action="submit-zip-code">
        <p>Enter your zip code to see the current weather conditions:</p>
        <TextField
          id="outlined-basic"
          label="Enter Zip Code"
          variant="outlined"
          required
          inputProps={{ maxLength: 5 }}
          value={zipInput}
          onChange={(e) => {
            setZipInput(e.target.value);
          }}
          error={error}
          helperText={error ? 'Invalid zip code.' : ''}
        />
        <Button variant="outlined" onClick={() => addInput(zipInput)}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Landing;
