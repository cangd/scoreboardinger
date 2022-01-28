import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css';
import Foo from './Foo';
import theme from './theme'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack spacing={2} direction="row">
        <div> <TextField id="outlined-basic" label="Tean 1" variant="outlined"/>
          <Foo></Foo>
        </div>
        <div> <TextField id="outlined-basic" label="Tean 2" variant="outlined"/>
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
