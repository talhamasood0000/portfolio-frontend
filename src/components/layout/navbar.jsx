import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ShoppingCartCheckout } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../media/test.svg";
import logo1 from "../../media/download.svg";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import { Close } from "@mui/icons-material";
import { Inbox, Drafts } from "@mui/icons-material";
import { ListItemButton, Typography } from "@mui/material";
import { MenuOpenRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const drawerWidth = 240;
const PAGES = ["Products", "Services", "About", "Contact Us"];


const Navbar = () => {
  const [tabUnderline, setTabUnderline] = useState();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            className={classes.logo}
          >
            <Image src={logo} alt="Logo" width={70} />
          </IconButton>
          {isMatch ? (
            <Tabs
              textColor="eeeee4"
              indicatorColor="secondary"
              className={classes.tabs}
            >
              <IconButton
                className={classes.menuButton}
                onClick={handleDrawerOpen}
              >
                <MenuOpenRounded />
              </IconButton>
            </Tabs>
          ) : (
            <>
              <Tabs
                className={classes.tabs}
                value={tabUnderline}
                textColor="eeeee4"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#eeeee4",
                  },
                }}
                onChange={(e, value) => setTabUnderline(value)}
              >
                {PAGES.map((item, index) => (
                  <Tab key={index} label={item} className={classes.tab} />
                ))}
              </Tabs>
              <Button variant="contained" className={classes.button}>
                Resume
              </Button>
            </>
          )}
        </Toolbar>
        <Drawer
          anchor="right"
          open={open}
          onClose={() => handleDrawerClose()}
          classes={{ paper: classes.paper }}
        >
          <IconButton 
            style={{ marginTop: '1rem', marginLeft: '0.5rem' }}
            onClick={()=> handleDrawerClose()}
          >
                  <Close style={{ color: 'eeeee4' }}></Close>
          </IconButton>
          <List>
            {PAGES.map((item, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText  primary={<Typography style={{ color: '#eeeee4' }}>{item}</Typography>} />
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
