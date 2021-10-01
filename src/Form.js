import { DateTimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, TextField } from "@mui/material";
// import { useState } from "react";
import Stack from "@mui/material/Stack";
import useInput from "./hooks/use-input";

const Form = (props) => {
  const {
    date: enteredDate,
    // isValid: enteredDateIsValid,
    // hasError: enteredDateHasError,
    dateChangeHandler: dateChange,
    inputBlurHandler: dateBlurHandler,
  } = useInput();

  const {
    hours: enteredHours,
    // isValid: enteredHoursIsValid,
    // hasError: enteredHoursHasError,
    hoursChangeHandler: hoursChange,
    inputBlurHandler: hoursBlurHandler,
  } = useInput();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredDate.toLocaleString());
    console.log(enteredHours, " hours");

    let { DateTime}  = require("luxon");
    let testDate = DateTime.fromISO(enteredDate).minus({hours:enteredHours});
    const resultDate = testDate.toLocaleString({ month: 'long', day: 'numeric',year:"numeric" });
    const resultDay =  testDate.toLocaleString({ weekday: 'long' });
    const resultTime = testDate.toLocaleString(DateTime.TIME_SIMPLE); 
    
    // console.log(testDate.toString());
    // console.log("get tested on: ", resultDate);
    // console.log("get tested on: ", resultDay);
    // console.log("get tested on: ", resultTime);

    props.data(resultDate, resultDay, resultTime);

  };

  return (
    <div>
      <p>The Input Form</p>
      <form onSubmit={submitHandler}>
        <Stack spacing={3}>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
              label="Depature Date / Time"
              value={enteredDate}
              onChange={dateChange}
              onBlur={dateBlurHandler}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            id="hours"
            label="Hours"
            type="number"
            value={enteredHours}
            onChange={hoursChange}
            onBlur={hoursBlurHandler}
          />
          <Button type="submit" variant="contained" >
            Calculate
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Form;
