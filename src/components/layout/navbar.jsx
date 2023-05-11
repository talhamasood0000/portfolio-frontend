import React from "react";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { ListItemButton, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";
import { Close, MenuOpenRounded } from "@mui/icons-material";

import Image from "next/image";
import logo from "../../media/test.svg";
import logo1 from "../../media/download.svg";

const drawerWidth = 240;
const PAGES = ["Products", "Services", "About", "Contact Us"];

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "#063970",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    right: 0,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  menuButton: {
    marginLeft: "auto",
    color: "#eeeee4",
    fontSize: "2rem",
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    minWidth: "80px",
    color: "#eeeee4",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [tabUnderline, setTabUnderline] = useState();
  const [open, setOpen] = useState(false);

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
              textColor="#eeeee4"
              indicatorColor="secondary"
              className={classes.tabs}
              sx={{color:"#eeeee4"}}
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
                textColor="#eeeee4"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#eeeee4"
                  }
                }}
                sx={{marginLeft: "auto"}}
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
              <ListItemButton key={index} onClick={()=>handleDrawerClose()}>
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
