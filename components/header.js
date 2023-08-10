import Button from "@mui/material/Button"
import * as React from "react";
import { Container, Box, Typography } from '@mui/material';
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import anime from "animejs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const Header = (props) => {

    useEffect(() => {
            anime({
                targets: "#title",
                keyframes: [
                    {translateX: 50, opacity: 0},
                    {translateX: 0, opacity: 1}
                ],
                easing: "easeOutExpo",
                loop: false
            })

            
    }, [])
    
    return (
        <header>
            {/* <Image src={props.img.src} width={500} height={500} className="absolute z-10" /> */}
            <Box sx={{
                backgroundImage: `linear-gradient(rgb(12, 12, 12, .7), rgb(12, 12, 12, .7)), url(${props.img.src})`,
                minHeight: "70vh",
                backgroundPosition: 'center'
            }} className="w-full relative bg-cover bg-sticky bg-no-repeat flex flex-col justify-center">
                <Container sx={{ p:5 }}>
                    
                    <Typography sx={{
                        fontSize: {
                            xs: "3rem", 
                            sm: "4rem", 
                            md: "5rem"
                        },
                        color: "#fff",
                        fontWeight: "bold"
                    }} variant="h1" id="title" className="opacity-0"> {props?.title ?? ""} </Typography>

                    <Typography variant="overline" component="h2" className="text-white" gutterBottom id="subtitle"> 
                        {props.link === "/" ? "Front-end Engineer" : "" }
                    </Typography> 
                    <Typography sx={{color: "#fff"}} gutterBottom> {props?.subtitle ?? ""} </Typography> 
                    <Box className="flex gap-2 justify-start">
                        <Link href="https://github.com/DanielCW7"><GitHubIcon className="text-white" /></Link>
                        <Link href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177"><LinkedInIcon className="text-white" /></Link>
                    </Box>
                    { props.cta 
                    ? <Link href={props.link}><Button variant="contain" sx={{ mt: 5}} className="glow-btn mt-5"> {props.cta} </Button></Link>
                    : null }
                </Container>

            </Box>
        </header>
    )
}

export default Header