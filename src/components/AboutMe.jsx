import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const AboutMe = () =>{
    return(
        <Box sx={{ mt: 15,mr: 15, ml: 30, flexGrow: 1, display: "inline-block"}} align="start">
            <Typography variant="h1" sx={{typography: 'h3'}} >Sobre Mi</Typography>
            <Typography variant="body1" sx={{ mt: 6}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, facilis. Voluptatibus exercitationem repellendus tempora nostrum esse vel rerum ea fuga est enim! Pariatur cupiditate nihil suscipit ad expedita assumenda aperiam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed hic quae molestiae in cumque iste voluptates ex rerum harum, eius ipsum porro maiores at illo, fugiat voluptate dolor possimus dolorem?</Typography>
            <Typography sx={{typography: 'h5',  mt: 6}} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        </Box>
    )
}