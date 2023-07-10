import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardPortfolio } from './CardPortfolio';


import { FaReact, FaCss3, FaHtml5, FaBootstrap, FaNode, FaGithub, FaLink } from 'react-icons/fa';
import { SiMui, SiJavascript, SiMongodb } from 'react-icons/si';

export const Portfolio = () => {

    const textEcommerce = { 
        title: "E-Commerce", 
        subheader: "Front End",
        paragraph: "Una muy buena descripcion, bastante general de todo lo que se hizo.",
        refGitHub: "",
        refWeb: "",
        icons: [
            <FaReact/>, 
            <FaBootstrap/>
        ]
    };
    const textPortfolio = { 
        title: "Portfolio", 
        subheader: "Front End" 
    };

    const texts = [ textEcommerce, textPortfolio ];
 
    return(
        <Box sx={{ mt: "8%", width: 1.6/2}} >
            <Typography variant='h3'>Portfolio</Typography>
            <Box sx={{ display: "flex", flexDirection: "row"}}>
                {texts.map((text) => {
                    return <CardPortfolio 
                        key={text.title} 
                        title={text.title} 
                        subheader={text.subheader}
                        paragraph={text.paragraph}
                        icons={text.icons}
                        refGitHub={text.refGitHub}
                        refWeb={text.refWeb}
                    />
                })}  
            </Box>
              
        </Box>
    )
}