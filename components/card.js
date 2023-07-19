import { Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid";
const Card = () => {
    return (
        <Grid item xs={12} sm={8} md={6}>
            <Paper elevation={2}> card </Paper>
        </Grid>
    )
}

export default Card