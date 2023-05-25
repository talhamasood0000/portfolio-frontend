import React from "react";
import { useState } from "react";

import {
  Container,
  AppBar,
  Toolbar,
  Stack,
  List,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
  Button,
  IconButton,
  Drawer,
  Box,
  ListItemButton,
  Typography,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { makeStyles } from "@mui/styles";
import { Close, MenuOpenRounded } from "@mui/icons-material";

import Image from "next/image";
import logo from "../../media/test.svg";
import logo1 from "../../media/download.svg";

const PAGES = ["Products", "Services", "About", "Contact Us"];

const useStyles = makeStyles({
  paper: {
    background: "#063970",
  },
  menuButton: {
    marginLeft: "auto",
    color: "#eeeee4",
    fontSize: "2rem",
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
      <Box>
        <AppBar sx={{ background: "#063970", position: "static" }}>
          <Container>
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
                  sx={{ color: "#eeeee4" }}
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
                        backgroundColor: "#eeeee4",
                      },
                    }}
                    sx={{ marginLeft: "auto" }}
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
          </Container>
          <Drawer
            anchor="right"
            open={open}
            onClose={() => handleDrawerClose()}
            classes={{ paper: classes.paper }}
          >
            <IconButton
              style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
              onClick={() => handleDrawerClose()}
            >
              <Close style={{ color: "#eeeee4" }}></Close>
            </IconButton>
            <List>
              {PAGES.map((item, index) => (
                <ListItemButton key={index} onClick={() => handleDrawerClose()}>
                  <ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography style={{ color: "#eeeee4" }}>
                          {item}
                        </Typography>
                      }
                    />
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </List>
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
