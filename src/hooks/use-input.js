import { useState } from "react";

const useInput = () => {
  const [enteredHours, setEnteredHours] = useState("");
  const [enteredDate, setEnteredDate] = useState(null);
  const [isTouched, setIsTouched] = useState(false);

  const hoursIsValid = enteredHours.trim() !== "";
  const dateIsValid = enteredDate !== null;

  const hoursHasError = !hoursIsValid && isTouched;
  const dateHasError = !dateIsValid && isTouched;

  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };

  const dateChangeHandler = (newDate) => {
    setEnteredDate(newDate);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredDate(null);
    setEnteredHours("");
  };

  return {
    hours: enteredHours,
    date: enteredDate,
    hoursIsValid,
    dateIsValid,
    hoursHasError,
    dateHasError,
    hoursChangeHandler,
    dateChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
