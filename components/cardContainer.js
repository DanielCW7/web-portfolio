import { Button, Container } from "@mui/material";
import Card from "./card";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const CardContainer = () => {
    return (
        <Container>
            <Grid container spacing={1}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </Grid>   


        </Container>

    )
}

export default CardContainer