import Button from "@mui/material/Button"
import * as React from "react";
import { Container, Box, Typography } from '@mui/material';
import Link from "next/link";
// props for background image, header title, subtitle, and relevant buttons

const Header = (props) => {

    
    return (
        <header>
            <Box sx={{
                backgroundImage: `linear-gradient(rgb(12, 12, 12, .7), rgb(12, 12, 12, .7)), url(${props.img.src})`,
                minHeight: "70vh",
                backgroundPosition: 'center'
            }} className="w-full relative bg-cover bg-sticky bg-no-repeat flex flex-col justify-center">
                <Container className="" sx={{ p:5 }}>
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
                    <Typography sx={{color: "#fff"}} > {props?.subtitle ?? ""} </Typography> 

                    { props.cta 
                    ? <Link href={props.link}><Button variant="contain" sx={{ mt: 5}} className="glow-btn mt-5"> {props.cta} </Button></Link>
                    : null }
                </Container>
               
            </Box>
        </header>
    )
}

export default Header