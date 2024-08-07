import { Box, Button, Container, Typography } from "@mui/material"
import mui from "../images/icons/mui.webp"
import html from "../images/icons/html.webp"
import js from "../images/icons/js.webp"
import css from "../images/icons/css.webp"
import react from "../images/icons/react.webp"
import git from "../images/icons/git.webp"
import tailwind from "../images/icons/tailwind.webp"
import wordpress from "../images/icons/wordpress.webp"
import node from "../images/icons/node.webp"
import py from "../images/icons/py.png"
import Image from "next/image"
import { useState, useRef, useEffect } from "react";
import anime from "animejs";
// import DownloadIcon from '@mui/icons-material/Download';

const TechStack = () => {

const [isIntersecting, setIsIntersecting] = useState(false);
const ref = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(        
        ([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        },
        { threshold: .8}
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect()
}, [])

useEffect(() => {
    if(isIntersecting) {

        let timeLine = anime.timeline({
            duration: 500
        })

        timeLine   

        .add({
            targets: ".tech",
            translateY: {
                value: 20,
                duration: 250
            },
            opacity: 1,
            easing: "easeOutExpo"
        }, 50)

        .add({
            targets: "#techCopy",
            translateY: {
                value: 20,
                duration: 250
            },
            opacity: 1,
            delay: anime.stagger(150),
            easing: "easeOutExpo"
        }, 50)

    }
}, [isIntersecting])
    

    function display(list) {
        const techStack = 
        list.map(element => {
            return <Image height="60" width="60" src={element.img.src} className="tech" alt={element.alt} loading="lazy" />
        });
        return techStack
        
    }

    const tech = [
        {img: html, alt: "Html"},
        {img: css, alt: "Css"},
        {img: js, alt: "Javascript"},
        {img: react, alt: "React"},
        {img: tailwind, alt: "Tailwind"},
        {img: node, alt: "Node"},
        {img: mui, alt: "Material UI"},
        {img: git, alt: "Git"},
        {img: wordpress, alt: "Wordpress"},
        {img: py, alt: "Python"}
    ]

    return (
        <Box>
            <Container sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                gap: "2.5rem",
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5,
                justifyContent: "center"
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    flex: "1 1 0%",
                    justifyContent: "center",
                    margin: "auto"
                }}>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(5, minmax(0, 1fr))",
                            md: "repeat(4, minmax(0, 1fr))"
                        },
                        columnGap: {
                            xs: "1.0rem",
                            lg: "2.0rem"
                        },
                        rowGap: {
                            xs: "1.0rem",
                            lg: "2.0rem"
                        }

                    }} ref={ref}>
                        {/* displays images from the array */}
                        {tech ? display(tech) : "Still working on this!"}   
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 0%",
                    justifyContent: "center",
                    opacity: 0
                }} id="techCopy">
                    <Typography gutterBottom variant="h2" sx={{
                        fontSize: {
                            xs: "2rem",
                            md: "3rem",
                            lg: "4rem"
                        },
                        fontWeight: 900
                    }}> My Experience </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "25px"}}> 
                        Since 2019, I've been on a dedicated web development journey, 
                        progressing from HTML and CSS to exploring tools like Tailwind CSS, 
                        Nextjs, and Reactjs. Embracing both familiar and lesser-known technologies with a learner's mindet, 
                        I've crafted responsive interfaces and user experiences while deepening my understanding of development. 
                        Today, my journey continues as I strive for excellence and innovation in the ever-evolving world of web development.
                    </Typography>
                    {/* <Button variant="outlined" sx={{ width: "max-content"}} startIcon={<DownloadIcon/>}> Download Resume </Button> */}
                </Box>

            </Container>
        </Box>    
    )
}

export default TechStack