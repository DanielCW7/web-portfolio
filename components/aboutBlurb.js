import { Box, Container, Typography, Item, Grid } from "@mui/material"
import Stack from "@mui/material/Stack";
import laptop2 from "../images/laptop.webp"
import Image from "next/image";
const AboutBlurb = () => {
    return (
        <Container className="flex flex-row">
            <Box className="border-2 border-red-900 flex-1"> 
                Since 2019, I've been teaching myself the ins and outs 
                of coding and web development. After much determination and patience, I landed my first job in Nashville 
                as a WordPress developer. Since then, I’ve been searching for ways to expand my learning 
                so that one day work at a big tech company. 
            </Box>
            <Box className="border-2 border-red-900 flex-1"> 
                <Image height={100} width={100} src={laptop2} className="border-2 border-blue-900"/> 
            </Box>
        </Container>
    )
}

export default AboutBlurb

