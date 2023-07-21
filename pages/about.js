import * as React from "react";
import { Container, Box } from '@mui/material';
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

            </Box>
        </>
    )
  }
  
  export default About;
  