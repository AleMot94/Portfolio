import '@fontsource/roboto/500.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';


import { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function App() {

    const [ dark, setDark] = useState(true)

    const theme = createTheme({
      palette: {
        mode: dark ? "light" : "dark"
      }
    })

    const handleChange = (event) => {
      setDark(event.target.checked);
    };

  return (
    <ThemeProvider theme={theme}>
    <div>
      <NavBar/>
      <FormControlLabel control={<Switch checked={dark} onChange={handleChange}/>} label={dark ? "light" : "dark"} />
      <Main/>
    </div>
    </ThemeProvider>
  )
}

export default App
