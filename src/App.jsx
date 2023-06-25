import '@fontsource/roboto/500.css';
import { NavBar } from './components/NavBar';
import { Presentation } from './components/Presentation';
import { AboutMe } from './components/AboutMe';


import { useState } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import { lightTheme, darkTheme } from './utils/theme';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    const [ dark, setDark] = useState(true)

    const handleChangeDark = (event) => {
      setDark(event.target.checked);
    };

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>

          <CssBaseline/>

            <BrowserRouter>

              <Box>

                <Grid container >

                  <Grid item xs={3}>
                          <NavBar dark={dark} handleChangeDark={handleChangeDark}/>
                    </Grid>

                    <Grid item xs={9}>
                      <Routes>
                        <Route path='/' element={<Presentation />} />
                        <Route path='/aboutme' element={<AboutMe />} />
                      </Routes>
                    </Grid>

                </Grid>

              </Box>

            </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
