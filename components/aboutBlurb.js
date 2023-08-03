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

{/* desktop */}
                <Box className="hidden md:flex border-2 border-red-600">
                    <Box className="flex flex-col gap-12 flex-1">
                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                            <DataObjectIcon className="text-5xl mx-auto" gutterBottom />
                            <Typography variant="h5" component="h3" gutterBottom> Web Engineering </Typography>
                        </Box>                    

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <BrushIcon className="text-5xl mx-auto" gutterBottom />
                            <Typography variant="h5" component="h3" gutterBottom> Design </Typography>
                        </Box> 

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <GroupIcon className="text-5xl mx-auto" gutterBottom />
                            <Typography variant="h5" component="h3" gutterBottom> Teamwork </Typography>
                        </Box> 
                    </Box>

                    <Box className="hidden md:flex flex-col flex-1">
                        <Typography className="text-center m-auto" variant="h3"  sx={{
                            fontSize: {
                                xs: "2rem", 
                                sm: "3rem", 
                                md: "4rem"
                            },
                            fontWeight: "bold"
                        }}> My Strengths </Typography>
                    </Box>

                    <Box className="flex flex-col gap-12 flex-1">
                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                            <DataObjectIcon className="text-5xl mx-auto" gutterBottom />
                            <Typography variant="h5" component="h3" gutterBottom> Responsive Design </Typography>

                        </Box>                    

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <BrushIcon className="text-5xl mx-auto" gutterBottom />
                            <Typography variant="h5" component="h3" gutterBottom> Design </Typography>
    
                        </Box> 

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <GroupIcon className="text-5xl mx-auto" gutterBottom />
                            <Typography variant="h5" component="h3" gutterBottom> Teamwork </Typography>
                        </Box>                     
                    </Box>                    
                </Box>


{/* mobile */}
                <Box className="flex md:hidden">
                <Typography className="text-center m-auto" variant="h3"  sx={{
                        fontSize: {
                            xs: "2rem", 
                            sm: "3rem", 
                        },
                        fontWeight: "bold"
                    }}> My Strengths </Typography>
                </Box>
                <Box className="flex md:hidden">
                    <Box className="flex flex-col gap-12 flex-1">
                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                            <DataObjectIcon className="text-4xl mx-auto" gutterBottom />
                            <Typography variant="h7" component="p" gutterBottom> Web Engineering </Typography>

                        </Box>                    

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <BrushIcon className="text-4xl mx-auto" gutterBottom />
                            <Typography variant="h7" component="p" gutterBottom> Design </Typography>
    
                        </Box> 

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <GroupIcon className="text-4xl mx-auto" gutterBottom />
                            <Typography variant="h7" component="p" gutterBottom> Teamwork </Typography>
                        </Box> 
                    </Box>

                    <Box className="hidden md:flex flex-col flex-1">
                        <Typography className="text-center m-auto" variant="h3"  sx={{
                            fontSize: {
                                md: "4rem"
                            },
                            fontWeight: "bold"
                        }}> My Strengths </Typography>
                    </Box>

                    <Box className="flex flex-col gap-12 flex-1">
                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                            <DataObjectIcon className="text-4xl mx-auto" gutterBottom />
                            <Typography variant="h7" component="p" gutterBottom> Responsive Design </Typography>

                        </Box>                    

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <BrushIcon className="text-4xl mx-auto" gutterBottom />
                            <Typography variant="h7" component="p" gutterBottom> Design </Typography>
    
                        </Box> 

                        <Box className="flex-1 flex flex-col justify-center text-center"> 
                        <GroupIcon className="text-4xl mx-auto" gutterBottom />
                            <Typography variant="h7" component="p" gutterBottom> Teamwork </Typography>
                        </Box>                     
                    </Box>                    
                </Box>


            </Container>             
        </Box>
    )
}

export default AboutBlurb

