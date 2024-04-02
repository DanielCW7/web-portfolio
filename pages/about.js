import * as React from "react";
import { Container, Box, Typography, Card, CardMedia } from '@mui/material';
import Header from "@/components/header";
import married from "../images/aboutImages/married.webp"
import headshot from "../images/aboutImages/headshot.webp"

const About = () => {    


    return (
        <>
            <Header 
                title="About Me" 
                subtitle=""
                link=""
                cta=""
                img={married}
                alt="me and my wife"
            />
            <Box>
                <Container sx={{ 

                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        lg: "row"
                    },
                    p: 5 
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <Card sx={{
                            height: {
                                xs: "200px",
                                lg: "300px"
                            }, 
                            width: {
                                xs: "200px",
                                lg: "300px"
                            },                            
                            borderRadius: "50%",
                            margin: {
                                xs: "10px auto 25px",
                                lg: "0px 50px"
                            }
                        }}>
                            <CardMedia sx={{
                                height: {
                                    xs: "200px",
                                    lg: "300px"
                                }                            
                            }} image={headshot.src} alt="professional headshot" />
                        </Card>
                    </Box>
                    <Box>
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
                    </Box>

                </Container>
            </Box>
        </>
    )
  }
  
  export default About;
  