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
        let timeLine = anime.timeline({
            duration: 500
        })

        timeLine   
        .add({
            targets: "#title",
            keyframes: [
                {translateX: 50, opacity: 0},
                {translateX: 0, opacity: 1}
            ],
            easing: "easeOutExpo",
            loop: false
        }, 0)

        .add({
            targets: "#subtitle",
            keyframes: [
                {translateX: 50, opacity: 0},
                {translateX: 0, opacity: 1}
            ],
            easing: "easeOutExpo",
        }, 50)

        .add({
            targets: "#link1",
            keyframes: [
                {translateX: 50, opacity: 0},
                {translateX: 0, opacity: 1}
            ],
            easing: "easeOutExpo",
        }, 150)

        .add({
            targets: "#link2",
            keyframes: [
                {translateX: 50, opacity: 0},
                {translateX: 0, opacity: 1}
            ],
            easing: "easeOutExpo",
        }, 250)

        .add({
            targets: "#cta",
            keyframes: [
                {translateY: 50, opacity: 0},
                {translateY: 0, opacity: 1,}
            ]
        }, 350)           
    }, [])
    
    return (
        <header className="min-h-70 overflow-hidden">
            <Box sx={{
                // backgroundImage: `linear-gradient(rgb(12, 12, 12, .7), rgb(12, 12, 12, .7)), url(${props.img.src})`,
                minHeight: "70vh",
            }} className="w-full relative bg-cover bg-sticky bg-no-repeat flex flex-col justify-center">
                
                <Image src={props.img} fill={true} className="object-cover header_Img" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-70 pointer-events-none"></div>

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

                    <Typography variant="overline" component="h2" className="text-white opacity-0" gutterBottom > 
                        {props.link === "/" ? "Front-end Engineer" : "" }
                    </Typography> 
                    <Typography sx={{color: "#fff"}} id="subtitle" className="relative opacity-0" gutterBottom> {props?.subtitle ?? ""} </Typography> 
                    <Box className="flex gap-2 justify-start">
                        <Link href="https://github.com/DanielCW7"><GitHubIcon id="link1" className="text-white relative opacity-0" /></Link>
                        <Link href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177"><LinkedInIcon id="link2" className="text-white relative opacity-0" /></Link>
                    </Box>
                    { props.cta 
                    ? <Link href={props.link}><Button id="cta" variant="contain" sx={{ mt: 5 }} className="glow-btn mt-5 opacity-0"> {props.cta} </Button></Link>
                    : null }
                </Container>

            </Box>
        </header>
    )
}

export default Header