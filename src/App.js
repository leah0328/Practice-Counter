import "./App.css";
import Form from "./Form";
import React, { useState } from "react";

import {
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import Result from "./Result";

function App() {
  const [resultDate, setResultDate] = useState("");
  const [resultDay, setResultDay] = useState("");
  const [resultTime, setResultTime] = useState("");

  const pullDataHandler = (resultDate, resultDay, resultTime) => {
    setResultDate(resultDate);
    setResultDay(resultDay);
    setResultTime(resultTime);
  };

  const clearResultHandler = (clearedDate, clearedDay, clearedTime) => {
    setResultDate(clearedDate);
    setResultDay(clearedDay);
    setResultTime(clearedTime);
  };

  return (
    <Container>
      <CssBaseline />
      <Typography variant="h5" padding="20px 0 20px 0">
        PCR Test Counter
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Form data={pullDataHandler} reset={clearResultHandler} />
        </Grid>
        <Grid item xs={6}>
          <Result
            resultDate={resultDate}
            resultDay={resultDay}
            resultTime={resultTime}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
