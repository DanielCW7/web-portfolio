import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{
            padding: "0rem 1.25rem",
            marginTop: "5rem",
            padding: 2
        }} className='charcoal'>
            <Container sx={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Box sx={{
                    display: "flex",
                    flex: "1 1 0%"
                }}>
                    <a href="mailto:dev.danielcw@gmail.com"><Typography sx={{ color: "white" }} variant="body2"> Dev.danielcw@gmail.com </Typography></a>
                </Box>
                <Box sx={{ 
                    display: "flex",
                    flex: "1 1 0%",
                    gap: 1,
                    justifyContent: "flex-end"
                }}>
                    <Link href="https://github.com/DanielCW7"><GitHubIcon sx={{ color: "#fff"}} /></Link>
                    <Link href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177"><LinkedInIcon sx={{ color: "#fff"}} /></Link>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer