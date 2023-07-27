import { Box, Container, Typography, Item, Grid } from "@mui/material"
import Stack from "@mui/material/Stack";
import kb from "../images/kb_3.webp"
import Image from "next/image";
import Link from "next/link";

const AboutBlurb = () => {
    return (
        <Box className="bg-cover bg-fixed" sx={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${kb.src})`,
        }}>
            <Container className="gap-10 flex flex-col md:flex-row justify-center" sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
                
            }}>
                <Box className="h-full flex-1 flex flex-col justify-center max-h-64 md:max-h-none rounded-2xl overflow-hidden m-auto"> 
                    {/* <Image height="full" width="full" src={laptop2} className="rounded-2xl bg-cover"/>  */}
                </Box>   

                <Box className="flex-1 flex flex-col justify-center text-white"> 
                    <Typography variant="h5" component="h3" gutterBottom> Area of Focus </Typography>
                    <Typography variant="body1" className="" gutterBottom> 
                        The bulk of my studie are centered around Javascript in addition to related frameworks and 
                        libraries. Since my early years of development, I've been building and learning about React and 
                        Tailwind to keep up with the times. <br/>
                        When I'm not coding, I research web development best practices and look out for new and unique 
                        tools to add to add to my skillset.
                    </Typography> 
                    <Link href="/projects" variant="body1"> More &rarr; </Link>
                </Box> 
            </Container>             
        </Box>
    )
}

export default AboutBlurb

