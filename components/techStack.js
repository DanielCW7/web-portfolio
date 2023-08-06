import { Box, Container, Typography, Card, Button } from "@mui/material"

const TechStack = () => {
    return (
        <Box>
            <Container className="flex flex-col gap-10 md:flex-row justify-center" sx={{
                minHeight: {
                    xs: "40vh",
                    sm: "40vh",
                    md: "45vh",  
                },
                p: 5
            }}>
                <Box className="flex flex-row flex-1 justify-center border-2 justify-center">
                    <Box className="grid grid-cols-4 gap-x-10 gap-y-10">
                        <Box className="box bg-gray-200 rounded"></Box>
                        <Box className="box bg-gray-200 rounded"></Box>
                        <Box className="box bg-gray-200 rounded"></Box>
                        <Box className="box bg-gray-200 rounded"></Box>                        
                    </Box>
                </Box>                
                <Box className="flex flex-col flex-1 justify-center">
                    <Typography className="font-black" variant="h2" sx={{
                        fontSize: {
                            xs: "2rem",
                            md: "3rem",
                            lg: "4rem"
                        }
                    }}> My Tech Stack </Typography>
                    <Typography variant="body2"> 
                        wsodlfrjvnqw rfqw rf qw ref qwerg qer gqergqerg qergqwerg qwergqwergqe rgqerg qergqe rg wsodlfrjvnqw rfqw rf qw ref qwerg qer gqergqerg qergqwerg qwergqwergqe rgqerg qergqe rg
                    </Typography>
                </Box>

            </Container>
        </Box>    
    )
}

export default TechStack