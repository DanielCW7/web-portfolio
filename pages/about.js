import * as React from "react";
import { Container, Box, Typography } from '@mui/material';
import Header from "@/components/header";
import laptop from "../images/laptop2.jpg"

const About = () => {    


    return (
        <>
            <Header 
                title="About Me" 
                subtitle=""
                link=""
                cta=""
                img={laptop}
            />
            <Box>
                <Container sx={{ p: 5 }}>
                    <Typography>
                        My coding Journey began in mid 2018 when I pondered how awesome it would be 
                        if I learned how to code. After some careful thought and exploring some options, 
                        I decided to start learning front-end web development through Teamtreehouse's 
                        F.E.W.D. tech degree! I completed this course in a few months, spending a few hours 
                        every day to learn! 
                        <br/><br/>
                        Fast forward to today, I've expanded my knowledge and am constantly testing my limits on new technologies 
                        so that I can be an effective full-stack engineer! My stack is centered around
                        Javascript and other libraries and frameworks that expedite my development process. 
                        To be more specific, I focus on React.js, Next.js, Tailwind CSS, Node.js and Git. I also have 
                        extensive experience with HTML, CSS, responsive design, and Javascript of course.
                        <br/><br/>
                        I do consider myself a life-long learner. I will always be a student that needs to know 
                        more to stay up-to-date with changing technology. To me, experience is the best teacher. So, 
                        I am always looking for the next big challenge that will take me one step further than I've ever 
                        gone before!         
                    </Typography>
                </Container>
                
          
            </Box>
        </>
    )
  }
  
  export default About;
  