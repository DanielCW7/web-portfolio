import { Box, Container, Typography, Item, Grid } from "@mui/material"
import Image from "next/image";
import Link from "next/link";

const BuildingBlock = () => {
    return (
        <Box className="bg-cover bg-fixed">
            <Container className="gap-10 flex flex-col md:flex-row justify-center" sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
            }}>
                <Box className="flex-1 flex flex-col justify-center text-center ">
                    {/* different font type? */}
                    {/* "typewriter" function on w3schools */}
                    <Typography className="font-black" variant="h1" component="h2" gutterBottom> I am "motivated" </Typography>
                </Box>                    
            </Container>             
        </Box>
    )
}

export default BuildingBlock