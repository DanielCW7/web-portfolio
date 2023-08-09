import { Box, Container, Typography, Card, Button } from "@mui/material"
import GroupIcon from '@mui/icons-material/Group';
import BrushIcon from '@mui/icons-material/Brush';
import DataObjectIcon from '@mui/icons-material/DataObject';

const AboutBlurb = () => {
    return (
        <Box className="flex flex-col justify-center bg-cover bg-fixed shadow">
            <Container className="gap-10 flex flex-col md:flex-row justify-center" sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
            }}>
                <Box className="flex-1 flex flex-col justify-center text-center text-white"> 
                    <DataObjectIcon className="text-6xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Developer </Typography>
                    <Typography variant="body1" className=" text-center" gutterBottom> 
                        Building robust infrastructures, weaving technology to power the web's dynamic potential.
                    </Typography> 
                </Box>                    

                <Box className="flex-1 flex flex-col justify-center text-center text-white"> 
                    <BrushIcon className="text-6xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Designer </Typography>
                    <Typography variant="body1" className="text-center" gutterBottom> 
                        Helping others, contributing expertise, and achieving greatness through teamwork.
                    </Typography> 
                </Box> 

                <Box className="flex-1 flex flex-col justify-center text-center text-white"> 
                    <GroupIcon className="text-6xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Team Player </Typography>
                    <Typography variant="body1" className="text-center" gutterBottom> 
                        Helping others, contributing expertise, and achieving greatness through teamwork.
                    </Typography> 
                </Box> 
            </Container>
        </Box>
    )
}

export default AboutBlurb

