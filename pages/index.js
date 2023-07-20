import Button from "@mui/material/Button"
import Nav from "@/components/nav";
import { useState } from "react";
import * as React from "react";
import Card from "@/components/card";
import CardContainer from "@/components/cardContainer";
import { Container, Box } from '@mui/material';
import Header from "@/components/header";
import ProjectDetails from "@/components/projectDetails";
import laptop from "../images/laptop.webp"
import AboutBlurb from "@/components/aboutBlurb";

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
            <CardContainer/>
            <Box sx={{border: "solid red 1px"}}>
                <ProjectDetails/>
            </Box>
            <Box>
                <AboutBlurb />
            </Box>
        </>
    )
  }
  
  export default HomePage;
  