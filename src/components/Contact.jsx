import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HiOutlineMail } from "react-icons/hi"
import { BsWhatsapp } from "react-icons/bs"


export const Contact = () => {
    return(
        <Box sx={{ mt: "18%", width: 1.6/2 }}>
            
            <Typography variant='h3'>Contáctame !</Typography>
            <Box sx={{ ml: 5, mt: 8}}>
                <p><HiOutlineMail/> Email</p>
                <p><BsWhatsapp/> WhatsApp  +54 11 2255 1007</p>
                <p>LinkedIN</p>
                <p>Instagram</p>
            </Box>

        </Box>
    )
}