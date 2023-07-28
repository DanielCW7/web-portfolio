import { Box, Container, Typography, Item, Grid, Button } from "@mui/material"
import Stack from "@mui/material/Stack";
import dt from "../images/dt_6.JPG"
import Image from "next/image";
import Link from "next/link";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import { Phone } from "@mui/icons-material";

const Outro = () => {
    return (

            <Container className="gap-10 flex flex-col md:flex-row justify-center" sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
            }}>
                <Box className="md:hidden h-full flex-1 flex flex-col justify-center max-h-64 md:max-h-none rounded-2xl overflow-hidden m-auto"> 
                    <Image height="full" width="full" src={dt} className="rounded-2xl bg-cover"/> 
                </Box>  
                <Box className="flex-1 my-auto"> 
                    <Typography variant="h5" component="h3" gutterBottom> Let's Connect </Typography>
                    <Typography variant="body1" className="" gutterBottom> 
                        I would love the chance to prove myself as a valuable asset. 
                        If you think that I would make a good addition to your team, then let's talk! 
                    </Typography> 
                    {/* <Typography variant="body1" className="" gutterBottom> 
                        I'm always learning and working on my next project, but experience is the best teacher by far.
                        If you like my projects, please don't hesitate to reach out!
                    </Typography>  */}
                    <Button href="/projects" variant="outlined" className="mt-5"> contact </Button>                        


                </Box>                 
                <Box className="hidden md:flex h-full flex-1 flex-col justify-center max-h-64 md:max-h-none rounded-2xl overflow-hidden m-auto"> 
                    <Image height="full" width="full" src={dt} className="rounded-2xl bg-cover"/> 
                </Box>   

                
            </Container>            
    )
}

export default Outro

