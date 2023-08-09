import * as React from "react";
import { Container, Box } from '@mui/material';
import Header from "@/components/header";
import dt from "../images/dt_3.webp"
import AboutBlurb from "@/components/aboutBlurb";
import Outro from "@/components/outro";
import TypingSection from "../components/typingSection";
import TechStack from "@/components/techStack";

const HomePage = () => {    

    

    return (
        <>
            <Header 
                title="Daniel C. Wilson" 
                subtitle="I'm a Front-end ReactJs Engineer with a desire to change the world!"
                link="/projects"
                cta="My Work"
                img={dt}
            />

            <Box className="flex flex-col radial">
                <Box className="bg-white">
                    <TechStack />
                </Box>
                <Box className="bg-white">
                    <div className="polygon2 radial h-16 md:h-32"></div>
                </Box> 
                <AboutBlurb />                  
                <Box className="bg-white">
                    <div className="polygon radial h-16 md:h-32"></div> 
                </Box>  
                <Box className="bg-white">
                    <TypingSection />                  
                </Box>
                <Box className="bg-white">                         
                    <Outro /> 
                </Box>
            </Box>
        </>
    )
  }
  
  export default HomePage;
  