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

const Navbar = () => {
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
        <AppBar color="primary" sx={{ position: "static" }}>
          <Container>
            <Toolbar>
              <IconButton aria-label="menu">
                <Image src={logo} alt="Logo" width={70} />
              </IconButton>
              {isMatch ? (
                <Tabs sx={{ marginLeft: "auto" }}>
                  <IconButton
                    sx={{ marginLeft: "auto", fontSize: "2rem" }}
                    onClick={handleDrawerOpen}
                    color="secondary"
                  >
                    <MenuOpenRounded />
                  </IconButton>
                </Tabs>
              ) : (
                <>
                  <Tabs
                    value={tabUnderline}
                    onChange={(e, value) => setTabUnderline(value)}
                    textColor="secondary"
                    indicatorColor="secondary"
                    sx={{ marginLeft: "auto" }}
                  >
                    {PAGES.map((item, index) => (
                      <Tab
                        key={index}
                        label={item}
                        sx={{
                          color: theme.palette.secondary.main,
                          minWidth: "80px",
                        }}
                      />
                    ))}
                  </Tabs>
                  <Button variant="outlined" color="secondary">
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
            PaperProps={{
              sx: {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
              },
            }}
          >
            <IconButton
              style={{ marginTop: "1rem", marginLeft: "0.5rem" }}
              onClick={() => handleDrawerClose()}
            >
              <Close style={{ color: theme.palette.secondary.main }}></Close>
            </IconButton>
            <List>
              {PAGES.map((item, index) => (
                <ListItemButton key={index} onClick={() => handleDrawerClose()}>
                  <ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          style={{ color: theme.palette.secondary.main }}
                        >
                          {item}
                        </Typography>
                      }
                    />
                  </ListItemIcon>
                </ListItemButton>
              ))}
                <ListItemButton onClick={() => handleDrawerClose()}>
                  <ListItemIcon>
                    <Button variant="outlined" color="secondary">
                      Resume
                    </Button>
                  </ListItemIcon>
                </ListItemButton>
            </List>
          </Drawer>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
