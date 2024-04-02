import * as React from "react";
import { Box } from '@mui/material';
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
                subtitle="I'm a Front-end ReactJs Engineer with a passion for coding!"
                link="/projects"
                cta="My Work"
                img={dt}
            />

            <Box className="radial">
                <Box sx={{
                    backgroundColor: "#fff"
                }}>
                    <TechStack />
                </Box>
                <Box sx={{
                    backgroundColor: "#fff"
                }}>
                    <Box sx={{
                        height: {
                            xs: "4rem",
                            lg: "8rem"
                        }
                    }} className="polygon2 radial"></Box>
                </Box> 
                <AboutBlurb />                  
                <Box sx={{
                    backgroundColor: "#fff"
                }}>
                    <Box sx={{
                        height: {
                            xs: "4rem",
                            lg: "8rem"
                        }
                    }} className="polygon radial"></Box> 
                </Box>  
                <Box sx={{ backgroundColor: "#fff" }}>                       
                    <Outro /> 
                </Box>
            </Box>
        </>
    )
  }
  
  export default HomePage;
  