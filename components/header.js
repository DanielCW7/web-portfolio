import Button from "@mui/material/Button"
import * as React from "react";
import laptop2 from "../images/laptop2.jpg"
import { Container, Box, Typography } from '@mui/material';


const Header =() => {
    return (
        <header>
            <Box sx={{
                backgroundImage: `url(${laptop2.src})`,
                backgroundRepeat: "no-repeat",
                position: "relative",
                width: "100%",
                p: {
                    xs: 2,
                    sm: 8,
                    md: 18,
                    
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center',       
            }}>
                <Container sx={{
                    p:5,
                }}>
                    <Typography sx={{
                        fontSize: {
                            xs: "3rem", 
                            sm: "4rem", 
                            md: "5rem"
                        },
                        color: "#fff",
                        fontWeight: "bold"
                    }} variant="h1"> Daniel C. Wilson </Typography>

                    <Typography sx={{color: "#fff"}}> 
                        A lifelong learner with a desire to change the world. 
                        Let’s connect and build something together. 
                    </Typography> 

                    <Button variant="outlined"> My Work </Button>
                </Container>
               
            </Box>
        </header>
    )
}

export default Header