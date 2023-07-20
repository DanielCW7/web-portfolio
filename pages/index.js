import { useState } from "react";
import * as React from "react";
import { Container, Box } from '@mui/material';
import Header from "@/components/header";
import laptop from "../images/laptop.webp"
import AboutBlurb from "@/components/aboutBlurb";
import ProjectBlurb from "@/components/projectsBlurb";

const HomePage = () => {    


    return (
        <>
            <Header 
                title="Daniel C. Wilson" 
                subtitle="I'm a lifelong learner with a desire to change the world. My focus is in Javascript and ReactJs."
                link="/projects"
                cta="My Work"
                img={laptop}
            />
            
            <Box className="flex flex-col gap-20 my-20">
                <ProjectBlurb />
                <AboutBlurb />                
            </Box>

        </>
    )
  }
  
  export default HomePage;
  