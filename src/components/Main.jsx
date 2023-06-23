import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const Main = () => {

    return(
        <Box sx={{ marginTop: 23}} align="center">
            <Typography variant="h1" >Alejandro Motrel</Typography>
            <Typography variant="body1" align="center" sx={{ marginTop: 10,width: 1/2}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi iure nesciunt voluptatum amet voluptate harum, cumque adipisci rerum commodi quisquam excepturi provident eum sint itaque, molestias eos nulla. Necessitatibus, a?</Typography>
        </Box>
    )
}