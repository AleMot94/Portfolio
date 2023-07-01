import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaReact, FaCss3, FaHtml5, FaBootstrap, FaNode, FaGithub, FaLink } from 'react-icons/fa';
import { SiMui, SiJavascript, SiMongodb } from 'react-icons/si';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const CardPortfolio = ({title, subheader, paragraph, refLink} ) => {
   
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      }

    return(
        <Card variant="outlined" sx={{ maxWidth: 350, mt: 6, mx: 5, borderColor: 'primary.main', border: 2 }}>
                    <CardHeader
                        title={title}
                        subheader={subheader}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/images/WEB.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        {paragraph}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                        <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography >Iconos con links </Typography>
                            <Box>
                            <Link to={"https://www.youtube.com/"}><FaGithub/></Link>
                            <Link to={"https://www.youtube.com/"}><FaLink/></Link>
                            </Box>
                            <Typography >Tecnologias usadas </Typography>
                            <Box>
                            <FaGithub/>
                            <FaLink/>
                            </Box>
                        </CardContent>
                    </Collapse>
                </Card>
    )

      
}