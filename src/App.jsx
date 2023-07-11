import '@fontsource/roboto/500.css';
import { NavBar } from './components/NavBar';
import { Presentation } from './components/Presentation';
import { AboutMe } from './components/AboutMe';
import { Education } from './components/Education';
import { Portfolio } from './components/Portfolio';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';


import { useState } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import { lightTheme, darkTheme } from './utils/theme';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';


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

                <Box sx={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  height: '100vh', 
                  overflow: 'auto',
                  width: 1.20/5
                }}>
                  <NavBar dark={dark} handleChangeDark={handleChangeDark}/>
                </Box>

          
                <Box sx={{ml: "30%"}}>
                  <Routes>
                    <Route path='/' element={<Presentation />} />
                    <Route path='/aboutme' element={<AboutMe />} />
                    <Route path='/education' element={<Education />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                 </Box>
          
              </Box>

            </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
