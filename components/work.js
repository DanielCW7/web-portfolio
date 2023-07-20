import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Laptop from "../images/laptop.webp"
const Work = (props) => {
  return (
    <>
        <Card sx={{ width: 345, marginX: "auto" }}>
            <CardMedia sx={{ height: 140 }} image={`${Laptop.src}`} title="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {props.project} </Typography>
                <Typography variant="body2" color="text.secondary"> {props.description} </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"> Source </Button>
                <Button size="small"> Demo </Button>
            </CardActions>
        </Card>        
    </>

  );
}

export default Work