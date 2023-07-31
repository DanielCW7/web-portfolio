import { useState } from "react";
import * as React from "react";
import { Container, Box } from '@mui/material';
import Header from "@/components/header";
import dt from "../images/dt_3.webp"
import AboutBlurb from "@/components/aboutBlurb";
import Footer from "@/components/footer";
import Outro from "@/components/outro";
import BuildingBlock from "../components/buildingBlock";

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
            <BuildingBlock />
            <Box className="flex flex-col gap-20">
                <AboutBlurb />                
                <Outro />
            </Box>
            <Footer />
        </>
    )
  }
  
  export default HomePage;
  