import Button from "@mui/material/Button"
import * as React from "react";
import laptop from "../images/laptop.webp"
import { Container, Box, Typography } from '@mui/material';


const Header =() => {
    return (
        <header>
            <Box sx={{
                backgroundImage: `url(${laptop.src})`,
                backgroundRepeat: "no-repeat",
                position: "relative",
                width: "100%",
                backgroundSize: 'cover',
                backgroundPosition: 'center', 
                          
            }}>
                <Container sx={{p:2}}>
                    <Typography sx={{
                        fontSize: {
                            xs: "3rem", 
                            sm: "4rem", 
                            md: "5rem"
                        }
                    }} variant="h1"> Daniel C. Wilson </Typography>

                    <Typography variant="body1"> 
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