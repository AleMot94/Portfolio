import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { FaReact, FaCss3, FaHtml5, FaBootstrap, FaNode } from 'react-icons/fa';
import { SiMui, SiJavascript, SiMongodb } from 'react-icons/si';
import Button from '@mui/material/Button';


export const Skills = () => {
    return(
        <Box sx={{ mt: "8%", width: 1.6/2}}>
            <Typography variant='h3'>Skills</Typography>
            <Box>
                <Typography variant='h4'sx={{mt: 5}}>Lenguajes</Typography>
                <Box sx={{ display: "flex", mt: 2, pl: 5}}>
                    <Button variant='contained' color="secondary" sx={{mr: 4}}>HTML <FaHtml5/></Button>
                    <Divider sx={{ borderWidth: 1.5, backgroundColor: "white", mt: 0, mb: 0, mr: 4}} orientation="vertical" variant="middle" flexItem/>
                    <Button variant='contained' color="secondary" sx={{mr: 4}}>CSS <FaCss3/></Button>
                    <Divider sx={{ borderWidth: 1.5, backgroundColor: "white", mt: 0, mb: 0, mr: 4}} orientation="vertical" variant="middle" flexItem/>
                    <Button variant='contained' color="secondary" sx={{mr: 4}}>Java Script <SiJavascript/></Button>
                </Box>
            </Box>

            <Box>
                <Typography variant='h4' sx={{mt: 3}}>Framewors y Librerias</Typography>
                <Box sx={{ display: "flex", mt: 2, pl: 5}}>
                    <Button variant='contained' color="secondary" sx={{mr: 4}}>REACT<FaReact/></Button>
                    <Divider sx={{ borderWidth: 1.5, backgroundColor: "white", mt: 0, mb: 0, mr: 4}} orientation="vertical" variant="middle" flexItem/>
                    <Button variant='contained' color="secondary" sx={{mr: 4}}>Material UI <SiMui/></Button>
                    <Divider sx={{ borderWidth: 1.5, backgroundColor: "white", mt: 0, mb: 0, mr: 4}} orientation="vertical" variant="middle" flexItem/>
                    <Button variant='contained' color="secondary" sx={{mr: 4}}>Bootstrap <FaBootstrap/></Button>
                    <Divider sx={{ borderWidth: 1.5, backgroundColor: "white", mt: 0, mb: 0, mr: 4}} orientation="vertical" variant="middle" flexItem/>
                    <Button variant='contained' color="secondary" sx={{mr: 4}}>Node<FaNode/></Button>
                </Box>
            </Box>

            <Box>
                <Typography variant='h4' sx={{mt: 3}}>Base de Datos</Typography>
                <Box sx={{ display: "flex", pl: 5, mt: 1}}>
                    <Button variant='contained' color="secondary">Mongo<SiMongodb/></Button>
                </Box>
            </Box>
            
            
        </Box>
    )
}