import React, { useState, useEffect } from 'react';
import './landing.scss';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const Landing: React.FC = () => {
  const [input, setInput] = useState();

  const [newInput, setNewInput] = useState('');

  const addInput = (input: string) => {
    console.log(input);
  };

  return (
    <div className="landing-container">
      <div className="logo-container">
        <img src="../platypus-logo.svg" id="logo"></img>
      </div>
      <p>Platypus WEATHER</p>
      <form action="submit-zip-code">
        <p>Enter your zip code to see the current weather conditions:</p>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={input}
          onChange={(e) => {
            setNewInput(e.target.value);
          }}
        />

        <Button variant="outlined" onClick={() => addInput(newInput)}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Landing;
