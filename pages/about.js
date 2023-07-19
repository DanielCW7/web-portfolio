import Button from "@mui/material/Button"
import Nav from "@/components/nav";
import { useState } from "react";
import * as React from "react";
import Card from "@/components/card";
import CardContainer from "@/components/cardContainer";
import { Container, Box } from '@mui/material';
import Header from "@/components/header";
import ProjectDetails from "@/components/projectDetails";
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
            <CardContainer/>
            <Box>
                <ProjectDetails/>
            </Box>
        </>
    )
  }
  
  export default About;
  