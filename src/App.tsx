import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import Foo from './Foo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField 
          variant="outlined" 
          color="secondary" 
          type="date" 
        />
        <p>
          <Button variant="contained" color="primary">
            Spiel bla 
          </Button>
        </p>
        <Stack spacing={2} direction="row">
          <div> 
            <Button variant="contained" color="secondary" size="large">
              Team 1
            </Button>
            <p />
            <TextField id="outlined-basic" label="Tea 2" variant="outlined"/>
            <Foo></Foo>
          </div>
          <div> 
            <Button variant="contained" color="secondary" size="large">
              Team 2 
            </Button>
            <p />
              <TextField id="outlined-basic" label="Tea 2" variant="outlined"/>
            <Foo></Foo>
          </div>
          {/* <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Bla</Button> */}
        </Stack>

      </header>
    </div>
  );
}

export default App;
