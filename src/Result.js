import { Fragment } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
    resultFont:{
        fontWeight: 600
    }
});

const Result = (props) => {
    const styles = useStyles();
    const blue = "#dce4f2";

  return (
    <Fragment>
      <Typography variant="h6">Result</Typography>
      <Box>
        <Paper sx={{ marginTop: 5, width: 350, height: 200, padding: 3, backgroundColor: blue}}>
          <Stack spacing={4}>
            <Typography variant="h7" bold>You should get tested on:</Typography>
            <Typography className={styles.resultFont} variant="h7">
              {props.resultDate} {props.resultDay}
            </Typography>
            <Typography className={styles.resultFont} variant="h7">{props.resultTime}</Typography>
          </Stack>
        </Paper>
      </Box>
    </Fragment>
  );
};

export default Result;
