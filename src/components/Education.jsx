import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FaReact } from 'react-icons/fa';

export const Education = () => {
    return(
        <Box sx={{ mt: 5,mr: 15, ml: 30, flexGrow: 1, display: "inline-block"}} align="start">
            
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Typography variant='h1' sx={{typography: 'h3'}}>Educacion <FaReact/></Typography>
                    <Typography variant='h4' sx={{mt: 4}}>Universidad de Buenos Aires</Typography>
                    <Typography variant='h5' sx={{mt: 1}}>Carrera - Analista de Sistemas</Typography>
                    <Typography variant='body1' sx={{mt: 2, pl: 3}}>Actualmente cursando el CBC de ingreso a la carrera</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' sx={{mt: 13}}>Secundario</Typography>
                    <Typography variant='h5'sx={{mt: 8}}>Escuela secundaria tecnica n2</Typography>
                    <Typography variant='body1' sx={{mt: 1, pl: 3}}>Titulo Tecnico en Informatica Profesional y Personal</Typography>
                </Grid>
            </Grid>
                
                <Box sx={{mt: 5}}>
                    <Typography variant='h4'>Cursos</Typography>
                    <Typography variant='h5' sx={{mt: 2}}>Coder House</Typography>
                    <Grid container sx={{mt: 2}}>
                        <Grid item xs={6}>
                            <Typography variant='h6'>Desarrollador Web</Typography>
                            <Typography variant='body1' sx={{pl: 3}}>Desde 13/09/2021 - Hasta 15/11/2021</Typography>
                            <Typography variant='h6' sx={{mt: 1}}>Java Script</Typography>
                            <Typography variant='body1' sx={{pl: 3}}>Desde 02/03/2022 - Hasta 27/04/2022</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='h6'>React JS</Typography>
                            <Typography variant='body1' sx={{pl: 3}}>Desde 14/05/2022 - Hasta 25/06/2022</Typography>
                            <Typography variant='h6' sx={{mt: 1}}>Back End</Typography>
                            <Typography variant='body1' sx={{pl: 3}}>Desde 14/04/2023 - Cursando Actualmente</Typography>
                        </Grid>

                    </Grid>
                    
                </Box>
            
        </Box>
    )
}