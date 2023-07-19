import Button from "@mui/material/Button"
import Nav from "@/components/nav";
import { useState } from "react";
import * as React from "react";
import Card from "@/components/card";
import CardContainer from "@/components/cardContainer";
import { Container, Box } from '@mui/material';
import Header from "@/components/header";
import ProjectDetails from "@/components/projectDetails";

function HomePage() {    


    return (
        <>
            <Header />
            <CardContainer/>
            <Box sx={{border: "solid red 1px"}}>
                <ProjectDetails/>
            </Box>
        </>
    )
  }
  
  export default HomePage;
  