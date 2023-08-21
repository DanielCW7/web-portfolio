import { Box, Container, Typography, Button } from "@mui/material"
import dt from "../images/dt_6.webp"

import Image from "next/image";

const Outro = () => {
    return (

            <Container sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5,
                gap: "2.5rem",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                justifyContent: "center"

            }}>

                <Box sx={{
                    height: "100%",
                    display: {
                        xs: "flex",
                        md: "none"
                    },
                    height: "100%",
                    flexDirection: "column",
                    flex: "1 1 0%",
                    justifyContent: "center",
                    maxHeight: {
                        xs: "16rem",
                        lg: ""
                    },
                    borderRadius: "1rem",
                    overflow: "hidden",
                    margin: "auto"
                }}> 
                    <Image sx={{
                        borderRadius: "1rem",
                        backgroundSize: "cover"
                    }} height="full" width="full" src={dt} /> 
                </Box>  
                <Box sx={{
                    flex: "1 1 0%",
                    marginTop: "auto",
                    marginBottom: "auto"
                }}> 
                    <Typography variant="h5" component="h3" gutterBottom> Let's Connect </Typography>
                    <Typography variant="body1" gutterBottom> 
                        I know that if given the chance I would be a valuable asset to a 
                        web development team. If you think that I would make a good addition 
                        to your team, then let's talk! 
                    </Typography> 
                    {/* <Typography variant="body1" className="" gutterBottom> 
                        I'm always learning and working on my next project, but experience is the best teacher by far.
                        If you like my projects, please don't hesitate to reach out!
                    </Typography>  */}
                    <Button sx={{
                        marginTop: "1.25rem"
                    }} href="mailto:dev.danielcw@gmail.com" variant="outlined"> contact </Button>                        


                </Box>                 
                <Box sx={{
                    height: "100%",
                    display: {
                        xs: "none",
                        md: "flex"
                    },
                    flexDirection: "column",
                    flex: "1 1 0%",
                    justifyContent: "center",
                    maxHeight: {
                        xs: "16rem",
                        lg: ""
                    },
                    borderRadius: "1rem",
                    overflow: "hidden",
                    margin: "auto"
                }}> 
                    <Image sx={{
                        borderRadius: "1rem",
                        backgroundSize: "cover"
                    }} height="full" width="full" src={dt} /> 
                </Box>   

            </Container>            
    )
}

export default Outro

