import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Presentation = () => {

    return(
        <Box sx={{ mt: 20, ml: 30, flexGrow: 1, display: "inline-block"}} align="start">
            <Typography variant="h1" sx={{typography: 'h3'}} >Alejandro Motrel</Typography>
            <Typography variant="body1" sx={{ mt: 6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. cajscnjsd@hotmail.com</Typography>
            <Button variant="contained" sx={{ mt: 6}}>Descargar CV</Button>
            <Box sx={{display: "flex", flexDirection: "row", width: 1/4, justifyContent: 'space-between', mt: 6}}>
                <Box><LinkedInIcon sx={{fontSize: 45}} /></Box>
                <Box><GitHubIcon sx={{fontSize: 45}} /></Box>
                <Box><InstagramIcon sx={{fontSize: 45}} /></Box>
            </Box>
        </Box>
    )
}