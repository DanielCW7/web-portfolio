import * as React from 'react';
import { 
    IconButton, 
    Toolbar, 
    AppBar, 
    Typography, 
    Container, 
    Stack, 
    Button, 
    Drawer,
    Box,
    Divider
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {

    const [isNavOpen, setNavOpen] = useState(false)

    
    return (
        <AppBar position="sticky" color="transparent" className="charcoal" >

                {/* hide on tablet+ */}
                <Container sx={{ 
                    display: {xs: "", md: "none"} 
                }}>                        
                    <Box>
                        <IconButton sx={{ color: "#fff"}} size="large" edge="start" aria-label="nav" onClick={() => {setNavOpen(true)}}>
                            <MenuIcon />
                        </IconButton> 

                        <Drawer anchor="left" open={isNavOpen} onClose={() => {setNavOpen(false)}}>
                            <Box pt={5} width="250px" textAlign="center" role="presentation">
                                <Link onClick={() => {setNavOpen(false)}} href="/"><Typography variant="h6" component="div"> Home </Typography><Divider/></Link>
                                <Link onClick={() => {setNavOpen(false)}}  href="/projects"><Typography variant="h6" component="div"> Projects </Typography><Divider/></Link>
                                <Link onClick={() => {setNavOpen(false)}}  href="/about"><Typography variant="h6" component="div"> About </Typography><Divider/></Link>
                            </Box>
                        </Drawer>                
                    </Box>
                </Container>


                {/* hide on mobile */}
                <Container sx={{ 
                    display: {xs: "none", md: "flex"} 
                }}>                        
                <Typography sx={{ flexGrow: 1 }} variant="h7" component="div"></Typography>

                    <Toolbar>
                        <Stack sx={{ color: "#fff"}} direction="row" spacing={2} id="nav-menu">
                            <Link href="/"><Button color="inherit"> Home </Button></Link>
                            <Link href="/projects"><Button color="inherit"> Projects </Button></Link>
                            <Link href="/about"><Button color="inherit"> About </Button></Link>
                        </Stack>
                    </Toolbar> 

                </Container>

        </AppBar>            

    )
}
export default Nav;
