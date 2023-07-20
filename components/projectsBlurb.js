import { Box, Container, Typography, Item, Grid } from "@mui/material"
import Stack from "@mui/material/Stack";
import laptop2 from "../images/laptop2.jpg"
import Image from "next/image";
import Link from "next/link";

const ProjectBlurb = () => {
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
                    <Image height="full" width="full" src={laptop2} className="rounded-2xl bg-cover"/> 
                </Box>  
                <Box className="flex-1 flex flex-col justify-center"> 
                    <Typography variant="h5" component="h3" gutterBottom> My Portfolio </Typography>
                    <Typography variant="body1" className="" gutterBottom> 
                        Since 2019, my journey into web engineering has been challenging and rewarding. Once I started building 
                        and didn't stop. I'm always looking for new things to create, no matter how complex.
                        <br/>
                        Every time I start a project, I look at the things I can learn from it. I am a believer in always setting 
                        new goals to achieve!
                    </Typography> 
                    <Link href="/projects" variant="body1"> Projects &rarr; </Link>
                </Box>                 
                <Box className="hidden md:flex h-full flex-1 flex-col justify-center max-h-64 md:max-h-none rounded-2xl overflow-hidden m-auto"> 
                    <Image height="full" width="full" src={laptop2} className="rounded-2xl bg-cover"/> 
                </Box>   

                
            </Container>            
    )
}

export default ProjectBlurb

