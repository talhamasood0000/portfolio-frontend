import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button'
import { ShoppingCartCheckout } from '@mui/icons-material';
const Navbar = () => {
  return (
    <AppBar sx={{background: '#063970'}}>
    <Toolbar>
      <ShoppingCartCheckout />
      <Tabs sx={{ marginLeft: "auto" }} textColor="inherit">
        <Tab label="First" />
        <Tab label="Second" />
        <Tab label="Third" />
      </Tabs>
      <Button variant='contained'>Resume</Button>
    </Toolbar>
    
  </AppBar>
  )
}

export default Navbar;