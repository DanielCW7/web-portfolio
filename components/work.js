import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Chip, Box } from '@mui/material';


const Work = (props) => {


    function badges(attribute) {
        const list = attribute.map((item) => {
            return <Chip label={item} />
        })
        return list
    }

  return (
        <Card sx={{ 
            width: 345,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }} key={props.project} >
            <CardMedia sx={{ height: 140 }} image={`${props.thumbnail}`} title={props.project} />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {props.project} </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary"> {props.description} </Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    flexWrap: "wrap"
                }} >
                    {props?.badges ? badges(props.badges) : ""}
                </Box>

            </CardContent>


            <CardActions sx={{
                marginTop: "auto"
            }}>
                <Link href={props?.sourceCode ?? "https://github.com/DanielCW7"}><Button size="small"> Source Code </Button></Link>
                <Button href={props?.demo ?? "https://github.com/DanielCW7"} size="small"> Demo </Button>
            </CardActions>
        </Card>        
  );
}

export default Work