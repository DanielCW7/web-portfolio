import Button from "@mui/material/Button"
import * as React from "react";
import laptop from "../images/laptop.webp"
import { Container, Box, Typography } from '@mui/material';
import Link from "next/link";
// props for background image, header title, subtitle, and relevant buttons

const Header = (props) => {
    console.log(props)

    return (
        <header>
            <Box sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${laptop.src})`,
                minHeight: {
                    xs: "30vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                backgroundPosition: 'center',  
                p: 5   
            }} className="w-full relative bg-cover bg-sticky bg-no-repeat flex flex-col justify-center">
                <Container>
                    <Typography sx={{
                        fontSize: {
                            xs: "3rem", 
                            sm: "4rem", 
                            md: "5rem"
                        },
                        color: "#fff",
                        fontWeight: "bold"
                    }} variant="h1"> {props?.title ?? ""} </Typography>
                    <Typography variant="overline" component="h2" sx={{color: "#fff"}} gutterBottom> 
                        {props.link === "/" ? "Front-end Engineer" : "" }
                    </Typography> 
                    <Typography sx={{color: "#fff"}} gutterBottom> {props?.subtitle ?? ""} </Typography> 

                    { props.cta 
                    ? <Link href={props.link}><Button variant="contain" sx={{ mt: 5}} className="glow-btn"> {props.cta} </Button></Link>
                    : null }
                </Container>
               
            </Box>
        </header>
    )
}

export default Header