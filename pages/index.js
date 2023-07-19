import Button from "@mui/material/Button"
import { Backdrop, Box, CircularProgress, List, ListItem, ListItemButton, ListItemText, Typography, Divider, AppBar, Toolbar, IconButton, MenuItem, Drawer } from "@mui/material";
import Navbar from "@/components/nav";
import { useState } from "react";
import * as React from "react";

function HomePage() {    

    const navItems = ["Home", "About", "Contact"]
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const navDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={navDrawerToggle}>
            <Typography variant="h6">
                Daniel
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => {
                    <ListItem key={item}>
                        <ListItemButton>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                })}
            </List>
        </Box>
    )


    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton onClick={navDrawerToggle} color="inherit">
                        <MenuItem />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer variant="temporary" open={mobileOpen} onClose={navDrawerToggle} ModalProps={{
                    keepMounted: true
                }}>
                    {drawer}
                </Drawer>
            </Box>
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
            </Box>
            
        </>
    )
  }
  
  export default HomePage;
  