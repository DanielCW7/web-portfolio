import * as React from "react";
import Button from "@mui/material/Button"
import { Box, Typography } from "@mui/material";

function HomePage() {


    
    return (
        <>
            <Box>
                <Typography sx={{p: 1}} variant="h1"> Hello H1 </Typography>
                <Button variant="contained"> Hello World </Button>
            </Box>
        </>
    )
  }
  
  export default HomePage;
  