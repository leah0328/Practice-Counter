import { useState } from "react";

const useInput = () => {
  const [enteredHours, setEnteredHours] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = enteredHours && enteredDate !== "";
  const hasError = !valueIsValid && isTouched;

  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };

  const dateChangeHandler = (enteredDate) => {
    setEnteredDate(enteredDate);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const inputResetHandler = () => {
    setEnteredDate("");
    setEnteredHours("");
    setIsTouched(false);
  };
  //    const reset = () => {
  //        setEnteredValue("");
  //        setisTouched(false);
  //    };

  return {
    hours: enteredHours,
    date: enteredDate,
    isValid: valueIsValid,
    hasError,
    hoursChangeHandler,
    dateChangeHandler,
    inputBlurHandler,
    inputResetHandler
  };
};

export default useInput;
