import * as React from "react";
import { Container, Box, Typography } from '@mui/material';
import Header from "@/components/header";
import ImageTiles from "@/components/imageTiles";
import married from "../images/married.webp"

const About = () => {    


    return (
        <>
            <Header 
                title="About Me" 
                subtitle=""
                link=""
                cta=""
                img={married}
            />
            <Box>
                <Container sx={{ p: 5 }}>
                    <Typography>
                        My web development Journey began in mid 2018 when I thought about how the internet actually works and what 
                        happens behind the scenes. After some careful thought and consideration, 
                        I decided to start learning front-end web development through Teamtreehouse's 
                        F.E.W.D. tech degree program. After devoting several hours each day to my studies, 
                        I finished my bootcamp in a few months.
                        <br/><br/>
                        Fast forward to today, I've expanded my knowledge and am constantly testing my limits on new technologies 
                        so that I can be an effective full-stack engineer. My stack is centered around
                        Javascript and other libraries and frameworks that expedite my development process. 
                        To be more specific, I focus on React, Next, Tailwind CSS, Material UI, Node, and Git. I also have 
                        extensive experience with HTML, CSS, responsive design,  and Javascript of course.
                        <br/><br/>
                        I consider myself a life-long learner who will work hard 
                        to stay up-to-date with the ever-changing technology of today. To me, experience is the best teacher. So, 
                        I am always looking for the next big challenge that will make me a better developer than I was yesterday.
                        <br/><br/>
                        My hobbies and interests are in sports, art, photography, ice skating, hiking, playing with my black lab, and 
                        spending time with my wonderful wife. On a quiet day when I'm not coding, I enjoy watching Netflix, planning for 
                        my future, and learning new recipes to try out on the grill!
                    </Typography>
                </Container>
            </Box>
            <ImageTiles />
        </>
    )
  }
  
  export default About;
  