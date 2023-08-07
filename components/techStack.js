import { Box, Container, Typography, Card, Button } from "@mui/material"
import html from "../images/icons/html.webp"
import js from "../images/icons/js.webp"
import css from "../images/icons/css.webp"
import react from "../images/icons/react.webp"
import git from "../images/icons/git.webp"
import tailwind from "../images/icons/tailwind.webp"
import wordpress from "../images/icons/wordpress.webp"
import node from "../images/icons/node.webp"
import Image from "next/image"

const TechStack = () => {

    

    function display(list) {
        const techStack = list.map(element => {
                                console.log(element.img.src)
                                return <Image height="60" width="60" src={element.img.src} className="m-auto" alt={element.img.alt} />
                            });
        return techStack
        
    }

    const tech = [
        {img: html, alt: "html"},
        {img: css, alt: "css"},
        {img: js, alt: "js"},
        {img: react, alt: "react"},
        {img: node, alt: "node"},
        {img: git, alt: "git"},
        {img: tailwind, alt: "tailwind"},
        {img: wordpress, alt: "wordpress"}
    ]

    return (
        <Box>
            <Container className="flex flex-col gap-10 md:flex-row justify-center" sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
            }}>
                <Box className="flex flex-row flex-1 justify-center h-min m-auto">
                    <Box className="grid grid-cols-4 gap-x-7 gap-y-7 md:gap-x-10 md:gap-y-10">
                        {/* displays images from the array */}
                        {tech ? display(tech) : "err"}   
                    </Box>
                </Box>

                <Box className="flex flex-col flex-1 justify-center">
                    <Typography gutterBottom className="font-black" variant="h2" sx={{
                        fontSize: {
                            xs: "2rem",
                            md: "3rem",
                            lg: "4rem"
                        }
                    }}> My Experience </Typography>
                    <Typography variant="body1"> 
                        Since 2019, I've been on a dedicated web development journey, 
                        progressing from HTML and CSS to exploring tools like Tailwind CSS, 
                        Next.js, and React. Embracing both familiar and lesser-known technologies with a humble approach, 
                        I've crafted responsive interfaces and user experiences while deepening my understanding of JavaScript. 
                        My journey continues as I strive for excellence and innovation in the ever-evolving world of web development.
                    </Typography>
                </Box>

            </Container>
        </Box>    
    )
}

export default TechStack