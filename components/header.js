// import from "@mui/material/Button"
import * as React from "react";
import { Container, Box, Typography, Button } from '@mui/material';
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import anime from "animejs";
import { useEffect } from "react";
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
                width: "100%",
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "sticky",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                
                <Image src={props.img} fill={true} className="header_Img" priority={true} />
                <Box className="gradient"></Box>

                <Container sx={{ p:5 }}>
                    <Typography sx={{
                        fontSize: {
                            xs: "3rem", 
                            sm: "4rem", 
                            md: "5rem"
                        },
                        color: "#fff",
                        fontWeight: "bold",
                        opacity: 0
                    }} variant="h1" id="title"> {props?.title ?? ""} </Typography>

                    <Typography sx={{ 
                        color: "#fff",
                        opacity: 0
                    }} variant="overline" component="h2" gutterBottom > 
                        {props.link === "/" ? "Front-end Engineer" : "" }
                    </Typography> 
                    <Typography sx={{ 
                        color: "#fff",
                        position: "relative",
                        opacity: 0
                    }} id="subtitle" gutterBottom> {props?.subtitle ?? ""} </Typography> 
                    <Box sx={{
                        display: "flex",
                        gap: 1
                    }}>
                        <Link href="https://github.com/DanielCW7">
                            <GitHubIcon sx={{
                                color: "#fff",
                                position: "relative",
                                opacity: 0
                            }} id="link1" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177">
                            <LinkedInIcon sx={{
                                color: "#fff",
                                position: "relative",
                                opacity: 0
                            }} id="link2" />
                        </Link>
                    </Box>
                    { props.cta 
                    ? <Link href={props.link}><Button sx={{ 
                        mt: 5,
                        opacity: 0
                    }} id="cta" variant="contain" className="glow-btn"> {props.cta} </Button></Link>
                    : null }
                </Container>

            </Box>
        </header>
    )
}

export default Header