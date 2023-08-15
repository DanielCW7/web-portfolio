import { Box, Container, Typography } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group';
import BrushIcon from '@mui/icons-material/Brush';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useState, useRef, useEffect } from "react";
import anime from "animejs";


const AboutBlurb = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(        
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            { threshold: .8}
            // used threshold instead of "rootMargin"
        );
        
        observer.observe(ref.current);
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if(isIntersecting) {

            anime({
                targets: ".sections",
                translateY: {
                    value: 20,
                    duration: 250
                },
                opacity: 1,
                delay: anime.stagger(150),
                easing: "easeOutExpo"
                
            })

        }
    }, [isIntersecting])




    return (
        <Box className="flex flex-col justify-center bg-cover bg-fixed shadow">
            <Container ref={ref} sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
            }} className="gap-10 flex flex-col md:flex-row justify-center">
                <Box className="flex-1 flex flex-col justify-center text-center text-white sections opacity-0"> 
                    <DataObjectIcon className="text-6xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Developer </Typography>
                    <Typography variant="body1" className="text-center" gutterBottom> 
                        Building robust infrastructures, weaving technology to power the web's dynamic potential.
                    </Typography> 
                </Box>                    

                <Box className="flex-1 flex flex-col justify-center text-center text-white sections opacity-0"> 
                    <BrushIcon className="text-6xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Designer </Typography>
                    <Typography variant="body1" className="text-center" gutterBottom> 
                    Skilled in crafting engaging websites for positive user experiences.                    
                    </Typography> 
                </Box> 

                <Box className="flex-1 flex flex-col justify-center text-center text-white sections opacity-0"> 
                    <GroupIcon className="text-6xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Team Player </Typography>
                    <Typography variant="body1" className="text-center" gutterBottom> 
                        Helping others, contributing expertise, and achieving greatness through teamwork.
                    </Typography> 
                </Box> 
            </Container>
        </Box>
    )
}

export default AboutBlurb

