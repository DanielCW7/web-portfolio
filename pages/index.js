import Button from "@mui/material/Button"
import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import Navbar from "@/components/nav";
import { useState } from "react";
import * as React from "react";

function HomePage() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleOpen = () => {
      setOpen(true);
    };
    
    return (
        <>
        <Navbar/>
            <Box>
                <Typography sx={{p: 1}} variant="h1"> Daniel C. Wilson </Typography>
                <Typography sx={{p: 1}} variant="h2"> Daniel C. Wilson </Typography>
                <Typography sx={{p: 1}} variant="h3"> Daniel C. Wilson </Typography>
                <Typography sx={{p: 1}} variant="h4"> Daniel C. Wilson </Typography>
                <Typography sx={{p: 1}} variant="h5"> Daniel C. Wilson </Typography>
                <Typography sx={{p: 1}} variant="h6"> Daniel C. Wilson </Typography>

                <Typography variant="body1"> 
                    A lifelong learner with a desire to build something amazing. 
                    Let’s connect and build something together. 
                </Typography>

                {/* creates a backdrop layer and loader */}
                <Button variant="outlined" onClick={handleOpen}> show backdrop </Button>
                <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1}} open={open} onClick={handleClose}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </Box>
            
        </>
    )
  }
  
  export default HomePage;
  