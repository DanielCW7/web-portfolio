import { Box, Container, Typography, Card } from "@mui/material"
import Link from "next/link";
import GroupIcon from '@mui/icons-material/Group';
import BrushIcon from '@mui/icons-material/Brush';
import DataObjectIcon from '@mui/icons-material/DataObject';

const AboutBlurb = () => {
    return (
        <Box className="bg-cover bg-fixed bg-gray-200">
            <Container className="gap-10 flex flex-col md:flex-row justify-center" sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
            }}>
                <Box className="flex-1 flex flex-col justify-center text-center"> <DataObjectIcon className="text-5xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Developer </Typography>
                    <Typography variant="body1" className=" text-center" gutterBottom> 
                        Building robust infrastructures, weaving technology to power the web's dynamic potential.
                    </Typography> 
                </Box>                    

                <Box className="flex-1 flex flex-col justify-center text-center"> <BrushIcon className="text-5xl mx-auto" gutterBottom />
                    <Typography variant="h5" component="h3" gutterBottom> Designer </Typography>
                    <Typography variant="body1" className="text-center" gutterBottom> 
                        Helping others, contributing expertise, and achieving greatness through teamwork.
                    </Typography> 
                </Box> 

                <Box className="flex-1 flex flex-col justify-center text-center"> <GroupIcon className="text-5xl mx-auto" gutterBottom />
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

