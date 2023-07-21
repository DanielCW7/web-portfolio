import * as React from "react";
import { Container, Box, Typography } from '@mui/material';
import Header from "@/components/header";
import profile from "../images/profile.jpg"

const About = () => {    


    return (
        <>
            <Header 
                title="About Me" 
                subtitle=""
                link=""
                cta=""
                img={profile}
            />
            <Box>
                <Typography>
                    My coding Journey began in mid 2018 when I pondered how awesome it would be 
                    to learn how to code.
                </Typography>
            </Box>
        </>
    )
  }
  
  export default About;
  