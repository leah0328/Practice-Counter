
import './App.css';
import Form from './Form';
import React, {useState} from 'react';

import { Container, CssBaseline, Typography } from '@mui/material';
import Result from './Result';


function App() {
  const [resultDate, setResultDate] = useState("");
  const [resultDay, setResultDay] = useState("");
  const [resultTime, setResultTime] = useState("");


  const pullDataHandler = (resultDate, resultDay,resultTime)=> {
    setResultDate(resultDate);
    setResultDay(resultDay);
    setResultTime(resultTime);
  };
  
  return (
    <Container>
      <CssBaseline/>
      <Typography variant="h5">PCR Test Countdown</Typography>
      <Form data={pullDataHandler}/>
      {/* <Typography>h{props.resultTime}</Typography> */}
      <Result resultDate={resultDate} resultDay={resultDay} resultTime={resultTime}/>
    </Container>
  );
}

export default App;
