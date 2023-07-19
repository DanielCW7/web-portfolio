import Button from "@mui/material/Button"
import { Backdrop, Box, CircularProgress, List, ListItem, ListItemButton, ListItemText, Typography, Divider, AppBar, Toolbar, IconButton, MenuItem, Drawer } from "@mui/material";
import Navbar from "@/components/nav";
import { useState } from "react";
import * as React from "react";

function HomePage() {    


    return (
        <>
            <Navbar />
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
        </>
    )
  }
  
  export default HomePage;
  