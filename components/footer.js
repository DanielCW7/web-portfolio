import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box className='charcoal py-5 mt-20'>
            <Container className="flex flex-row">
                <Box className="flex-1 flex">
                    <a href="mailto:dev.danielcw@gmail.com"><Typography variant="body2" className="text-white"> Dev.danielcw@gmail.com </Typography></a>
                </Box>
                <Box className="flex-1 flex gap-2 justify-end">
                    <Link href="https://github.com/DanielCW7"><GitHubIcon className="text-white" /></Link>
                    <Link href="https://www.linkedin.com/in/daniel-connor-wilson-a67706177"><LinkedInIcon className="text-white" /></Link>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer