
import './App.css';
import Form from './Form';

import { Container, CssBaseline, Typography } from '@mui/material';

function App() {
  return (
    <Container>
      <CssBaseline/>
      
      <Typography variant="h5">PCR Test Countdown</Typography>
      <Form/>
     
    </Container>
  );
}

export default App;
