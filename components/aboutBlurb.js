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
                targets: ".blurbs",
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
        <Box className="shadow" sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundPosition: "fixed",
            backgroundSize: "cover"
        }}>
            <Container ref={ref} sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5,
                display: "flex",
                justifyContent: "center",
                flexDirection: {
                    xs: "column",
                    lg: "row"
                },
                columnGap: 10,
                rowGap: 5
            }}>
                <Box className="blurbs"> 
                    <DataObjectIcon className="blurbIcons" />
                    <Typography variant="h5" component="h3" gutterBottom> Developer </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom> 
                        Utilizing knowledge learned to power the web's dynamic potential.
                    </Typography> 
                </Box>                    

                <Box className="blurbs"> 
                    <BrushIcon className="blurbIcons" />
                    <Typography variant="h5" component="h3" gutterBottom> Designer </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom> 
                    Skilled in crafting engaging websites for positive user experiences.                    
                    </Typography> 
                </Box> 

                <Box className="blurbs"> 
                    <GroupIcon className="blurbIcons" />
                    <Typography variant="h5" component="h3" gutterBottom> Team Player </Typography>
                    <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom> 
                        Helping others, contributing expertise, and achieving greatness through teamwork.
                    </Typography> 
                </Box> 
            </Container>
        </Box>
    )
}

export default AboutBlurb

