import * as React from 'react';
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
import Stack from '@mui/material/Stack';
import { FaGithub, FaLink } from 'react-icons/fa';



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

export const CardPortfolio = ({title, subheader, paragraph, icons, refGitHub, refWeb, img} ) => {
   
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      }

    return(
        <Card variant="outlined" sx={{ width: 465, borderColor: 'primary.main', border: 2 }}>
                    <CardHeader
                        title={title}
                        subheader={subheader}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body1" fontSize={22} color="text.secondary">
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
                            <Stack direction="row" spacing={3}>
                                <Link to={refGitHub} target="_blank"><FaGithub fontSize={40}/></Link>
                                <Link to={refWeb} target="_blank"><FaLink fontSize={40}/></Link>
                            </Stack>
                            <Typography variant='body1' fontSize={22}>Tecnologias usadas </Typography>
                            <Stack direction="row" spacing={3} sx={{mt:2}}>
                                {icons}
                            </Stack>
                        </CardContent>
                    </Collapse>
                </Card>
    )
}