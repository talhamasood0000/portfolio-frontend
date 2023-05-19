import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        paddingTop: "30px",
        backgroundColor: "yellowgreen",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          container
          justifyContent="center"
          alignItems="flex-start"
        >
          <Stack direction="column">
            <Typography variant="body1" align="center">
              Copyright @ {currentYear};
            </Typography>
            <Typography variant="body1" align="center">
              Designed by User
            </Typography>
            <Typography variant="body1" align="center">
              Copyright @ {currentYear};
            </Typography>
            <Typography variant="body1" align="center">
              Designed by User
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          container
          justifyContent="center"
          alignItems="flex-start"
        >
          <Stack direction="row">
            <FacebookIcon />
            <InstagramIcon />
            <GitHubIcon />
            <LinkedInIcon />
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="body1" align="center">
            Copyright @ {currentYear};
          </Typography>
          <Typography variant="body1" align="center">
            Designed by User
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
