import Button from "@mui/material/Button"
import { Accordion, Box, Typography, AppBar, Toolbar, Drawer } from "@mui/material";

function Nav() {

    
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
        </>
    )
  }
  
  export default Nav;