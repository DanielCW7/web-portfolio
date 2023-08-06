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
                subtitle="I'm a lifelong learner with a desire to change the world. My focus is in Javascript and ReactJs."
                link="/projects"
                cta="My Work"
                img={dt}
            />

            <Box className="flex flex-col">
                <TechStack />
                <div className="polygon2 border-2 bg-gray-200 h-16 md:h-32"></div>                            
                <AboutBlurb />    
                <div className="polygon border-2 bg-gray-200 h-16 md:h-32"></div>                            
                <TypingSection />
                <Outro /> 
            </Box>
        </>
    )
  }
  
  export default HomePage;
  