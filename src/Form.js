import { DateTimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import InputAdornment from '@mui/material/InputAdornment';
import useInput from "./hooks/use-input";

const Form = (props) => {
  const {
    date: enteredDate,
    isValid: enteredDateIsValid,
    hasError: enteredDateHasError,
    dateChangeHandler: dateChange,
    inputBlurHandler: dateBlurHandler,
    inputResetHandler: dateResetHandler
  } = useInput();

  const {
    hours: enteredHours,
    isValid: enteredHoursIsValid,
    hasError: enteredHoursHasError,
    hoursChangeHandler: hoursChange,
    inputBlurHandler: hoursBlurHandler,
    inputResetHandler: hoursResetHandler
  } = useInput();


   
  const resetHandler = () => {
    dateResetHandler();
    hoursResetHandler();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredDate.toLocaleString());
    console.log(enteredHours);

    let formIsValid;
    if (enteredDateIsValid && enteredHoursIsValid)
    formIsValid = true; 

    if (!formIsValid)
    return;

    let { DateTime }  = require("luxon");
    let format = {...DateTime.TIME_SIMPLE, hourCycle:"h12"};
    let testDate = DateTime.fromISO(enteredDate).minus({hours:enteredHours});
    const resultDate = testDate.toLocaleString({ month: 'long', day: 'numeric',year:"numeric" });
    const resultDay =  testDate.toLocaleString({ weekday: 'long' });
    const resultTime = testDate.toLocaleString(format); 
    
    // console.log(testDate.toString());
    // console.log("get tested on: ", resultDate);
    // console.log("get tested on: ", resultDay);
    // console.log("get tested on: ", resultTime);

    props.data(resultDate, resultDay, resultTime);

  };


  return (
    <div>
      <form onSubmit={submitHandler}>
      <Stack spacing={3}>
        <Typography variant="h6">Your Travel Details</Typography>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DateTimePicker
              label="Depature Date / Time"
              value={enteredDate}
              onChange={dateChange}
              onBlur={dateBlurHandler}
              error={enteredDateHasError}
              helperText="Please enter a depature date and time"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            id="hours"
            label="Interval"
            type="number"
            value={enteredHours}
            onChange={hoursChange}
            onBlur={hoursBlurHandler}
            error={enteredHoursHasError}
            InputProps={{
              endAdornment: <InputAdornment position="end">hours</InputAdornment>,
            }}
            helperText="Please enter the hours you are required to undergo the PCR test before the travel, eg. 24, 72"
          />
          <Button type="submit" variant="contained" >
            Calculate
          </Button>
          <Button variant="contained" onClick={resetHandler}>
            Reset
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Form;
