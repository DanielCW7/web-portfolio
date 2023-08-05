import { Container, Box, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box className='charcoal py-5 mt-20'>
            <Container className="flex flex-row">
                <Box className="flex-1 flex">
                    <Typography variant="body2" className="text-white"> Dev.danielcw@gmail.com </Typography>
                </Box>
                <Box className="flex-1 flex gap-2 justify-end">
                    <GitHubIcon className="text-white" />
                    <LinkedInIcon className="text-white" />
                </Box>
            </Container>
        </Box>
    )
}

export default Footer