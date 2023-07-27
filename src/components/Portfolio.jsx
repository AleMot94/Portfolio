import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardPortfolio } from './CardPortfolio';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { FaReact, FaBootstrap, FaNode } from 'react-icons/fa';
import { SiMui, SiJavascript, SiMongodb, SiTypescript } from 'react-icons/si';

export const Portfolio = () => {

    const textEcommerce = { 
        title: "E-Commerce", 
        subheader: "Front End",
        paragraph: "Mi primer e-commerce, con login y base de datos en firebase. El usuario administrador esta autorizado a cargar, actualizar y eliminar productos de la base de datos . Al confirmar la compra envia la orden de compra al back, y es responsive design",
        refGitHub: "https://github.com/AleMot94/Ecommerce",
        refWeb: "",
        img: "/images/ecommerce.png",
        icons: [
            <Stack direction="row" spacing={1}><FaReact fontSize={40}/><Typography sx={{pt:1}}>React</Typography></Stack>, 
            <Stack direction="row" spacing={1}><FaBootstrap fontSize={40}/><Typography sx={{pt:1}}>Bootstrap</Typography></Stack>,
            <Stack direction="row" spacing={1}><SiJavascript fontSize={40}/><Typography sx={{pt:1}}>JavaScript</Typography></Stack>
        ]
    };
    const textPortfolio = { 
        title: "Portfolio", 
        subheader: "Front End",
        paragraph: "Es mi pagina web, donde aplico el dark-mode, echa en react con material ui y javascript",
        refGitHub: "https://github.com/AleMot94/Portfolio",
        refWeb: "",
        img: "/images/portfolio.png",
        icons: [
            <Stack direction="row" spacing={1}><FaReact fontSize={40}/><Typography sx={{pt:1}}>React</Typography></Stack>, 
            <Stack direction="row" spacing={1}><SiMui fontSize={40}/><Typography sx={{pt:1}}>MaterialUi</Typography></Stack>,
            <Stack direction="row" spacing={1}><SiJavascript fontSize={40}/><Typography sx={{pt:1}}>JavaScript</Typography></Stack>
        ]
    };

    const textRickAndMorty = { 
        title: "Rick And Morty", 
        subheader: "Front End",
        paragraph: "Es un e-commerce con una arquitectura mas profecional, donde utilizo redux con la api de rick and morty, aplico lazy-loading y router con indices. Hecho con typescript, y login en firebase",
        refGitHub: "https://github.com/AleMot94/Ryck-And-Morty",
        refWeb: "https://ryck-and-morty-m7nw2yqky-alejandromotrel-gmailcom.vercel.app",
        img: "/images/rickymorty.png",
        icons: [
            <Stack direction="row" spacing={1}><FaReact fontSize={40}/><Typography sx={{pt:1}}>React</Typography></Stack>, 
            <Stack direction="row" spacing={1}><SiMui fontSize={40}/><Typography sx={{pt:1}}>MaterialUi</Typography></Stack>,
            <Stack direction="row" spacing={1}><SiTypescript fontSize={40}/><Typography sx={{pt:1}}>TypeScript</Typography></Stack>
        ]
    };

    const textBackPractica = { 
        title: "Proyecto E-Commerce", 
        subheader: "Back End",
        paragraph: "un back end echo con express, donde aplicando todas las herramientas que estoy aprendiendo, todavia esta en desarrollo.",
        refGitHub: "https://github.com/AleMot94/Back_End_Proyect",
        refWeb: "",
        img: "/images/WEB.jpg",
        icons: [
            <Stack direction="row" spacing={1}><FaNode fontSize={40}/><Typography sx={{pt:1}}>NodeJS</Typography></Stack>, 
            <Stack direction="row" spacing={1}><SiJavascript fontSize={40}/><Typography sx={{pt:1}}>JavaScript</Typography></Stack>,
            <Stack direction="row" spacing={1}><SiMongodb fontSize={40}/><Typography sx={{pt:1}}>Mongo</Typography></Stack>
        ]
    };

    const texts = [ textEcommerce, textRickAndMorty, textPortfolio, textBackPractica ];
 
    return(
        <Box sx={{ mt: "3%", width: "100%"}} >
            <Typography variant='h3' sx={{mb:3}}>Portfolio</Typography>
            <Grid container direction="row" spacing={6} sx={{pb: 7}}>
                {texts.map((text) => {
                    return <Grid item key={text.title} >
                                <CardPortfolio 
                                    key={text.title} 
                                    title={text.title} 
                                    subheader={text.subheader}
                                    paragraph={text.paragraph}
                                    icons={text.icons}
                                    refGitHub={text.refGitHub}
                                    refWeb={text.refWeb}
                                    img={text.img}
                                />
                            </Grid>
                        })
                }  
            </Grid>
              
        </Box>
    )
}