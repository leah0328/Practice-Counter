import { DateTimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, TextField } from "@mui/material";
// import { useState } from "react";
import Stack from "@mui/material/Stack";
import useInput from "./hooks/use-input";

const Form = () => {
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

    const DateTime;
    newDate = enteredDate.minus(enteredHours);
    console.log(newDate);
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
          <Button type="submit" variant="contained">
            Calculate
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Form;
