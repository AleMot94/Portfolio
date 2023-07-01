import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardPortfolio } from './CardPortfolio';



/* import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; */


/* const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
 */

export const Portfolio = () => {

    /* const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    } */

    return(
        <Box sx={{ mt: 3,mr: 15, ml: 30, flexGrow: 1, display: "inline-block"}} align="start">
            <Typography variant='h3'>Portfolio</Typography>
            <CardPortfolio title="titulo" subheader="sub titulo" paragraph="descripcion"></CardPortfolio>


           {/*  <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between"}}>
                <Box>
                <Card variant="outlined" sx={{ maxWidth: 350, mt: 6, mx: 5, borderColor: 'primary.main', border: 2 }}>
                    <CardHeader
                        title="E-commerce"
                        subheader="Front End"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/images/WEB.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                        <ExpandMore
                        expand={expanded1}
                        onClick={handleExpandClick1}
                        aria-expanded={expanded1}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded1} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                </Box>
                

                <Card sx={{ maxWidth: 350, mt: 6, mx: 5 }}>
                    <CardHeader
                        
                    
                        title="E-commerce"
                        subheader="Front End"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/images/WEB.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                        <ExpandMore
                        expand={expanded2}
                        onClick={handleExpandClick2}
                        aria-expanded={expanded2}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded2} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        </CardContent>
                    </Collapse>
                </Card>

                <Card sx={{ maxWidth: 350, mt: 6, mx: 5 }}>
                    <CardHeader
                        
                    
                        title="E-commerce"
                        subheader="Front End"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/images/WEB.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                        <ExpandMore
                        expand={expanded3}
                        onClick={handleExpandClick3}
                        aria-expanded={expanded3}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded3} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Method:</Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Box> */}
            
        </Box>
    )
}