import { MobileDateTimePicker } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import useInput from "./hooks/use-input";

const Form = (props) => {
  const {
    date: enteredDate,
    dateIsValid: enteredDateIsValid,
    dateHasError: enteredDateHasError,
    dateChangeHandler: dateChange,
    inputBlurHandler: dateBlurHandler,
    reset: dateReset,
  } = useInput();

  const {
    hours: enteredHours,
    hoursIsValid: enteredHoursIsValid,
    hourHasError: enteredHoursHasError,
    hoursChangeHandler: hoursChange,
    inputBlurHandler: hoursBlurHandler,
    reset: hoursReset,
  } = useInput();

  let formIsValid = false;
  if (enteredDateIsValid && enteredHoursIsValid) {
    formIsValid = true;
  }

  const resetHandler = () => {
    dateReset();
    hoursReset();
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredDate);
    console.log(enteredHours);

    let { DateTime } = require("luxon");
    let format = { ...DateTime.TIME_SIMPLE, hourCycle: "h12" };
    let testDate = DateTime.fromISO(enteredDate).minus({ hours: enteredHours });
    const resultDate = testDate.toLocaleString({
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const resultDay = testDate.toLocaleString({ weekday: "long" });
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
            <MobileDateTimePicker
              clearable
              label="Depature Date / Time"
              value={enteredDate}
              onChange={dateChange}
              onBlur={dateBlurHandler}
              inputFormat="dd/MM/yyyy hh:mm a"
              helperText="Please enter a depature date and time"
              renderInput={(params) => (
                <TextField {...params}  />
              )}
            />
          </LocalizationProvider>
          {enteredDateHasError && (
              <Typography variant="body1">Depature Date and Time must not be empty</Typography>
            )}

          <TextField
            id="hours"
            label="Interval"
            type="number"
            value={enteredHours}
            onChange={hoursChange}
            onBlur={hoursBlurHandler}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">hours</InputAdornment>
              ),
            }}
            helperText="Please enter the hours you are required to undergo the PCR test before the travel, eg. 24, 72"
          />
          {enteredHoursHasError && (
              <Typography variant="body1">Interval must not be empty</Typography>
            )}
          <Button type="submit" variant="contained">
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
