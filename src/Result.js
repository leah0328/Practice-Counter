import { Fragment } from "react";
import {Typography } from '@mui/material';

const Result = (props) => {
    return(
        <Fragment>
            <Typography variant="h5">Result</Typography>
            <Typography variant="h6">You should get tested on:</Typography>
            <Typography variant="h6">{props.resultDate}</Typography>
            <Typography variant="h6">{props.resultDay}</Typography>
            <Typography variant="h6" >{props.resultTime}</Typography>
        </Fragment>
    );
};

export default Result;