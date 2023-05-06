import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { ShoppingCartCheckout } from "@mui/icons-material";
import Image from "next/image";
import logo from "../../media/test.svg";
import logo1 from "../../media/download.svg";
const Navbar = () => {
  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Image src={logo} alt="Logo" width={70} />
          </IconButton>
          <Tabs sx={{ marginLeft: "auto" }} textColor="eeeee4">
            <Tab label="First" />
            <Tab label="Second" />
            <Tab label="Third" />
          </Tabs>
          <Button variant="contained">Resume</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
