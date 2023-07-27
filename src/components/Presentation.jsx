import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export const Presentation = () => {

    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = "/cv.pdf";
        downloadLink.download = "cv.pdf";
        downloadLink.click();
      };

    return(
        <Box sx={{ mt: "10%" }}>
            <Typography variant="h2" >Alejandro Motrel</Typography>
            <Typography variant="h4" sx={{ mt: 5}}>Desarrollador Web Full Stack Junior</Typography>
            <Typography variant="h5" sx={{ mt: 5}}>Stack MERN</Typography>
            <Typography variant="body1" sx={{ mt: 5}}>Hola! Gracias por ver mi portfolio como desarrollador web. <Link to="mailto:alejandromotrel@gmail.com" style={{ textDecoration: 'none' }}>alejandromotrel@gmail.com</Link></Typography>
            <Button variant="contained" sx={{ mt: 5}} onClick={handleDownload}>Descargar CV</Button>
            <Stack direction="row" spacing={11} sx={{mt: 9}} >
                <Link to="https://www.linkedin.com/in/alejandro-motrel-6a6875285/" target="_blank"><LinkedInIcon sx={{fontSize: 60}} /></Link>
                <Link to="https://github.com/AleMot94" target="_blank"><GitHubIcon sx={{fontSize: 60}} /></Link>
                <Link to="https://www.instagram.com/alejandromotrel/?hl=es" target="_blank"><InstagramIcon sx={{fontSize: 60}} /></Link>
            </Stack>    
        </Box>
    )
}