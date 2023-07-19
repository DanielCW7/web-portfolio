import * as React from 'react';
import { 
    IconButton, 
    MenuItem, 
    Toolbar, 
    AppBar, 
    Typography, 
    Container, 
    Stack, 
    Button, 
    Menu, 
    Drawer,
    Box
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from 'react';

const Nav = () => {

    const [isNavOpen, setNavOpen] = useState(false)

    
    return (
        <AppBar position="static" sx={{backgroundColor: "gray"}}>

                {/* hide on tablet+ */}
                <Container sx={{ display: {xs: "", md: "none"} }}>                        
                    <Box>
                        <IconButton size="large" edge="start" color="inherit" aria-label="nav" onClick={() => {setNavOpen(true)}}>
                            <MenuIcon />
                        </IconButton> 

                        <Drawer anchor="left" open={isNavOpen} onClose={() => {setNavOpen(false)}}>
                            <Box pt={5} width="250px" textAlign="center" role="presentation">
                                <Typography variant="h6" component="div"> Home </Typography>
                                <Typography variant="h6" component="div"> Projects </Typography>
                                <Typography variant="h6" component="div"> About </Typography>
                            </Box>
                        </Drawer>                
                    </Box>
                </Container>




                {/* hide on mobile */}
                <Container sx={{ display: {xs: "none", md: "flex"} }}>                        
                <Typography variant="h7" component="div" sx={{flexGrow: 1}}></Typography>

                    <Toolbar>
                        <Stack direction="row" spacing={2}>
                            <Button color="inherit"> Home </Button>
                            <Button color="inherit"> Projects </Button>
                            <Button color="inherit"> About </Button>
                        </Stack>
                        <Menu id="nav-menu">
                            <MenuItem> Home </MenuItem>
                            <MenuItem> Projects </MenuItem>
                            <MenuItem> About </MenuItem>
                        </Menu>
                    </Toolbar>                    
                </Container>

        </AppBar>            

    )
}
export default Nav;
