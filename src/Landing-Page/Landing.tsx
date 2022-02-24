import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { WeatherResults } from '../constants';
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
  const navigate = useNavigate();
  const submitZip = (zip: string) => {
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
    const controller = new AbortController();
    const fetchWeather = async (ZIP: string) => {
      try {
        const res = await axios.get<WeatherResults>(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${ZIP}?unitGroup=metric&include=current&key=${KEY}&contentType=json`,
          {
            signal: controller.signal,
          }
        );
        setWeatherData(await res.data);
        setError(false);
        setZipInput('');
        setValidZip(false);
        navigate('/CurrentConditions');
        controller?.abort();
      } catch {
        setError(true);
        setValidZip(false);
      }
    };

    if (validZip) {
      fetchWeather(zipInput);
    }
  }, [validZip]);

  useEffect(() => {
    if (zipInput.length < 5) {
      setError(false);
    }
  }, [zipInput]);

  return (
    <div id="background">
      <div className="main-container">
        <div className="logo-container">
          <Platypus />
        </div>
        <div className="title-container">
          <h1>Platypus WEATHER</h1>
        </div>
        <div className="form-container">
          <form action="submit-zip-code">
            <p>Enter your zip code to see the current weather conditions:</p>
            <TextField
              id="outlined-basic"
              label="Enter Zip Code"
              variant="outlined"
              required
              inputProps={{ maxLength: 5 }}
              value={zipInput}
              size="small"
              onChange={(e) => {
                setZipInput(e.target.value);
              }}
              error={error}
              helperText={error ? 'Invalid zip code.' : ''}
            />
            <br />
            <Button variant="outlined" onClick={() => submitZip(zipInput)}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Landing;
