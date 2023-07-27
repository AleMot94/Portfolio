import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export const NavBar = ({ dark, handleChangeDark }) => {

    return(
          <Box >
            <AppBar position="sticky">
              <Toolbar sx={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Box>
                  <FormControlLabel
                        sx={{ml: "100%"}}
                        control={<Switch checked={dark} onChange={handleChangeDark} color="secondary" />}
                        label={dark ? 'Light' : 'Dark'}
                    />
                </Box>
              
                <Avatar
                  alt="Alejandro Motrel"
                  src="/images/eva01.jpg"
                  sx={{ width: 180, height: 180, mt:7 }}
                />
                
                <Box sx={{display: "flex", flexDirection: "column", mt: 6}}>
                  <Link to={"/"}>
                   <Button fullWidth variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Presentación</Button>
                  </Link> 
                  <Link to={"/aboutme"}>
                    <Button fullWidth variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Acerca de Mi</Button>
                  </Link>
                  <Link to={"/portfolio"}>
                    <Button fullWidth variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Portfolio</Button>
                  </Link>
                  <Link to={"/education"}>
                    <Button fullWidth variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Educacion</Button>
                  </Link>
                  <Link to={"/skills"}>
                    <Button fullWidth variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Skills</Button>
                  </Link>
                  <Link to={"/contact"}>
                    <Button fullWidth variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Contacto</Button>
                  </Link>
                </Box>
              </Toolbar>
            </AppBar>
          </Box>
    )
}