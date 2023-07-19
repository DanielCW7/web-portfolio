import * as React from 'react';
import { IconButton, MenuItem, Toolbar, AppBar, Typography, Container, Stack,Button } from '@mui/material';
import DehazeIcon from "@mui/icons-material/Dehaze"

const Nav = () => {
    return (
        <AppBar position="static" sx={{
            backgroundColor: "gray"
        }}>
            <Container>
                <Toolbar>
                    <IconButton>
                        <DehazeIcon size="large" edge="start" color="inherit" aria-label="nav"></DehazeIcon>
                    </IconButton>
                    <Typography variant="h7" component="div" sx={{flexGrow: 1}}> 
                         
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="inherit"> Home </Button>
                        <Button color="inherit"> Projects </Button>
                        <Button color="inherit"> About </Button>

                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>            

    )
}
export default Nav;
