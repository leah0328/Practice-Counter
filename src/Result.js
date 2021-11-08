import { Fragment } from "react";
import {Stack, Typography } from '@mui/material';

const Result = (props) => {
    return(
        <Fragment>
            <Stack spacing={3}>
            <Typography variant="h6">Result</Typography>
            <Typography variant="h7">You should get tested on:</Typography>
            <Typography variant="h7">{props.resultDate} {props.resultDay}</Typography>
            <Typography variant="h7">{props.resultTime}</Typography>
            </Stack>
        </Fragment>
    );
};

export default Result;