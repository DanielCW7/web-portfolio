import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

const Work = () => {
    return (
            <Card sx={{ minWidth: 275 }}>

                <CardContent>
                    <Typography variant="h4"> Weather App </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2"> 
                        This project was made to render weather forecast data based on the location provided by user input.
                        It utilizes Javascript, React, Tailwind CSS and REST API
                    </Typography>
                    <Button> Source </Button>
                    <Button> Demo </Button>

                    <div>
                        <Chip label="JS"></Chip>
                        <Chip label="React"></Chip> 
                        <Chip label="Tailwind"></Chip>                        
                        <Chip label="REST API"></Chip>                        
                        <Chip label="HTML/CSS"></Chip>                        
                    </div>


                </CardContent>

            </Card>        

    )
}

export default Work