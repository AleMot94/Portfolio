import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom';

import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export const NavBar = ({ dark, handleChangeDark }) => {

    

    return(
          <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static">

              <Toolbar sx={{ display: 'flex', flexDirection: 'column', height: '100vh'}}>

                <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: 'space-between'}}>
                    
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2}}
                    >
                      <MenuIcon />
                    </IconButton>

                  <FormControlLabel
                        control={<Switch checked={dark} onChange={handleChangeDark} color="secondary" />}
                        label={dark ? 'Light' : 'Dark'}
                    />

                </Box>
              
                <Typography variant="h6" component="div" sx={{ mt: 3,border: 5, width: 150, height: 180}}>
                  Mi Foto
                </Typography>
                <Box sx={{display: "flex", flexDirection: "column", mt: 6}}>
                  <Link to={"/"}>
                   <Button variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Motrel</Button>
                  </Link>
                  <Link to={"/aboutme"}>
                    <Button variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Acerca de Mi</Button>
                  </Link>
                  <Link to={"/aboutme"}>
                    <Button variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Portfolio</Button>
                  </Link>
                  <Link to={"/aboutme"}>
                    <Button variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Educacion</Button>
                  </Link>
                  <Link to={"/aboutme"}>
                    <Button variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Skills</Button>
                  </Link>
                  <Link to={"/aboutme"}>
                    <Button variant="contained" color="secondary" sx={{mt:2, fontSize: 15}} >Contacto</Button>
                  </Link>
              
                </Box>

              </Toolbar>

            </AppBar>

        </Box>
    )
}