import { Box, Typography, Container, Card, CardMedia, Link } from "@mui/material"
import Header from "@/components/header"
import kb from "../images/kb_1.webp"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
<>
            <Header 
                title="Contact" 
                subtitle=""
                link=""
                cta=""
                img={kb}
                alt="my keyboard"
            />
            <Box>
                <Container sx={{ textAlign: "center", paddingY: 10}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left",
                        gap: 2
                    }}>
                        <Link underline="hover" className="cursor-pointer" href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177/"><LinkedInIcon/> LinkedIn </Link>
                        <Link underline="hover" className="cursor-pointer" href="https://github.com/DanielCW7"><GitHubIcon/> Github </Link> 
                        <Link underline="hover" className="cursor-pointer" href="mailto:dev.danielcw@gmail.com"><EmailIcon/> dev.danielcw@gmail.com </Link>                        
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default Contact