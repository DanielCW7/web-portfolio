import Button from "@mui/material/Button"
import Nav from "@/components/nav";
import { useState } from "react";
import * as React from "react";
import Card from "@/components/card";
import CardContainer from "@/components/cardContainer";
import { Container } from '@mui/material';
import Header from "@/components/header";

function HomePage() {    


    return (
        <>
            <Nav />
            <Header />
            <CardContainer/>
        </>
    )
  }
  
  export default HomePage;
  