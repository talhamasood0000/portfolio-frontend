import React from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  Container,
  Link,
  Button,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";

const footerBox = (theme) => ({
  paddingTop: "30px",
  paddingBottom: "30px",
  backgroundColor: theme.palette.background.paper,
});

const footerContainer = (theme) => ({
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
  }
});

const footerHeading = {
  textAlign: "center",
};

const mailIcon = (theme) => ({
  color: theme.palette.text.hint,
  fontSize: "40px",
  marginRight: "10px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
});

const resumeButton = (theme) => ({
  borderRadius: "20px",
  color: theme.palette.text.hint,
  borderColor: theme.palette.text.hint,
  width: "200px",
  height: "60px",
  fontSize: "20px",
  [theme.breakpoints.down("xl")]: {
    width: "180px",
    height: "55px",
    fontSize: "18px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "160px",
    height: "50px",
    fontSize: "16px",
  },
  [theme.breakpoints.down("md")]: {
    width: "140px",
    height: "45px",
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "135px",
    height: "40px",
    fontSize: "12px",
  },
  "&:hover": {
    color: "white",
    borderColor: "white",
  },
});

const phoneIcon = (theme) => ({
  color: theme.palette.text.hint,
  fontSize: "40px",
  marginTop: "auto",
  marginBottom: "auto",
  [theme.breakpoints.down("xl")]: {
    fontSize: "40px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "35px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
});

const dividerContainer = {
  paddingTop: "30px",
};

const divider = (theme) => ({
  backgroundColor: theme.palette.info.main,
});

const iconContainer = (theme) => ({
  backgroundColor: theme.palette.background.paper,
  paddingTop: "30px",
});

const iconLogo = (theme) => ({
  fontSize: "35px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "30px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
});

const iconButton = (theme) => ({
  color: theme.palette.text.hint,
  border: "1px solid",
  "&:hover": {
    color: "white",
  },
});

const Footer = () => {
  var currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={footerBox}>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <Container sx={footerContainer}>
            <Typography variant="h2" gutterBottom sx={footerHeading}>
              Connect With Me
            </Typography>
          </Container>
          <Container>
            <Grid
              container
              direction={isSmallScreen ? "column" : "row"}
              justifyContent={isSmallScreen ? "space-between" : "space-between"}
              alignItems={isSmallScreen ? "center" : "center"}
            >
              <Box marginBottom="10px">
                <Stack direction="row" >
                  <MailIcon sx={mailIcon} />
                  <Typography variant="h2" gutterBottom>
                    hello@mail.com
                  </Typography>
                </Stack>
              </Box>
              {!isSmallScreen && (
                <Box marginBottom="10px">
                  <Button
                    variant="outlined"
                    endIcon={<CloudDownloadOutlinedIcon />}
                    size="large"
                    sx={resumeButton}
                  >
                    Resume
                  </Button>
                </Box>
              )}
              <Box marginBottom="10px">
                <Stack direction="row">
                  <PhoneIphoneIcon sx={phoneIcon} />
                  <Stack direction="column">
                    <Typography variant="h2">+923354949456</Typography>
                    <Typography variant="h5">Lahore, Pakistan</Typography>
                  </Stack>
                </Stack>
              </Box>
              {isSmallScreen && (
                <Box marginBottom="10px">
                  <Button
                    variant="outlined"
                    endIcon={<CloudDownloadOutlinedIcon />}
                    size="large"
                    sx={resumeButton}
                  >
                    Resume
                  </Button>
                </Box>
              )}
            </Grid>
          </Container>
          <Container sx={dividerContainer}>
            <Divider sx={divider} />
          </Container>
          <Container sx={iconContainer}>
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Stack direction="row" spacing={4}>
                <IconButton sx={iconButton}>
                  <FacebookIcon sx={iconLogo} />
                </IconButton>
                <IconButton sx={iconButton}>
                  <InstagramIcon sx={iconLogo} />
                </IconButton>
                <IconButton sx={iconButton}>
                  <GitHubIcon sx={iconLogo} />
                </IconButton>
                <IconButton sx={iconButton}>
                  <LinkedInIcon sx={iconLogo} />
                </IconButton>
                <IconButton sx={iconButton}>
                  <FacebookIcon sx={iconLogo} />
                </IconButton>
              </Stack>
            </Box>
          </Container>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
