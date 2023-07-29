import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { Close, MenuOpenRounded } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import logo from "../../../public/media/test-cropped.svg";

const PAGES = ["Products", "Services", "About", "Contact Us"];

const drawerWidth = 240;
const navItems = ["Products", "Services", "About", "Contact Us"];

const appBar = (theme) => ({
  position: "static",
  backgroundColor: theme.palette.background.paper,
});

const tabButton = (theme) => ({
  color: "white",
  "&:hover": {
    color: theme.palette.text.hint,
  },
});

const resumeButton = (theme) => ({
  color: theme.palette.text.hint,
  borderColor: theme.palette.text.hint,
  "&:hover": {
    color: "white",
    borderColor: "white",
  },
});

const tabIconButton = (theme) => ({
  marginLeft: "auto",
  color: theme.palette.text.hint,
  mr: 2,
  display: { md: "none" },
  marginRight: "0px",
});

const iconButton = (theme) => ({ 
  paddingLeft: "0px",
  paddingRight: "0px",
});

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton aria-label="menu" style={{ marginTop: "1rem" }}>
        <Close style={{ color: theme.palette.text.hint }}></Close>
      </IconButton>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Typography variant="h5" gutterBottom>
                    {item}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "90px", alignItems: "center", backgroundColor: theme.palette.background.paper }}>
      <AppBar sx={appBar} elevation={0}>
        <Container>
          <Toolbar sx={{paddingLeft: "0px", paddingRight: "0px"}}>
            <IconButton aria-label="menu" sx={iconButton}>
              <Image src={logo} alt="Logo" width={40} />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={tabIconButton}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", md: "block", marginLeft: "auto" },
                "& Button": {
                  marginLeft: 1.5,
                },
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item}
                  sx={{ color: "#fff", fontSize: "13px" }}
                  size="small"
                >
                  <Typography>0{index + 1}.</Typography>{" "}
                  <Typography sx={tabButton}>{item}</Typography>
                </Button>
              ))}
              <Button variant="outlined" sx={resumeButton} size="small">
                Resume
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
