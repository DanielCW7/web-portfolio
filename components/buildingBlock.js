import { Box, Container, Typography, Item, Grid } from "@mui/material"
import Image from "next/image";
import Link from "next/link";

const BuildingBlock = () => {
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
                <Box className="flex-1 flex flex-col justify-center text-center">
                    <Typography variant="h5" component="h3" gutterBottom> Engineer </Typography>
                    <Typography variant="body1" className=" text-center" gutterBottom> 
                        Building robust infrastructures, weaving technology to power the web's dynamic potential.
                    </Typography> 
                </Box>                    
            </Container>             
        </Box>
    )
}

export default BuildingBlock